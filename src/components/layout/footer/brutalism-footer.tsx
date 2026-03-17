"use client"

import { cn } from "lib/utils"
import { Copy, Check, ArrowUpRight } from "lucide-react"
import { FOOTER_CONTACTS } from "./data"
import { useClipboard } from "hooks/use-clipboard"

export function BrutalismFooter() {
  const { copiedId, copyToClipboard } = useClipboard()

  return (
    <footer className="w-full mt-24">
      {/* Header */}
      <div className={cn("bg-black px-4 md:px-8 pt-16 pb-12", "border-t-4 border-black")}>
        <div className="max-w-7xl mx-auto">
          <p className={cn("mb-6 font-mono text-sm font-bold tracking-[0.3em] uppercase", "text-[#22c55e]")}>
            Ready to connect
          </p>
          <h2
            className="font-mono font-bold text-white leading-none tracking-tighter"
            style={{ fontSize: "clamp(4rem, 10vw, 8rem)" }}
          >
            GET IN
            <br />
            <span className="text-[#22c55e] bg-black">TOUCH.</span>
          </h2>
        </div>
      </div>

      {/* Rows */}
      <div className="bg-black border-t-2 border-white/20">
        {FOOTER_CONTACTS.map((contact) => {
          const isCopied = copiedId === contact.index

          const rowInner = (
            <div className={cn("group relative overflow-hidden cursor-pointer", "border-b-2 border-white/20")}>
              {/* Aggressive Green slide fill */}
              <div
                className={cn(
                  "absolute inset-0 pointer-events-none",
                  "bg-[#22c55e] -translate-x-full group-hover:translate-x-0",
                  "transition-transform duration-150 ease-in"
                )}
              />

              <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10 flex items-center justify-between gap-4">
                <div className="flex items-baseline gap-4 md:gap-8 min-w-0">
                  <span
                    className={cn(
                      "font-mono text-xs md:text-sm font-bold tracking-widest flex-shrink-0",
                      "text-white/40 group-hover:text-black/60",
                      "transition-colors duration-150"
                    )}
                  >
                    {contact.index}
                  </span>
                  
                  <div className="min-w-0">
                    <p
                      className={cn(
                        "font-mono text-xs font-bold tracking-[0.2em] uppercase mb-1 md:mb-2",
                        "text-white/50 group-hover:text-black/70",
                        "transition-colors duration-150"
                      )}
                    >
                      {contact.label}
                    </p>
                    <p
                      className={cn(
                        "font-mono font-bold truncate text-xl md:text-3xl lg:text-4xl",
                        "text-white group-hover:text-black",
                        "transition-colors duration-150"
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
                        "relative z-10 flex items-center gap-2 p-2 md:px-4 md:py-3",
                        "border-2 border-white/30 group-hover:border-black",
                        "bg-black group-hover:bg-transparent",
                        "font-mono text-xs font-bold tracking-widest uppercase",
                        "text-white/80 group-hover:text-black",
                        "transition-all duration-150"
                      )}
                    >
                      {isCopied ? (
                        <><Check size={16} /><span className="hidden md:inline">COPIED</span></>
                      ) : (
                        <><Copy size={16} /><span className="hidden md:inline">COPY</span></>
                      )}
                    </button>
                  )}
                  
                  {contact.href && !contact.copyable && (
                    <ArrowUpRight
                      size={36}
                      className={cn(
                        "text-white/40 group-hover:text-black",
                        "group-hover:translate-x-2 group-hover:-translate-y-2",
                        "transition-all duration-150"
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
      <div className="bg-black px-4 md:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-mono text-xs text-white/40 font-bold tracking-widest uppercase">
            © {new Date().getFullYear()} Valerii Matviiv.
          </p>
          <p className="font-mono text-xs text-[#22c55e] font-bold tracking-widest uppercase">
            SYSTEM ONLINE // READY FOR WORK
          </p>
        </div>
      </div>
    </footer>
  )
}