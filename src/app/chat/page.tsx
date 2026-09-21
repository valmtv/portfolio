"use client";

import { ChatWindow } from "components/chat/chat-window";

export default function ChatPage() {
  return (
    // Viewport-locked container below navbar — no outer page scrolling
    <div className="flex flex-col h-[100dvh] overflow-hidden pt-20 md:pt-24">
      <div className="flex-1 min-h-0 w-full max-w-4xl mx-auto px-2 sm:px-4 pb-2 sm:pb-3 flex flex-col overflow-hidden">
        {/* Dedicated Chat Window: fills 100% of remaining height, anchoring input to bottom */}
        <div className="flex-1 min-h-0 w-full flex flex-col overflow-hidden">
          <ChatWindow isFullPage={true} />
        </div>
      </div>
    </div>
  );
}
