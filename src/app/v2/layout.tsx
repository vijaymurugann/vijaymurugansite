import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import { DATA } from "@/data/resume";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${DATA.name} - Full-Stack Engineer & Web3 Specialist (v2)`,
  description: `${DATA.description} - Minimalist portfolio v2 of ${DATA.name}, inspired by modern editorial engineering portfolios.`,
  openGraph: {
    title: `${DATA.name} - Portfolio v2`,
    description: "Full-Stack Engineer, Web3 Specialist, and AI Builder.",
    url: `${DATA.url}/v2`,
  },
};

export default function V2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${figtree.variable} font-figtree min-h-screen v2-bg transition-colors duration-200 antialiased`}
    >
      {children}
    </div>
  );
}
