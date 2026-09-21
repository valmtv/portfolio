"use client";

import { usePathname } from "next/navigation";
import { Footer } from "components/layout/footer/index";

/** Renders the footer everywhere except the chat page. */
export function ConditionalFooter() {
  const pathname = usePathname();
  if (pathname === "/chat") return null;
  return <Footer />;
}
