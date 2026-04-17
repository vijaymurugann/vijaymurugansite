import { DATA } from "@/data/resume";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-3 text-center text-[11px] text-muted-foreground">
      © {new Date().getFullYear()} {DATA.name}
    </footer>
  );
}
