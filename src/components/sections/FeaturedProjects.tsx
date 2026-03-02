"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
  {
    title: "Enterprise Admin Dashboard",
    subtitle:
      "Designing a scalable control center for analytics, user management, and operational monitoring.",
    meta: "2024–2025 · Product Design",
    tags: ["Admin Dashboard", "SaaS"],
    image: "/dashboard.jpg",
  },
  {
    title: "Admin Management Portal",
    subtitle:
      "A role-based platform enabling secure workflows and business automation.",
    meta: "2024 · UX Design",
    tags: ["RBAC", "Enterprise UX"],
    image: "/admin-management.webp",
  },
  {
    title: "QR Smart Ordering App",
    subtitle:
      "Contactless QR experience allowing instant ordering and realtime updates.",
    meta: "2025 · Mobile UX",
    tags: ["QR App", "Realtime UI"],
    image: "/qr.webp",
  },
  {
    title: "Compliance Platform Frontend",
    subtitle:
      "Clear interface for complex compliance workflows and reporting.",
    meta: "2024–2025 · Frontend Engineering",
    tags: ["Fintech", "Dashboard"],
    image: "/compilance.webp",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

export function FeaturedProjectsSection() {
  return (
    <section className="bg-black text-white">

      {/* Heading */}
      <div className="px-6 py-32">
        <SectionHeading
          eyebrow="Projects"
          title="Designs That Blend Creativity & Functionality"
        />
      </div>

      {/* Fullscreen Cards */}
      {projects.map((project) => (
        <motion.section
          key={project.title}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className=" flex items-center"
        >
          <div className="
      grid
lg:grid-cols-[1fr_1.3fr]
      gap-24
      items-center
      w-full
      max-w-[1600px]
      mx-auto
      px-8 sm:px-14 lg:px-24
    ">

            {/* TEXT */}
            <div className="space-y-10">

              {/* META */}
              <p className="
          font-mono
          text-sm
          tracking-[0.35em]
          text-zinc-500
          uppercase
        ">
                {project.meta}
              </p>

              {/* TITLE */}
              <h3 className="
          font-serif
          text-[clamp(4rem,6vw,7.5rem)]
          leading-[0.92]
          tracking-[-0.03em]
        ">
                {project.title}
              </h3>

              {/* SUBTITLE */}
              <p className="
          text-2xl
          lg:text-3xl
          text-zinc-400
          max-w-2xl
          leading-relaxed
        ">
                {project.subtitle}
              </p>

              {/* TAGS */}
              <div className="flex flex-wrap gap-4 pt-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="
                border border-zinc-800
                px-5 py-2
                rounded-full
                text-sm
                text-zinc-400
              "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* BUTTON */}
              <button className="
          mt-8
          border border-zinc-700
          px-8 py-4
          rounded-full
          text-sm
          tracking-[0.25em]
          uppercase
          hover:border-white
          transition
        ">
                View Project →
              </button>

            </div>

            {/* IMAGE */}
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="
    relative
    w-full
    aspect-[5/4]
    lg:aspect-[5/4]
    overflow-visible
  "
            >
              <div
                className="
      relative
      w-[100%]
      ml-10
      rounded-[3.5rem]
      overflow-hidden
      border border-zinc-900
      shadow-[0_40px_120px_rgba(0,0,0,0.6)]
      bg-zinc-900
    "
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </motion.div>

          </div>
        </motion.section>
      ))}
    </section>
  );
}