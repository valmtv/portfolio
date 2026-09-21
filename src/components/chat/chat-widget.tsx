"use client";

import React, { useState, useEffect } from "react";
import { Bot, X } from "lucide-react";
import { useThemeClasses } from "hooks/use-theme-classes";
import { cn } from "lib/utils";
import { ChatWindow } from "./chat-window";
import { usePathname } from "next/navigation";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { isCyberpunk } = useThemeClasses();
  const pathname = usePathname();

  // If user is already on the dedicated /chat page, hide the floating widget
  const isChatPage = pathname === "/chat";

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  if (isChatPage) {
    return null;
  }

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
    setHasInteracted(true);
  };

  return (
    <aside
      aria-label="AI Chat Assistant"
      className="fixed bottom-0 right-0 sm:bottom-4 sm:right-5 z-50 flex flex-col items-end pointer-events-none"
    >
      {/* Floating Chat Drawer Window */}
      {isOpen && (
        <div
          className={cn(
            "pointer-events-auto mb-0 sm:mb-3 transition-all duration-300 origin-bottom-right animate-in fade-in zoom-in-95",
            // Mobile: nearly full height from bottom, full width with inset
            // Desktop: sized chat panel
            isExpanded
              ? "w-screen sm:w-[600px] h-[85dvh] sm:h-[82vh] sm:max-h-[720px]"
              : "w-screen sm:w-[400px] h-[72dvh] sm:h-[540px] sm:max-h-[80vh]"
          )}
        >
          <ChatWindow
            onClose={() => setIsOpen(false)}
            onToggleExpand={() => setIsExpanded((prev) => !prev)}
            isExpanded={isExpanded}
          />
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={toggleChat}
        className={cn(
          "pointer-events-auto group relative flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 transition-all duration-200 cursor-pointer select-none m-4 sm:m-0",
          isOpen
            ? isCyberpunk
              ? "bg-zinc-950 text-theme-primary border border-theme-primary shadow-[0_0_15px_var(--theme-primary)]"
              : "bg-theme-card text-theme-foreground border-2 border-theme-border shadow-brutalism"
            : isCyberpunk
            ? "bg-black text-theme-foreground border border-theme-primary shadow-[0_0_15px_rgba(255,0,128,0.4)] hover:shadow-[0_0_22px_var(--theme-primary)] hover:scale-105"
            : "bg-theme-accent text-theme-accentForeground border-2 border-theme-border shadow-brutalism hover:-translate-y-1 hover:shadow-brutalism-hover"
        )}
        aria-label={isOpen ? "Close AI chat" : "Chat with Valerii (AI)"}
      >
        {/* Pulsing online indicator */}
        <div className="relative flex items-center justify-center">
          <div
            className={cn(
              "w-5 h-5 rounded-full flex items-center justify-center",
              isCyberpunk
                ? "bg-theme-primary text-black"
                : "bg-theme-background text-theme-foreground border border-theme-border"
            )}
          >
            {isOpen ? <X size={13} /> : <Bot size={13} />}
          </div>
          {!isOpen && (
            <>
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-emerald-500" />
            </>
          )}
        </div>

        {/* Text */}
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 font-mono text-xs font-bold leading-tight">
            <span>Valerii (AI)</span>
            {!isOpen && !hasInteracted && (
              <span className="text-[9px] px-1 py-px rounded font-mono uppercase bg-emerald-500/20 text-emerald-500 border border-emerald-500/30">
                Online
              </span>
            )}
          </div>
          {!isOpen && (
            <span className="text-[10px] font-mono opacity-70 leading-tight">
              {hasInteracted ? "Continue conversation" : "Ask about ABB, projects..."}
            </span>
          )}
        </div>
      </button>
    </aside>
  );
}
