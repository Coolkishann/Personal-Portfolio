"use client";

import { useEffect, useRef, useState } from "react";

export function ChatbotEyes() {
  const containerRef = useRef<HTMLButtonElement | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: PointerEvent) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  const computePupilTransform = (offsetX: number) => {
    const box = containerRef.current?.getBoundingClientRect();
    if (!box) return {};

    const centerX = box.left + box.width / 2 + offsetX;
    const centerY = box.top + box.height / 2;

    const dx = cursor.x - centerX;
    const dy = cursor.y - centerY;
    const angle = Math.atan2(dy, dx);
    const radius = 6;

    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;

    return {
      transform: `translate(${x}px, ${y}px)`,
    };
  };

  return (
    <button
      ref={containerRef}
      className="fixed bottom-6 right-6 z-[70] flex h-16 w-16 items-center justify-center rounded-full bg-zinc-50 shadow-[0_18px_60px_rgba(0,0,0,0.75)]"
      type="button"
    >
      <div className="flex items-center gap-1.5">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900">
          <div
            className="h-2 w-2 rounded-full bg-zinc-100 transition-transform duration-75 ease-out"
            style={computePupilTransform(-5)}
          />
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-900">
          <div
            className="h-2 w-2 rounded-full bg-zinc-100 transition-transform duration-75 ease-out"
            style={computePupilTransform(5)}
          />
        </div>
      </div>
    </button>
  );
}

