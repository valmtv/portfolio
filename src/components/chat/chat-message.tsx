"use client";

import React from "react";
import { Bot, User, Download, ExternalLink } from "lucide-react";
import { useThemeClasses } from "hooks/use-theme-classes";
import { cn } from "lib/utils";
import { Message } from "hooks/use-chat";

interface ChatMessageProps {
  message: Message;
  isStreaming?: boolean;
}

/**
 * Parses inline markdown tokens: [label](url), bare URLs, **bold**, and `code`.
 */
function renderInlineMarkdown(text: string): React.ReactNode[] {
  // Matches: 1) [label](url), 2) **bold**, 3) `code`, 4) bare https?:// URLs
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*|`[^`]+`|https?:\/\/[^\s<]+[^<.,:;"')\]\s])/g;
  const tokens = text.split(regex);

  return tokens.map((token, idx) => {
    if (!token) return null;

    // Markdown link: [label](url)
    const mdLink = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (mdLink) {
      const [, label, rawUrl] = mdLink;
      const url = rawUrl.trim();
      const isPdf = url.endsWith(".pdf");
      const isExternal = url.startsWith("http");

      if (isPdf) {
        return (
          <a
            key={idx}
            href={url}
            download
            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 my-0.5 rounded font-mono text-xs font-bold bg-theme-accent text-theme-accentForeground hover:opacity-90 transition-opacity"
          >
            <Download size={12} />
            <span>{label}</span>
          </a>
        );
      }

      return (
        <a
          key={idx}
          href={url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="inline-flex items-center gap-1 font-bold underline underline-offset-4 text-theme-accent hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span>{label}</span>
          {isExternal && <ExternalLink size={11} className="inline opacity-75 shrink-0" />}
        </a>
      );
    }

    // Bare URL: https://...
    if (/^https?:\/\//.test(token)) {
      return (
        <a
          key={idx}
          href={token}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-bold underline underline-offset-4 text-theme-accent hover:opacity-80 transition-opacity cursor-pointer"
        >
          <span className="truncate max-w-[260px] inline-block align-bottom">{token}</span>
          <ExternalLink size={11} className="inline opacity-75 shrink-0" />
        </a>
      );
    }

    // Bold: **text**
    const bold = token.match(/^\*\*([^*]+)\*\*$/);
    if (bold) {
      return (
        <strong key={idx} className="font-bold text-theme-foreground">
          {bold[1]}
        </strong>
      );
    }

    // Inline code: `code`
    const code = token.match(/^`([^`]+)`$/);
    if (code) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 rounded text-xs font-mono bg-theme-muted text-theme-accent border border-theme-border/40"
        >
          {code[1]}
        </code>
      );
    }

    // Plain text
    return <span key={idx}>{token}</span>;
  });
}

/**
 * Safe markdown parser without dangerouslySetInnerHTML.
 * Converts lists, links, bare URLs, bold text, inline code, and paragraphs.
 */
function FormattedMessageContent({ content }: { content: string }) {
  const normalized = content.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
  const lines = normalized.split("\n");

  return (
    <div className="leading-relaxed break-words text-sm space-y-1.5">
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();
        if (!trimmed) {
          return <div key={lineIdx} className="h-1" />;
        }

        // Check if line is a bullet item (* or -)
        const bulletMatch = line.match(/^(\s*)[*-]\s+(.*)$/);
        if (bulletMatch) {
          const [, , itemContent] = bulletMatch;
          return (
            <div key={lineIdx} className="flex items-start gap-2 pl-1.5 my-1">
              <span className="text-theme-accent font-bold select-none mt-1 text-xs shrink-0">•</span>
              <div className="flex-1 min-w-0">
                {renderInlineMarkdown(itemContent)}
              </div>
            </div>
          );
        }

        // Regular paragraph line
        return (
          <p key={lineIdx} className="my-0.5">
            {renderInlineMarkdown(line)}
          </p>
        );
      })}
    </div>
  );
}

export function ChatMessage({ message, isStreaming }: ChatMessageProps) {
  const { isCyberpunk } = useThemeClasses();
  const isAssistant = message.role === "assistant";

  return (
    <div
      className={cn(
        "flex gap-2.5 w-full animate-fade-in",
        isAssistant ? "justify-start" : "justify-end"
      )}
    >
      {isAssistant && (
        <div
          className={cn(
            "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold mt-0.5",
            isCyberpunk
              ? "bg-theme-primary text-black shadow-[0_0_8px_var(--theme-primary)]"
              : "bg-theme-accent text-theme-accentForeground border-2 border-theme-border"
          )}
          title="Valerii (AI)"
        >
          <Bot size={14} />
        </div>
      )}

      <div
        className={cn(
          "max-w-[85%] sm:max-w-[78%] px-3 py-2.5",
          isAssistant
            ? isCyberpunk
              ? "bg-theme-card/90 text-theme-cardForeground border-l-2 border-theme-primary shadow-[0_0_12px_rgba(255,0,128,0.15)]"
              : "bg-theme-card text-theme-cardForeground border-2 border-theme-border shadow-brutalism"
            : isCyberpunk
            ? "bg-theme-primary text-black font-medium border border-theme-primary shadow-[0_0_10px_var(--theme-primary)]"
            : "bg-theme-foreground text-theme-background font-medium border-2 border-theme-border"
        )}
      >
        {/* Streaming indicator — only shown while actively streaming and content is empty */}
        {isAssistant && !message.content && (
          <div className="flex items-center gap-1.5 py-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-theme-accent animate-bounce" />
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-theme-accent animate-bounce"
              style={{ animationDelay: "150ms" }}
            />
            <span
              className="inline-block w-1.5 h-1.5 rounded-full bg-theme-accent animate-bounce"
              style={{ animationDelay: "300ms" }}
            />
          </div>
        )}

        {message.content && (
          <>
            <FormattedMessageContent content={message.content} />
            {isAssistant && isStreaming && (
              <span className="inline-block w-1.5 h-3 bg-theme-accent ml-0.5 animate-pulse" />
            )}
          </>
        )}
      </div>

      {!isAssistant && (
        <div
          className={cn(
            "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-mono font-bold mt-0.5",
            isCyberpunk
              ? "bg-theme-secondary text-black"
              : "bg-theme-muted text-theme-foreground border-2 border-theme-border"
          )}
          title="You"
        >
          <User size={13} />
        </div>
      )}
    </div>
  );
}
