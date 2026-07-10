import type { Metadata } from "next";
import { DATA } from "@/data/resume";

export const metadata: Metadata = {
  title: "My Wishlist",
  description: `${DATA.name}'s wishlist — If you want to gift me something, gift from this list.`,
};

export default function WishlistLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
