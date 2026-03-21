// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { SectionHeading } from "@/components/ui/SectionHeading";

// const services = [
//   {
//     id: "01",
//     title: "Web Design & Development",
//     subtitle: "Logos, colors, type, your brand, fully alive.",
//     image:
//       "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=1200",
//     tags: [
//       "Responsive Design",
//       "Interaction Design",
//       "CMS Integration",
//       "SEO Optimization",
//     ],
//   },
//   {
//     id: "02",
//     title: "Branding",
//     subtitle: "Creating unique identities that resonate.",
//     image:
//       "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1200",
//     tags: ["Logo Design", "Brand Strategy", "Visual Guidelines", "Identity Systems"],
//   },
//   {
//     id: "03",
//     title: "Social Media",
//     subtitle: "Engaging content for modern platforms.",
//     image:
//       "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1200",
//     tags: ["Content Strategy", "Motion Graphics", "Campaign Planning", "Platform Growth"],
//   },
//   {
//     id: "04",
//     title: "Motion Design",
//     subtitle: "Bringing interfaces to life with motion.",
//     image:
//       "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1200",
//     tags: ["UI Animation", "Micro-interactions", "3D Motion", "Video Editing"],
//   },
// ];

// const easing = [0.16, 1, 0.3, 1]; // Custom easing for smooth, bouncy feel

// export function ServicesSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   return (
//     <section
//       id="services"
//       className="relative rounded-3xl bg-black/20 px-6 py-24 ring-1 ring-zinc-900 sm:px-10 lg:px-16 overflow-hidden"
//     >
//       {/* BIG BACKGROUND TEXT */}
//       <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
//         <div className="font-black tracking-[-0.08em] text-[clamp(10rem,30vw,35rem)]">
//           SERVICES
//         </div>
//       </div>

//       <div className="relative space-y-20 mx-auto px-6 sm:px-10 lg:px-16">
//         <SectionHeading
//           eyebrow="Capabilities"
//           title="How I Can Help"
//           description="Transforming fuzzy problems into performant digital products."
//           align="left"
//         />

//         <div className="border-t border-zinc-900">
//           {services.map((service, index) => {
//             const isActive = activeIndex === index;

//             return (
//               <motion.article
//                 key={service.id}
//                 layout
//                 onMouseEnter={() => setActiveIndex(index)}
//                 onMouseLeave={() => setActiveIndex(null)}
//                 transition={{ duration: 0.7 }}
//                 className="border-b border-zinc-900 cursor-pointer"
//               >
//                 {/* HEADER ROW - ALWAYS VISIBLE */}
//                 <div className="flex items-center gap-16 py-14">
//                   <span className="text-[3rem] font-black text-zinc-700 shrink-0">
//                     {service.id}.
//                   </span>
//                   <h4 className="text-5xl font-bold text-zinc-100">
//                     {service.title}
//                   </h4>
//                 </div>

//                 {/* EXPANDING CONTENT PANEL */}
//                 <AnimatePresence mode="wait">
//                   {isActive && (
//                     <motion.div
//                       layout
//                       initial={{ opacity: 0, y: 80 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: 80 }}
//                       transition={{ duration: 0.6}}
//                       className="pb-14"
//                     >
//                       {/* 12-COLUMN GRID LAYOUT */}
//                       <div className="grid grid-cols-12 items-center gap-12">
//                         {/* NUMBER - VISIBLE IN EXPANDED STATE */}


//                         {/* IMAGE WITH SCALE ANIMATION */}
//                         <motion.div
//                           initial={{ opacity: 0, scale: 0.92 }}
//                           animate={{ opacity: 1, scale: 1 }}
//                           exit={{ opacity: 0, scale: 0.92 }}
//                           transition={{ duration: 0.7 }}
//                           className="col-span-5"
//                         >
//                           <div className="overflow-hidden rounded-[2rem] w-[00px] h-[200px]">
//                             <img
//                               src={service.image}
//                               alt={service.title}
//                               className="w-full h-full object-cover"
//                               loading="lazy"
//                             />
//                           </div>
//                         </motion.div>

//                         {/* RIGHT CONTENT SECTION */}
//                         <motion.div
//                           initial={{ opacity: 0, y: 60 }}
//                           animate={{ opacity: 1, y: 0 }}
//                           exit={{ opacity: 0, y: 60 }}
//                           transition={{ duration: 0.7 }}
//                           className="col-span-6 space-y-6"
//                         >
//                           {/* <h4 className="text-5xl font-bold text-zinc-100">
//                             {service.title}
//                           </h4> */}

//                           <p className="text-xl text-zinc-400 max-w-lg leading-relaxed">
//                             {service.subtitle}
//                           </p>

//                           {/* TAGS GRID */}
//                           <div className="flex flex-wrap gap-3">
//                             {service.tags.map((tag) => (
//                               <motion.span
//                                 key={tag}
//                                 initial={{ opacity: 0, scale: 0.95 }}
//                                 animate={{ opacity: 1, scale: 1 }}
//                                 transition={{
//                                   duration: 0.5
//                                 }}
//                                 className="rounded-full border border-zinc-800 px-5 py-2 text-[11px] uppercase tracking-[0.15em] font-mono text-zinc-500 hover:border-zinc-600 transition-colors"
//                               >
//                                 {tag}
//                               </motion.span>
//                             ))}
//                           </div>
//                         </motion.div>
//                       </div>
//                     </motion.div>
//                   )}
//                 </AnimatePresence>
//               </motion.article>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";

/* -------------------------------------------------- */
/* DATA */
/* -------------------------------------------------- */

const services = [
  {
    id: "01",
    title: "Web Design & Development",
    subtitle: "High-performance websites built with Next.js and Tailwind.",
    image: "/dashboard.jpg",
    tags: [
      "Responsive Design",
      "Interaction Design",
      "CMS Integration",
      "SEO Optimization",
    ],
  },
  {
    id: "02",
    title: "Enterprise Solutions",
    subtitle: "Scalable dashboards and internal tools for complex workflows.",
    image: "/admin-management.webp",
    tags: [
      "Role-Based Access",
      "Data Visualization",
      "API Integration",
      "Workflow Automation",
    ],
  },
  {
    id: "03",
    title: "Mobile UX Design",
    subtitle: "Intuitive mobile experiences that delight users.",
    image: "/qr.webp",
    tags: [
      "App Prototyping",
      "User Research",
      "Design Systems",
      "Native Feel",
    ],
  },
  // {
  //   id: "04",
  //   title: "Digital Branding",
  //   subtitle: "Creating unique visual identities that stand out.",
  //   image: "/bakery.webp",
  //   tags: ["Logo Design", "Identity Systems", "Visual Strategy", "Guidelines"],
  // },
];

const easing = [0.16, 1, 0.3, 1];

/* -------------------------------------------------- */
/* COMPONENT */
/* -------------------------------------------------- */

export function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">

      {/* BIG BACKGROUND TEXT */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03]">
        <span className="font-black tracking-[-0.08em] text-[clamp(10rem,30vw,35rem)]">
          SERVICES
        </span>
      </div>
      <SectionHeading
        eyebrow="Capabilities"
        title="How I Can Help"
        description="Transforming complex problems into performant digital products."
        align="left"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* HEADING */}
        {/* <div className="mb-20 space-y-4">
          <p className="text-sm uppercase tracking-widest text-zinc-500">
            Capabilities
          </p>
          <h2 className="text-5xl font-bold text-white">
            How I Can Help
          </h2>
          <p className="text-zinc-400">
            Transforming fuzzy problems into performant digital products.
          </p>
        </div> */}

        {/* SERVICES LIST */}
        <div className="border-t border-zinc-800 mt-40">
          {services.map((service, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.article
                key={service.id}
                layout="position"
                onMouseEnter={() => setActiveIndex(index)}
                transition={{
                  layout: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                }}
                className="cursor-pointer border-b border-zinc-800"
              >
                {/* -------------------------------- */}
                {/* HEADER ROW */}
                {/* -------------------------------- */}
                <div className="flex items-center gap-16 py-14">

                  {/* NUMBER */}
                  <motion.span
                    layout
                    animate={{
                      scale: isActive ? 1.4 : 1,
                      color: isActive ? "#ffffff" : "#52525b",
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[3rem] font-black shrink-0"
                  >
                    {service.id}.
                  </motion.span>

                  {/* TITLE */}
                  {/* TITLE */}
                  <motion.h4
                    layout
                    animate={{
                      opacity: isActive ? 0 : 1,
                      y: isActive ? -20 : 0,
                      height: isActive ? 0 : "auto",
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-[24px] sm:text-[32px] font-poppins font-bold text-zinc-100 overflow-hidden"
                  >
                    {service.title}
                  </motion.h4>
                </div>

                {/* -------------------------------- */}
                {/* EXPANDING CONTENT */}
                {/* -------------------------------- */}
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      key="content"
                      layout
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden pb-14"
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* TEXT SIDE */}
                        <div className="space-y-6">
                          <motion.h4
                            layout
                            className="text-[24px] sm:text-[32px] font-poppins font-bold text-zinc-100"
                          >
                            {service.title}
                          </motion.h4>
                          {/* SUBTITLE */}
                          <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ delay: 0.1 }}
                            className="font-body text-[16px] md:text-[16px] text-zinc-400"
                          >
                            {service.subtitle}
                          </motion.p>

                          {/* TAGS */}
                          <div className="flex flex-wrap gap-3">
                            {service.tags.map((tag, i) => (
                              <motion.span
                                key={tag}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{
                                  delay: 0.15 + i * 0.05,
                                }}
                                className="font-body rounded-full border border-zinc-700 px-4 py-2 text-[12px] text-zinc-300"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>
                        </div>

                        {/* IMAGE */}
                        <motion.img
                          src={service.image}
                          alt={service.title}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.6 }}
                          className="rounded-2xl w-full border border-zinc-800"
                        />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}