"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  const email = "kishanvishwakarma6414@gmail.com";
  return (
    <section
      className="rounded-3xl bg-zinc-950/20 px-6 py-[150px] ring-1 ring-zinc-900 sm:px-10 lg:px-24 overflow-hidden"
    >
      <div className="grid items-center max-w-7xl mx-auto gap-16 lg:grid-cols-2">

        {/* LEFT CONTENT */}
        <div className="space-y-12 text-left">
          <SectionHeading
            eyebrow="Contact"
            title="Exciting opportunities?"
            description="Open to full-time roles and thoughtful collaborations."
            align="left"
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10 mx-auto px-6 sm:px-10 lg:px-24"
          >
            {/* Button */}
            <button className="group relative overflow-hidden rounded-full bg-zinc-50 px-12 py-5 text-sm font-bold uppercase tracking-[0.25em] text-black transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10">Reach out</span>
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-200 to-white opacity-0 transition-opacity group-hover:opacity-100" />
            </button>

            {/* Email */}
            <div className="space-y-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                Direct Email
              </p>

              <a
                href={`mailto:${email}`}
                className="font-poppins text-2xl text-zinc-100 hover:text-white transition underline decoration-zinc-800 underline-offset-8"
              >
               {email}
              </a>
            </div>

            {/* Social Links */}

          </motion.div>
        </div>

        {/* RIGHT GIF */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex justify-center lg:justify-end"
        >
          <img
            src="/gif.webp"   // 👉 put gif in /public folder
            alt="Contact animation"
            className="w-full max-w-md rounded-2xl object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}