"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  ReactNode,
} from "react";
import { GripVertical } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResizableLayoutProps {
  sidebar: ReactNode;
  children: ReactNode;
  defaultWidth?: number;
  minWidth?: number;
  maxWidth?: number;
}

const DEFAULT_SIDEBAR_WIDTH = 384; // 24rem = max-w-sm
const MIN_SIDEBAR_WIDTH = 260;
const MAX_SIDEBAR_WIDTH = 750;
const STORAGE_KEY = "portfolio_sidebar_width";

export function ResizableLayout({
  sidebar,
  children,
  defaultWidth = DEFAULT_SIDEBAR_WIDTH,
  minWidth = MIN_SIDEBAR_WIDTH,
  maxWidth = MAX_SIDEBAR_WIDTH,
}: ResizableLayoutProps) {
  const [width, setWidth] = useState(defaultWidth);
  const widthRef = useRef(defaultWidth);
  const [isDragging, setIsDragging] = useState(false);
  const isDraggingRef = useRef(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  const sidebarRef = useRef<HTMLElement>(null);
  const resizerRef = useRef<HTMLDivElement>(null);

  // Initialize and check desktop breakpoint
  useEffect(() => {
    setIsMounted(true);

    // Read stored width from localStorage
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = parseInt(saved, 10);
        if (!isNaN(parsed) && parsed >= minWidth && parsed <= maxWidth) {
          setWidth(parsed);
          widthRef.current = parsed;
        }
      }
    } catch {}

    const checkBreakpoint = () => {
      const desktop = window.innerWidth >= 768; // Tailwind 'md' breakpoint
      setIsDesktop(desktop);

      if (desktop) {
        const dynamicMax = Math.max(
          minWidth,
          Math.min(maxWidth, window.innerWidth - 360)
        );
        setWidth((current) => {
          if (current > dynamicMax) {
            widthRef.current = dynamicMax;
            return dynamicMax;
          }
          return current;
        });
      }
    };

    checkBreakpoint();
    window.addEventListener("resize", checkBreakpoint);
    return () => window.removeEventListener("resize", checkBreakpoint);
  }, [minWidth, maxWidth]);

  // Clean up global styles if component unmounts while dragging
  useEffect(() => {
    return () => {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, []);

  // Pointer down handler for dragging
  const handlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      // Only respond to primary button (left click) or single touch
      if (e.button !== 0) return;
      e.preventDefault();

      const resizerEl = resizerRef.current || e.currentTarget;
      try {
        resizerEl.setPointerCapture(e.pointerId);
      } catch {}

      isDraggingRef.current = true;
      setIsDragging(true);

      document.body.style.cursor = "col-resize";
      document.body.style.userSelect = "none";

      const onPointerMove = (moveEvent: PointerEvent) => {
        if (!isDraggingRef.current || !sidebarRef.current) return;
        moveEvent.preventDefault();

        const sidebarRect = sidebarRef.current.getBoundingClientRect();
        const rawWidth = moveEvent.clientX - sidebarRect.left;
        const dynamicMax = Math.max(
          minWidth,
          Math.min(maxWidth, window.innerWidth - 360)
        );
        const clamped = Math.max(
          minWidth,
          Math.min(dynamicMax, Math.round(rawWidth))
        );

        setWidth(clamped);
        widthRef.current = clamped;
      };

      const onPointerUp = (upEvent: PointerEvent) => {
        if (!isDraggingRef.current) return;
        isDraggingRef.current = false;
        setIsDragging(false);

        try {
          resizerEl.releasePointerCapture(upEvent.pointerId);
        } catch {}

        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("pointerup", onPointerUp);
        window.removeEventListener("pointercancel", onPointerUp);

        document.body.style.cursor = "";
        document.body.style.userSelect = "";

        try {
          localStorage.setItem(STORAGE_KEY, widthRef.current.toString());
        } catch {}
      };

      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
      window.addEventListener("pointercancel", onPointerUp);
    },
    [minWidth, maxWidth]
  );

  // Double click resets to default width
  const handleDoubleClick = useCallback(() => {
    setWidth(defaultWidth);
    widthRef.current = defaultWidth;
    try {
      localStorage.setItem(STORAGE_KEY, defaultWidth.toString());
    } catch {}
  }, [defaultWidth]);

  // Keyboard navigation for accessibility
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const dynamicMax = Math.max(
        minWidth,
        Math.min(maxWidth, window.innerWidth - 360)
      );
      const step = e.shiftKey ? 40 : 16;

      if (e.key === "ArrowLeft") {
        e.preventDefault();
        setWidth((prev) => {
          const next = Math.max(minWidth, prev - step);
          widthRef.current = next;
          try {
            localStorage.setItem(STORAGE_KEY, next.toString());
          } catch {}
          return next;
        });
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        setWidth((prev) => {
          const next = Math.min(dynamicMax, prev + step);
          widthRef.current = next;
          try {
            localStorage.setItem(STORAGE_KEY, next.toString());
          } catch {}
          return next;
        });
      } else if (e.key === "Home") {
        e.preventDefault();
        setWidth(minWidth);
        widthRef.current = minWidth;
        try {
          localStorage.setItem(STORAGE_KEY, minWidth.toString());
        } catch {}
      } else if (e.key === "End") {
        e.preventDefault();
        setWidth(dynamicMax);
        widthRef.current = dynamicMax;
        try {
          localStorage.setItem(STORAGE_KEY, dynamicMax.toString());
        } catch {}
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleDoubleClick();
      }
    },
    [minWidth, maxWidth, handleDoubleClick]
  );

  return (
    <main className="flex flex-col md:flex-row relative min-h-[100dvh]">
      {/* Sidebar Panel */}
      <aside
        ref={sidebarRef}
        style={{
          width: isMounted && isDesktop ? `${width}px` : undefined,
          minWidth: isMounted && isDesktop ? `${minWidth}px` : undefined,
          maxWidth:
            isMounted && isDesktop
              ? `${Math.max(
                  minWidth,
                  Math.min(
                    maxWidth,
                    (typeof window !== "undefined" ? window.innerWidth : 1200) - 360
                  )
                )}px`
              : undefined,
        }}
        className={cn(
          "relative md:sticky md:top-0 p-4 py-12 md:h-screen flex flex-col gap-6 overflow-y-auto no-scrollbar",
          "w-full max-w-sm mx-auto md:w-[384px] md:max-w-none md:mx-0 shrink-0",
          !isDragging && "transition-[width] duration-150 ease-out",
          isDragging && "select-none pointer-events-none"
        )}
      >
        {sidebar}
      </aside>

      {/* Draggable Divider Handle */}
      <div
        ref={resizerRef}
        role="separator"
        tabIndex={0}
        aria-orientation="vertical"
        aria-valuenow={width}
        aria-valuemin={minWidth}
        aria-valuemax={maxWidth}
        aria-label="Resize side panel"
        title="Hold and drag to resize (Double-click to reset)"
        onPointerDown={handlePointerDown}
        onDoubleClick={handleDoubleClick}
        onKeyDown={handleKeyDown}
        className={cn(
          "hidden md:flex relative md:sticky md:top-0 md:h-screen shrink-0 items-center justify-center select-none group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
          "w-px cursor-col-resize z-20",
          isDragging && "z-30 cursor-col-resize"
        )}
      >
        {/* Extended interactive hit area (16px wide: 8px into left, 8px into right) */}
        <div
          className={cn(
            "absolute inset-y-0 -left-2 w-4 cursor-col-resize touch-none z-10",
            isDragging && "cursor-col-resize"
          )}
        />

        {/* Visible 1px divider line */}
        <div
          className={cn(
            "w-full h-full transition-colors duration-150 pointer-events-none",
            isDragging
              ? "bg-primary w-[2px] -ml-[0.5px]"
              : "bg-gray-200 dark:bg-neutral-800 group-hover:bg-primary/70"
          )}
        />

        {/* Floating Grip Handle Pill in center of viewport */}
        <div
          className={cn(
            "absolute top-1/2 -translate-y-1/2 z-20",
            "flex items-center justify-center",
            "w-4 h-8 rounded-full",
            "bg-background dark:bg-neutral-900 border shadow-xs",
            "transition-all duration-150 pointer-events-none",
            isDragging
              ? "opacity-100 scale-105 border-primary shadow-sm"
              : "opacity-0 group-hover:opacity-100 border-gray-300 dark:border-neutral-700"
          )}
        >
          <GripVertical
            className={cn(
              "size-3 transition-colors",
              isDragging
                ? "text-primary"
                : "text-muted-foreground group-hover:text-foreground"
            )}
          />
        </div>
      </div>

      {/* Main Content Area */}
      <div
        className={cn(
          "flex-1 min-w-0 p-4 py-12",
          isDragging && "select-none pointer-events-none"
        )}
      >
        {children}
      </div>
    </main>
  );
}
