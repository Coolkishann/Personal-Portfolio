"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <motion.header
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`space-y-6 ${isCenter ? "text-center mx-auto" : "text-left"}`}
    >
      {eyebrow && (
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500 opacity-80">
          {eyebrow}
        </p>
      )}
      <h2 className="bricolage-grotesque-head text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[0.9] tracking-[-0.04em] text-zinc-100">
        {title}
      </h2>
      {description && (
        <div className="max-w-2xl text-lg font-medium leading-relaxed text-zinc-400 sm:text-xl lg:text-2xl tracking-tight opacity-90">
          {description}
        </div>
      )}
    </motion.header>
  );
}

