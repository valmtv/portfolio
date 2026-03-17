"use client"

import { cn } from "lib/utils"
import { Copy, Check, ArrowUpRight } from "lucide-react"
import { FOOTER_CONTACTS } from "./data"
import { useClipboard } from "hooks/use-clipboard"

export function CyberpunkFooter() {
  const { copiedId, copyToClipboard } = useClipboard()

  return (
    <footer className="w-full mt-24">
      {/* Header */}
      <div
        className={cn("bg-[#09090b] px-4 md:px-8 pt-16 pb-12", "border-t border-[#00f0ff]/30")}
        style={{ boxShadow: "0 -10px 40px rgba(0,240,255,0.05)" }}
      >
        <div className="max-w-7xl mx-auto">
          <p
            className={cn(
              "font-mono text-sm font-bold uppercase mb-6 tracking-[0.3em]",
              "text-[#fcee0a] drop-shadow-[0_0_8px_rgba(252,238,10,0.5)]"
            )}
          >
            {`> ESTABLISH_CONNECTION`}
          </p>
          <h2
            className="font-mono font-bold leading-none tracking-tighter"
            style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
          >
            <span className="text-[#00f0ff] drop-shadow-[0_0_12px_rgba(0,240,255,0.4)]">GET IN</span>
            <br />
            <span className="text-[#ff003c] drop-shadow-[0_0_12px_rgba(255,0,60,0.4)]">TOUCH.</span>
          </h2>
        </div>
      </div>

      {/* Rows */}
      <div className="bg-[#09090b]">
        {FOOTER_CONTACTS.map((contact) => {
          const isCopied = copiedId === contact.index

          const rowInner = (
            <div
              className={cn(
                "group relative border-y border-[#00f0ff]/10",
                "hover:border-[#00f0ff]/50 hover:bg-[#00f0ff]/5",
                "transition-all duration-300"
              )}
            >
              <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10 flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
                  <span
                    className={cn(
                      "font-mono text-xs md:text-sm font-bold tracking-widest flex-shrink-0",
                      "text-[#00f0ff]/30 group-hover:text-[#00f0ff]",
                      "group-hover:drop-shadow-[0_0_5px_rgba(0,240,255,0.8)]",
                      "transition-all duration-300"
                    )}
                  >
                    [{contact.index}]
                  </span>
                  
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "font-mono text-xs font-bold tracking-[0.2em] uppercase mb-1 md:mb-2",
                        "text-[#00f0ff]/40 group-hover:text-[#fcee0a]",
                        "group-hover:drop-shadow-[0_0_5px_rgba(252,238,10,0.5)]",
                        "transition-all duration-300"
                      )}
                    >
                      {contact.label}
                    </p>
                    <p
                      className={cn(
                        "font-mono font-bold truncate text-xl md:text-3xl lg:text-4xl",
                        "text-white/80 group-hover:text-white",
                        "group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]",
                        "transition-all duration-300"
                      )}
                    >
                      {contact.value}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 flex-shrink-0">
                  {contact.copyable && (
                    <button
                      onClick={(e) => copyToClipboard(e, contact.value, contact.index)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 font-mono text-xs tracking-widest uppercase",
                        "border border-[#00f0ff]/30 hover:border-[#00f0ff]",
                        "bg-[#09090b] text-[#00f0ff]",
                        "hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]",
                        "transition-all duration-300"
                      )}
                    >
                      {isCopied ? (
                        <><Check size={14} /><span className="hidden md:inline text-[#22c55e]">SYS.COPIED</span></>
                      ) : (
                        <><Copy size={14} /><span className="hidden md:inline">EXE.COPY</span></>
                      )}
                    </button>
                  )}
                  
                  {contact.href && !contact.copyable && (
                    <ArrowUpRight
                      size={32}
                      className={cn(
                        "text-[#00f0ff]/30 group-hover:text-[#00f0ff]",
                        "group-hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)]",
                        "group-hover:translate-x-1 group-hover:-translate-y-1",
                        "transition-all duration-300"
                      )}
                    />
                  )}
                </div>
              </div>
            </div>
          )

          return contact.href ? (
            <a key={contact.index} href={contact.href} target="_blank" rel="noopener noreferrer" className="block">
              {rowInner}
            </a>
          ) : (
            <div key={contact.index}>{rowInner}</div>
          )
        })}
      </div>

      {/* Footer strip */}
      <div className={cn("bg-[#09090b] px-4 md:px-8 py-8", "border-t border-[#00f0ff]/20")}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-mono text-xs text-[#00f0ff]/40 font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} VALERII MATVIIV.
          </p>
          <p className="font-mono text-xs text-[#ff003c] font-bold tracking-widest uppercase drop-shadow-[0_0_5px_rgba(255,0,60,0.5)]">
            NEURAL LINK // ACTIVE
          </p>
        </div>
      </div>
    </footer>
  )
}