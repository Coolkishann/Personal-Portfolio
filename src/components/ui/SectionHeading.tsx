"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, description, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`w-full ${align === "center" ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-4"
      >
        <p className="
          font-body
          text-[16px]
          tracking-[0.35em]
          uppercase
          text-zinc-500
        ">
          {eyebrow}
        </p>

        <h2 className="
          font-poppins
          font-bold
          text-white
          text-[32px] sm:text-[56px]
          leading-[1.05]
          tracking-[-0.02em]
          max-w-4xl
          mx-auto lg:mx-0
        ">
          {title}
        </h2>

        {description && (
          <p className="font-body text-[16px] sm:text-[24px] text-zinc-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}