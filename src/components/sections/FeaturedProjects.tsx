"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";

type Project = {
  title: string;
  subtitle: string;
  meta: string;
  tags: string[];
  image: string;
  link?: string;
  gif?: string;
};

const projects: Project[] = [
  {
    "title": "Distributed URL Shortener",
    "subtitle": "A scalable load-balanced URL shortener built with microservices architecture, Redis caching, and PostgreSQL for high performance and reliability.",
    "meta": "Node.js · Fastify · Redis · PostgreSQL · Docker",
    "tags": ["Load Balancing", "Caching", "Microservices", "System Design", "Scalability"],
    "image": "/snip.png",
    "link": "https://github.com/Coolkishann/Sipy-Url-shortner"
  },
  {
    "title": "Three.js GSAP Scroll",
    "subtitle": "An immersive scroll-based 3D web experience combining Three.js rendering with GSAP animations for smooth cinematic transitions and interactive storytelling.",
    "meta": "Three.js · GSAP · ScrollTrigger · Vercel · WebGL",
    "tags": [
      "Three.js",
      "GSAP",
      "Scroll Animation",
      "3D Experience",
      "Interactive Website"
    ],
    "gif": "/threejs.mp4",
    "image": "/threejs-gsap-scroll.png",
    "link": "https://threejs-gsap-scroll.vercel.app/"
  },
  {
  "title": "Cinematic Studio Portfolio",
  "subtitle": "A high-end visual storytelling platform featuring immersive scroll-triggered animations, smooth cinematic transitions, and an interactive 3D-like skills visualization.",
  "meta": "Next.js · GSAP · TypeScript · Vanilla CSS · Framer Motion",
  "tags": ["Animation", "ScrollTrigger", "Visual Storytelling", "Premium UX", "Frontend Engineering"],
  "gif":"/studio-gsap.mp4",
  "image": "/studio-gsap.png",
  "link": "https://studio-gsap.vercel.app"
},
  {
    "title": "Pretext Typography ASCII",
    "subtitle": "A high-performance cinematic ASCII engine using proportional variable typography and real-time video sampling, powered by @chenglou/pretext.",
    "meta": "TypeScript · Canvas · Vite · Pretext",
    "tags": ["ASCII Art", "Creative Coding", "Typography", "Real-time Rendering", "Experimental"],
    "image": "/pretext-ascii.png",
    "gif": "/demo.gif",
    "link": "https://glyphapple.vercel.app/"
  },
  {
    title: "DataEngine (CSV & PDF Processor)",
    subtitle:
      "A high-performance data processing engine that generates and processes large CSV and PDF files using parallel worker threads and real-time telemetry.",
    meta: "Node.js · React · MongoDB",
    tags: ["Worker Threads", "WebSockets", "File Processing", "Parallel Computing"],
    image: "/dataengine.jpg",
    "link": "https://github.com/Coolkishann/PDF-CSV-Processor-Generator----Backend"
  },
  {
    "title": "Agency Website",
    "subtitle": "A modern animated agency website built with Next.js featuring smooth GSAP animations, Framer Motion interactions, and responsive TailwindCSS design.",
    "meta": "Next.js · GSAP · Framer Motion · TailwindCSS · TypeScript",
    "tags": ["Animations", "Responsive Design", "Modern UI", "Performance", "Frontend"],
    "image": "/agency.png",
    "gif": "/agency.mp4",
    "link": "https://agency-website-flax-one.vercel.app/"
  },
  // {
  //   title: "Code2Pdf",
  //   subtitle:
  //     "A web app that converts code and files into beautifully formatted PDFs and sends them directly to email and WhatsApp.",
  //   meta: "Next.js · Tailwind CSS · Node.js",
  //   tags: ["File Uploads", "Email API", "WhatsApp API"],
  //   image: "/code2pdf.png", // or your existing preview image
  //   "link":"https://code2pdf.vercel.app/"
  // }
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
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button
                  className="
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
    "
                >
                  View Project →
                </button>
              </a>

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
                {project.gif?.match(/\.(mp4|webm)$/i) ? (
                  <video
                    src={project.gif}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img
                    src={project.gif || project.image}
                    alt={project.title}
                    className="w-full h-full object-cover" // 👈 KEY
                    loading={project.gif ? undefined : "lazy"}
                  />
                )}
              </div>
            </motion.div>

          </div>
        </motion.section>
      ))}
    </section>
  );
}
