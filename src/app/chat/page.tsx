"use client";

import Link from "next/link";
import { ArrowLeft, Download, Code2 } from "lucide-react";
import { ChatWindow } from "components/chat/chat-window";
import { useThemeClasses } from "hooks/use-theme-classes";
import { cn } from "lib/utils";

export default function ChatPage() {
  const { isCyberpunk } = useThemeClasses();

  return (
    // Viewport-locked container below navbar — no outer page scrolling
    <div className="flex flex-col h-[100dvh] overflow-hidden pt-16 md:pt-20">
      <div className="flex-1 min-h-0 w-full max-w-4xl mx-auto px-2 sm:px-4 pb-2 sm:pb-3 flex flex-col overflow-hidden">
        {/* Top utility row: quick links */}
        <div className="flex items-center justify-between py-1.5 px-1 flex-shrink-0">
          <Link
            href="/"
            className={cn(
              "inline-flex items-center gap-1.5 font-mono text-xs font-bold text-theme-mutedForeground hover:text-theme-foreground transition-colors",
              isCyberpunk && "hover:text-theme-primary"
            )}
          >
            <ArrowLeft size={14} />
            <span>Back to Portfolio</span>
          </Link>

          <div className="flex items-center gap-2">
            <a
              href="/Valerii_Matviiv.pdf"
              download
              className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono text-theme-mutedForeground hover:text-theme-foreground border border-theme-border/60 hover:border-theme-border rounded transition-colors"
            >
              <Download size={12} />
              <span>CV</span>
            </a>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono text-theme-mutedForeground hover:text-theme-foreground border border-theme-border/60 hover:border-theme-border rounded transition-colors"
            >
              <Code2 size={12} />
              <span>Projects</span>
            </Link>
          </div>
        </div>

        {/* Dedicated Chat Window: fills 100% of remaining height, anchoring input to bottom */}
        <div className="flex-1 min-h-0 w-full h-full flex flex-col overflow-hidden">
          <ChatWindow isFullPage={true} />
        </div>
      </div>
    </div>
  );
}
