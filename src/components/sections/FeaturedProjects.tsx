"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

const projects = [
{
  "title": "Distributed URL Shortener",
  "subtitle": "A scalable load-balanced URL shortener built with microservices architecture, Redis caching, and PostgreSQL for high performance and reliability.",
  "meta": "Node.js · Fastify · Redis · PostgreSQL · Docker",
  "tags": ["Load Balancing", "Caching", "Microservices", "System Design", "Scalability"],
  "image": "/snip.png"  
},
 {
  "title": "IT Management Dashboard",
  "subtitle": "Enterprise-grade ITSM platform for asset tracking, service automation, and engineer productivity monitoring.",
  "meta": "Next.js · NestJS · PostgreSQL · Prisma · Redis",
  "tags": ["RBAC", "Caching", "Background Jobs", "Audit Logging"],
  "image": "/itmanage.png"
},
  {
  title: "DataEngine (CSV & PDF Processor)",
  subtitle:
    "A high-performance data processing engine that generates and processes large CSV and PDF files using parallel worker threads and real-time telemetry.",
  meta: "Node.js · React · MongoDB",
  tags: ["Worker Threads", "WebSockets", "File Processing", "Parallel Computing"],
  image: "/dataengine.jpg",
},
  {
    title: "Clinic Management System",
    subtitle:
      "A full-stack clinic management system with appointment scheduling, billing, and role-based access control.",
    meta: "React · Node.js · MongoDB",
    tags: ["Redux", "Express", "Dynamic Workflows"],
    image: "/Clinic-management.png"
  },
{
  title: "Code2Pdf",
  subtitle:
    "A web app that converts code and files into beautifully formatted PDFs and sends them directly to email and WhatsApp.",
  meta: "Next.js · Tailwind CSS · Node.js",
  tags: ["File Uploads", "Email API", "WhatsApp API"],
  image: "/code2pdf.png", // or your existing preview image
}
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
    <section className="rounded-3xl bg-zinc-950/40 px-6 py-16 ring-1 ring-zinc-900 sm:px-10 lg:px-16 overflow-hidden">

      {/* Heading */}
      <div className="px-6 py-32">
        <SectionHeading
          eyebrow="Projects"
          title="Building Reliable Systems with Modern Technologies"
        />
      </div>

      {/* Fullscreen Cards */}
      {projects.map((project) => (
        <motion.section
          key={project.title}
          variants={cardVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className=" flex items-center py-16"
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
          font-body
          text-[16px]
          tracking-[0.35em]
          text-zinc-500
          uppercase
        ">
                {project.meta}
              </p>

              {/* TITLE */}
              <h3 className="
          font-poppins
          font-bold
          text-[32px] sm:text-[56px]
          leading-[0.92]
          tracking-[-0.03em]
        ">
                {project.title}
              </h3>

              {/* SUBTITLE */}
              <p className="
          font-body
          text-[16px] md:text-[24px]
          text-zinc-400
          max-w-2xl
          leading-relaxed
        ">
                {project.subtitle}
              </p>

              {/* TAGS */}
           <div className="flex pt-4">
  {project.tags.map((tag) => (
    <span
      key={tag}
      className="
        font-body
        border border-zinc-800
        px-5 py-2
        rounded-full
        text-[12px]
        text-zinc-400
      "
    >
      {tag}
    </span>
  ))}
</div>

              {/* BUTTON */}
              <button className="
          font-body
          mt-8
          border border-zinc-700
          px-8 py-4
          rounded-full
          text-[16px]
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
    h-[520px]        // 👈 FIXED HEIGHT
    overflow-hidden  // 👈 prevent overflow issues
  "
>
  <div
    className="
      relative
      w-full
      h-full          // 👈 fill parent height
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
      className="w-full h-full object-cover" // 👈 KEY
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