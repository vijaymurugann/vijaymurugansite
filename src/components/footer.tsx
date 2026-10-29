"use client";

import { DATA } from "@/data/resume";
import { usePathname } from "next/navigation";

export function Footer() {
  const pathname = usePathname();

  // /v2 renders its own container-scoped footer matching the Anand Mohanan aesthetic
  if (pathname?.startsWith("/v2")) {
    return null;
  }

  return (
    <footer className="border-t border-border/50 py-3 text-center text-[11px] text-muted-foreground">
      © {new Date().getFullYear()} {DATA.name}
    </footer>
  );
}
