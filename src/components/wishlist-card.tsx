"use client";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { WishlistItem } from "@/data/wishlist";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, ImageOff, ShoppingCart } from "lucide-react";
import { useState } from "react";

interface WishlistCardProps {
  item: WishlistItem;
  className?: string;
}

export function WishlistCard({ item, className }: WishlistCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("group block h-full", className)}
    >
      <Card className="flex flex-col h-full overflow-hidden border border-border/60 bg-card transition-all duration-300 ease-out hover:shadow-xl hover:shadow-black/5 dark:hover:shadow-white/5 hover:-translate-y-1">
        {/* ── Image ─────────────────────────────────── */}
        <div className="relative aspect-square w-full overflow-hidden bg-muted/30">
          {imgError ? (
            <div className="flex h-full w-full items-center justify-center bg-muted/40">
              <ImageOff className="size-10 text-muted-foreground/40" />
            </div>
          ) : (
            <Image
              src={item.image}
              alt={item.name}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-contain p-4 transition-transform duration-500 ease-out group-hover:scale-110"
              onError={() => setImgError(true)}
            />
          )}
        </div>

        {/* ── Info ──────────────────────────────────── */}
        <CardHeader className="px-4 pt-4 pb-1 flex-1">
          <h3 className="text-sm font-medium leading-snug line-clamp-2 text-foreground group-hover:text-foreground/80 transition-colors">
            {item.name}
          </h3>
        </CardHeader>

        <CardContent className="px-4 pb-2">
          <p className="text-xl font-bold tracking-tight text-foreground">
            {item.price}
          </p>
        </CardContent>

        {/* ── Action ───────────────────────────────── */}
        <CardFooter className="px-4 pb-4 pt-0 mt-auto">
          <div className="flex w-full items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition-all duration-200 group-hover:gap-2.5">
              <ShoppingCart className="size-3.5" />
              Buy Him
            </span>
            <ExternalLink className="size-4 text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
