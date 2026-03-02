"use client";

import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
};

export function SectionHeading({ eyebrow, title }: SectionHeadingProps) {
  return (
    <section className="w-full py-32">
      <div className="max-w-9xl px-8 lg:px-24">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className=""
        >
          {/* LEFT — Eyebrow */}
          <p className="
            col-span-12 lg:col-span-3
            font-mono
            text-sm
            tracking-[0.35em]
            uppercase
            text-white/80
          ">
            {eyebrow}
          </p>

          {/* RIGHT — Large Title */}
          <h2
            className="
              col-span-12 lg:col-span-9
              font-serif
              text-white
              text-[clamp(3rem,5vw,5.5rem)]
              leading-[1.05]
              tracking-[-0.02em]
              max-w-4xl
            "
          >
            {title}
          </h2>
        </motion.div>

      </div>
    </section>
  );
}