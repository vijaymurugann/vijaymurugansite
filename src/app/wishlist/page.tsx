"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { WishlistCard } from "@/components/wishlist-card";
import { WISHLIST_ITEMS } from "@/data/wishlist";
import Link from "next/link";
import { ArrowLeft, ArrowDownUp, Gift } from "lucide-react";
import { useState, useMemo } from "react";

const BLUR_FADE_DELAY = 0.07;

type SortOrder = "default" | "low-to-high" | "high-to-low";

const SORT_LABELS: Record<SortOrder, string> = {
  default: "Default",
  "low-to-high": "Price: Low → High",
  "high-to-low": "Price: High → Low",
};

const SORT_CYCLE: SortOrder[] = ["default", "low-to-high", "high-to-low"];

export default function WishlistPage() {
  const [sortOrder, setSortOrder] = useState<SortOrder>("high-to-low");

  const sortedItems = useMemo(() => {
    if (sortOrder === "default") return WISHLIST_ITEMS;
    const sorted = [...WISHLIST_ITEMS].sort((a, b) =>
      sortOrder === "low-to-high"
        ? a.priceNumeric - b.priceNumeric
        : b.priceNumeric - a.priceNumeric
    );
    return sorted;
  }, [sortOrder]);

  const handleSort = () => {
    const currentIdx = SORT_CYCLE.indexOf(sortOrder);
    const nextIdx = (currentIdx + 1) % SORT_CYCLE.length;
    setSortOrder(SORT_CYCLE[nextIdx]);
  };

  return (
    <main className="min-h-[100dvh] pb-24">
      {/* ── Header ───────────────────────────────── */}
      <div className="mx-auto max-w-5xl px-4 pt-12 sm:px-6 lg:px-8">
        <BlurFade delay={BLUR_FADE_DELAY}>
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Back to home
          </Link>
        </BlurFade>

        <div className="mb-12 space-y-4">

          <BlurFadeText
            delay={BLUR_FADE_DELAY * 3}
            className="text-3xl font-bold tracking-tighter sm:text-4xl lg:text-5xl"
            yOffset={8}
            text="My Wishlist"
          />

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <p className="max-w-xl text-base text-muted-foreground sm:text-lg">
              If you want to gift me something, gift from this list ✨
            </p>
          </BlurFade>
        </div>

        {/* ── Sort Controls ──────────────────────── */}
        {WISHLIST_ITEMS.length > 0 && (
          <BlurFade delay={BLUR_FADE_DELAY * 4.5}>
            <div className="mb-6 flex items-center justify-end">
              <button
                onClick={handleSort}
                className="inline-flex items-center gap-2 rounded-lg border border-border/60 bg-card px-4 py-2 text-sm font-medium text-foreground transition-all duration-200 hover:bg-muted hover:shadow-sm active:scale-[0.97]"
              >
                <ArrowDownUp className="size-4 text-muted-foreground" />
                {SORT_LABELS[sortOrder]}
              </button>
            </div>
          </BlurFade>
        )}

        {/* ── Grid ────────────────────────────────── */}
        {WISHLIST_ITEMS.length === 0 ? (
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <Gift className="size-12 text-muted-foreground/40 mb-4" />
              <p className="text-lg font-medium text-muted-foreground">
                No items yet — check back soon!
              </p>
            </div>
          </BlurFade>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {sortedItems.map((item, idx) => (
              <BlurFade
                key={item.link}
                delay={BLUR_FADE_DELAY * 5 + idx * 0.06}
              >
                <WishlistCard item={item} />
              </BlurFade>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
