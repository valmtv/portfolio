"use client";

import { useState, useEffect, useRef, useCallback } from "react";

export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

const STORAGE_KEY = "valerii_ai_chat_session_v3";

export const INITIAL_GREETING: Message = {
  id: "initial-greeting",
  role: "assistant",
  content:
    "Hey! I'm Valerii's AI clone (currently in beta). Ask me about my work at ABB, GitHub projects, tech stack, or CS studies.\n\n⚠️ *Note: I can hallucinate technical implementation details — for exact code and architecture, check my GitHub repos or CV directly!*",
  timestamp: Date.now(),
};

export function useChat() {
  const [messages, setMessages] = useState<Message[]>([INITIAL_GREETING]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);
  const isHydratedRef = useRef(false);

  // Hydrate from sessionStorage once on mount
  useEffect(() => {
    if (typeof window === "undefined" || isHydratedRef.current) return;
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setMessages(parsed);
        }
      }
    } catch (e) {
      console.warn("Failed to load chat history from sessionStorage:", e);
    } finally {
      isHydratedRef.current = true;
    }
  }, []);

  // Save to sessionStorage on updates after initial hydration
  useEffect(() => {
    if (!isHydratedRef.current || typeof window === "undefined") return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch (e) {
      console.warn("Failed to save chat to sessionStorage:", e);
    }
  }, [messages]);

  const clearChat = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
    }
    setMessages([{ ...INITIAL_GREETING, timestamp: Date.now() }]);
    setError(null);
    setIsLoading(false);
    if (typeof window !== "undefined") {
      try {
        sessionStorage.removeItem(STORAGE_KEY);
      } catch {}
    }
  }, []);

  const sendMessage = useCallback(
    async (rawText: string) => {
      const text = rawText.trim();
      if (!text || isLoading) return;

      setError(null);

      // Abort any ongoing stream
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const controller = new AbortController();
      abortControllerRef.current = controller;

      const userMsgId = `user-${Date.now()}`;
      const assistantMsgId = `assistant-${Date.now() + 1}`;

      const userMessage: Message = {
        id: userMsgId,
        role: "user",
        content: text,
        timestamp: Date.now(),
      };

      const emptyAssistantMessage: Message = {
        id: assistantMsgId,
        role: "assistant",
        content: "",
        timestamp: Date.now() + 1,
      };

      // Optimistically add user message and empty assistant placeholder
      const updatedMessages = [...messages, userMessage];
      setMessages([...updatedMessages, emptyAssistantMessage]);
      setIsLoading(true);

      try {
        const payloadMessages = updatedMessages.map((m) => ({
          role: m.role,
          content: m.content,
        }));

        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages: payloadMessages }),
          signal: controller.signal,
        });

        if (!response.ok) {
          const errText = await response.text();
          throw new Error(errText || `Server responded with status ${response.status}`);
        }

        const reader = response.body?.getReader();
        if (!reader) {
          throw new Error("Streaming is not supported by your browser.");
        }

        const decoder = new TextDecoder();
        let accumulatedText = "";

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;

          const chunk = decoder.decode(value, { stream: true });
          accumulatedText += chunk;

          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === assistantMsgId
                ? { ...msg, content: accumulatedText }
                : msg
            )
          );
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === "AbortError") {
          return;
        }

        const fallbackErr =
          err instanceof Error
            ? err.message
            : "Something went wrong while connecting. Please try again.";

        setError(fallbackErr);

        setMessages((prev) =>
          prev.map((msg) =>
            msg.id === assistantMsgId && msg.content === ""
              ? {
                  ...msg,
                  content:
                    "Connection failed. Try again, or email valerii.matviiv@gmail.com directly.",
                }
              : msg
          )
        );
      } finally {
        setIsLoading(false);
        abortControllerRef.current = null;
      }
    },
    [messages, isLoading]
  );

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    clearChat,
  };
}
