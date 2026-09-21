import { NextRequest, NextResponse } from "next/server";
import { checkRateLimit } from "lib/ai/rate-limiter";
import {
  VALERII_SYSTEM_PROMPT,
  FALLBACK_OFFLINE_RESPONSE,
} from "lib/ai/persona";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const MAX_MESSAGE_LENGTH = 4000;
const MAX_HISTORY_LENGTH = 15;

export async function POST(req: NextRequest) {
  try {
    // 1. IP extraction & rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
      return new NextResponse(
        `Rate limit hit — give it ~${rateLimit.retryAfterSeconds || 30}s. Or just email valerii.matviiv@gmail.com directly.`,
        {
          status: 429,
          headers: {
            "Content-Type": "text/plain; charset=utf-8",
            "Retry-After": String(rateLimit.retryAfterSeconds || 30),
          },
        }
      );
    }

    // 2. Input validation
    const body = await req.json().catch(() => null);
    if (!body || !Array.isArray(body.messages) || body.messages.length === 0) {
      return NextResponse.json(
        { error: "Invalid request payload. Expected an array of messages." },
        { status: 400 }
      );
    }

    const messages: ChatMessage[] = body.messages.slice(-MAX_HISTORY_LENGTH);

    // Validate each message
    for (const msg of messages) {
      if (
        typeof msg.role !== "string" ||
        (msg.role !== "user" && msg.role !== "assistant") ||
        typeof msg.content !== "string" ||
        msg.content.trim().length === 0
      ) {
        return NextResponse.json(
          { error: "Invalid message format." },
          { status: 400 }
        );
      }
      if (msg.content.length > MAX_MESSAGE_LENGTH) {
        return NextResponse.json(
          {
            error: `Message exceeds maximum allowed length of ${MAX_MESSAGE_LENGTH} characters.`,
          },
          { status: 400 }
        );
      }
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // 3. Fallback when API key is missing
    if (!apiKey) {
      // Stream the fallback response so the client still gets the nice typewriter feel
      const encoder = new TextEncoder();
      const fallbackStream = new ReadableStream({
        async start(controller) {
          const words = FALLBACK_OFFLINE_RESPONSE.split(" ");
          for (let i = 0; i < words.length; i++) {
            const chunk = (i === 0 ? "" : " ") + words[i];
            controller.enqueue(encoder.encode(chunk));
            // Tiny delay between words for typewriter effect
            await new Promise((resolve) => setTimeout(resolve, 20));
          }
          controller.close();
        },
      });

      return new NextResponse(fallbackStream, {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "no-cache, no-transform",
        },
      });
    }

    // 4. Format contents for Google Gemini API
    // Map roles: 'user' -> 'user', 'assistant' -> 'model'
    const contents = messages.map((m) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

    // Call Gemini 3.6 Flash (official successor to gemini-2.0-flash)
    const model = process.env.GEMINI_MODEL || "gemini-3.6-flash";
    const geminiEndpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:streamGenerateContent?alt=sse&key=${encodeURIComponent(
      apiKey
    )}`;

    const geminiPayload = {
      system_instruction: {
        parts: [{ text: VALERII_SYSTEM_PROMPT }],
      },
      contents,
      generationConfig: {
        temperature: 0.72,
        maxOutputTokens: 1500,
      },
    };

    const geminiRes = await fetch(geminiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(geminiPayload),
    });

    if (!geminiRes.ok) {
      const errorText = await geminiRes.text();
      console.error("Gemini API error:", geminiRes.status, errorText);

      if (geminiRes.status === 429) {
        return new NextResponse(
          "Google's rate limit for this API key is momentarily exhausted. Try again in a minute, or email valerii.matviiv@gmail.com.",
          {
            status: 429,
            headers: { "Content-Type": "text/plain; charset=utf-8" },
          }
        );
      }

      return new NextResponse(
        "Something went wrong connecting to the AI backend. Try again in a second.",
        {
          status: 502,
          headers: { "Content-Type": "text/plain; charset=utf-8" },
        }
      );
    }

    // 5. Parse SSE from Gemini and stream pure text chunks to client
    const encoder = new TextEncoder();
    const decoder = new TextDecoder();
    const reader = geminiRes.body?.getReader();

    if (!reader) {
      return new NextResponse("Unable to establish streaming connection.", {
        status: 500,
      });
    }

    const stream = new ReadableStream({
      async start(controller) {
        let buffer = "";

        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split("\n");
            // Keep the last incomplete line in buffer
            buffer = lines.pop() || "";

            for (const line of lines) {
              const trimmed = line.trim();
              if (trimmed.startsWith("data: ")) {
                const jsonStr = trimmed.slice(6).trim();
                if (jsonStr) {
                  try {
                    const parsed = JSON.parse(jsonStr);
                    const textChunk =
                      parsed.candidates?.[0]?.content?.parts?.[0]?.text;
                    if (textChunk) {
                      controller.enqueue(encoder.encode(textChunk));
                    }
                  } catch {
                    // Ignore SSE json parse hiccups for ping/keep-alive lines
                  }
                }
              }
            }
          }

          // Handle any residual data
          if (buffer.trim().startsWith("data: ")) {
            try {
              const jsonStr = buffer.trim().slice(6).trim();
              const parsed = JSON.parse(jsonStr);
              const textChunk =
                parsed.candidates?.[0]?.content?.parts?.[0]?.text;
              if (textChunk) {
                controller.enqueue(encoder.encode(textChunk));
              }
            } catch {}
          }

          controller.close();
        } catch (err) {
          console.error("Stream reading error:", err);
          controller.error(err);
        } finally {
          reader.releaseLock();
        }
      },
    });

    return new NextResponse(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "no-cache, no-transform",
      },
    });
  } catch (error) {
    console.error("Chat route handler error:", error);
    return new NextResponse(
      "An unexpected error occurred while processing your message.",
      {
        status: 500,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      }
    );
  }
}
