"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  Send,
  RotateCcw,
  Maximize2,
  Minimize2,
  X,
  Bot,
  Loader2,
} from "lucide-react";
import { useThemeClasses } from "hooks/use-theme-classes";
import { cn } from "lib/utils";
import { useChat } from "hooks/use-chat";
import { ChatMessage } from "./chat-message";
import { CHAT_SUGGESTION_CHIPS } from "lib/ai/persona";

interface ChatWindowProps {
  isFullPage?: boolean;
  onClose?: () => void;
  onToggleExpand?: () => void;
  isExpanded?: boolean;
}

export function ChatWindow({
  isFullPage = false,
  onClose,
  onToggleExpand,
  isExpanded = false,
}: ChatWindowProps) {
  const { isCyberpunk } = useThemeClasses();
  const { messages, isLoading, error, sendMessage, clearChat } = useChat();
  const [input, setInput] = useState("");
  const messagesScrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Scroll the messages container itself — NOT scrollIntoView which propagates
  // up the DOM and causes the whole page to jump on the /chat full-page layout.
  const scrollToBottom = useCallback((smooth = true) => {
    const el = messagesScrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: smooth ? "smooth" : "instant" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading, scrollToBottom]);

  // Focus input on mount (desktop only — don't force keyboard on mobile)
  useEffect(() => {
    if (window.innerWidth >= 768) {
      textareaRef.current?.focus();
    }
  }, []);

  // Auto-grow textarea — reset to 1 row then expand to fit content
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = e.target;
    setInput(el.value);
    // Reset height so shrinking works
    el.style.height = "auto";
    // Clamp to a max of ~6 rows (96px ≈ 6 * 16px line-height)
    el.style.height = Math.min(el.scrollHeight, 96) + "px";
  };

  const resetTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const handleSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input);
    setInput("");
    resetTextareaHeight();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSelectChip = (chipText: string) => {
    if (isLoading) return;
    sendMessage(chipText);
  };

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden transition-all duration-200",
        isFullPage ? "w-full h-full" : "w-full h-full",
        isCyberpunk
          ? "bg-black/95 text-theme-foreground border border-theme-primary shadow-[0_0_25px_rgba(255,0,128,0.25)]"
          : "bg-theme-card text-theme-cardForeground border-2 border-theme-border shadow-brutalism"
      )}
    >
      {/* Header */}
      <div
        className={cn(
          "flex items-center justify-between px-3 py-2.5 border-b select-none flex-shrink-0",
          isCyberpunk
            ? "border-theme-primary/40 bg-zinc-950/80"
            : "border-theme-border bg-theme-background"
        )}
      >
        <div className="flex items-center gap-2 min-w-0">
          <div
            className={cn(
              "relative w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0",
              isCyberpunk
                ? "bg-theme-primary text-black shadow-[0_0_8px_var(--theme-primary)]"
                : "bg-theme-accent text-theme-accentForeground border border-theme-border"
            )}
          >
            <Bot size={14} />
            <span
              className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 border-2 border-theme-background"
              title="Online"
            />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-xs font-bold truncate text-theme-foreground">
                Valerii (AI)
              </span>
              <span className="text-[9px] uppercase font-mono px-1 py-px rounded bg-theme-muted text-theme-accent font-bold border border-theme-border/40">
                Clone
              </span>
            </div>
            <span className="text-[10px] text-theme-mutedForeground font-mono truncate">
              ABB Intern · CS @ AGH Kraków
            </span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-0.5">
          <button
            onClick={clearChat}
            className={cn(
              "p-1.5 rounded text-theme-mutedForeground hover:text-theme-foreground hover:bg-theme-muted/50 transition-colors",
              isCyberpunk && "hover:text-theme-primary"
            )}
            title="Reset conversation"
            aria-label="Reset conversation"
          >
            <RotateCcw size={14} />
          </button>

          {!isFullPage && onToggleExpand && (
            <button
              onClick={onToggleExpand}
              className={cn(
                "p-1.5 rounded text-theme-mutedForeground hover:text-theme-foreground hover:bg-theme-muted/50 transition-colors hidden sm:block",
                isCyberpunk && "hover:text-theme-primary"
              )}
              title={isExpanded ? "Collapse view" : "Expand view"}
              aria-label={isExpanded ? "Collapse view" : "Expand view"}
            >
              {isExpanded ? <Minimize2 size={14} /> : <Maximize2 size={14} />}
            </button>
          )}

          {!isFullPage && (
            <Link
              href="/chat"
              className={cn(
                "p-1.5 rounded text-theme-mutedForeground hover:text-theme-foreground hover:bg-theme-muted/50 transition-colors",
                isCyberpunk && "hover:text-theme-primary"
              )}
              title="Open full page chat"
              aria-label="Open full page chat"
            >
              <Maximize2 size={14} className="sm:hidden" />
              <span className="text-xs font-mono font-bold hidden sm:inline px-0.5">
                Full
              </span>
            </Link>
          )}

          {onClose && (
            <button
              onClick={onClose}
              className={cn(
                "p-1.5 rounded text-theme-mutedForeground hover:text-theme-foreground hover:bg-theme-muted/50 transition-colors",
                isCyberpunk && "hover:text-theme-accent"
              )}
              title="Close chat"
              aria-label="Close chat"
            >
              <X size={15} />
            </button>
          )}
        </div>
      </div>

      {/* Disclaimer Banner */}
      <div
        className={cn(
          "px-3 py-1.5 text-[11px] font-mono flex items-center justify-between border-b select-none flex-shrink-0",
          isCyberpunk
            ? "bg-amber-950/30 border-amber-500/30 text-amber-300"
            : "bg-amber-500/10 border-amber-500/20 text-amber-800 dark:text-amber-300"
        )}
      >
        <span className="truncate">
          ⚠️ AI clone — answers may hallucinate or sound inaccurate. Verify anything critical directly.
        </span>
      </div>

      {/* Messages Scroll Area */}
      <div
        ref={messagesScrollRef}
        className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 min-h-0 text-sm overscroll-contain"
      >
        {messages.map((message, index) => {
          const isLatest = index === messages.length - 1;
          return (
            <ChatMessage
              key={message.id || index}
              message={message}
              isStreaming={isLatest && isLoading && message.role === "assistant"}
            />
          );
        })}

        {error && (
          <div className="p-3 text-xs font-mono rounded border border-rose-500/40 bg-rose-500/10 text-rose-300">
            {error}
          </div>
        )}

        {/* Spacer so the last message isn't flush against the bottom */}
        <div className="h-1" />
      </div>

      {/* Suggestion Chips — horizontal scroll on mobile, wrap on desktop */}
      {messages.length <= 2 && !isLoading && (
        <div className="px-3 pb-2 pt-1 flex-shrink-0">
          {/* On mobile: horizontal scroll. On sm+: wrap */}
          <div
            className="flex sm:flex-wrap gap-1.5 overflow-x-auto sm:overflow-x-visible pb-1 sm:pb-0"
            style={{ scrollbarWidth: "none" }}
          >
            {CHAT_SUGGESTION_CHIPS.map((chip, idx) => (
              <button
                key={idx}
                onClick={() => handleSelectChip(chip)}
                className={cn(
                  "text-xs px-2.5 py-1 text-left font-mono transition-all cursor-pointer rounded-none whitespace-nowrap flex-shrink-0 sm:whitespace-normal sm:flex-shrink",
                  isCyberpunk
                    ? "bg-zinc-900 border border-theme-primary/50 text-theme-foreground hover:bg-theme-primary/20 hover:border-theme-primary"
                    : "bg-theme-muted/60 border border-theme-border text-theme-foreground hover:bg-theme-accent hover:text-theme-accentForeground hover:-translate-y-0.5"
                )}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Area */}
      <form
        onSubmit={handleSubmit}
        className={cn(
          "px-3 pt-2 pb-3 border-t flex flex-col gap-1 flex-shrink-0",
          // Safe area padding for iOS — ensures input isn't hidden behind home bar
          "[padding-bottom:max(0.75rem,env(safe-area-inset-bottom))]",
          isCyberpunk
            ? "border-theme-primary/40 bg-zinc-950/90"
            : "border-theme-border bg-theme-background"
        )}
      >
        <div className="flex items-end gap-2">
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder="Ask about ABB, projects, stack…"
            disabled={isLoading}
            maxLength={4000}
            className={cn(
              "flex-1 px-3 py-2 text-sm resize-none bg-transparent outline-none font-mono transition-all overflow-hidden",
              isCyberpunk
                ? "border border-theme-primary/50 text-theme-foreground focus:border-theme-primary focus:shadow-[0_0_8px_var(--theme-primary)]"
                : "border-2 border-theme-border text-theme-foreground focus:border-theme-accent bg-theme-card"
            )}
          />

          <button
            type="submit"
            disabled={isLoading || !input.trim()}
            className={cn(
              "px-3 py-2 flex items-center justify-center font-mono text-xs font-bold transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0 self-end",
              isCyberpunk
                ? "bg-theme-primary text-black hover:brightness-110 shadow-[0_0_8px_var(--theme-primary)]"
                : "bg-theme-accent text-theme-accentForeground border-2 border-theme-border hover:-translate-y-0.5 shadow-brutalism"
            )}
            title="Send message"
            aria-label="Send message"
          >
            {isLoading ? (
              <Loader2 size={15} className="animate-spin" />
            ) : (
              <Send size={14} />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between text-[10px] font-mono text-theme-mutedForeground px-0.5 gap-2">
          <span className="opacity-60">Gemini Flash</span>
          <span className="opacity-50 text-center leading-tight hidden sm:block">
            AI-generated — may be inaccurate. Verify anything important with the real me.
          </span>
          <span className="opacity-60 shrink-0">Shift+Enter for newline</span>
        </div>
      </form>
    </div>
  );
}
