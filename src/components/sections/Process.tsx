// "use client";

// import {
//   motion,
//   AnimatePresence,
//   useScroll,
//   useMotionValueEvent,
// } from "framer-motion";
// import { useRef, useState } from "react";
// import { SectionHeading } from "@/components/ui/SectionHeading";

// /* -------------------------------------------------- */
// /* DATA */
// /* -------------------------------------------------- */

// const steps = [
//   {
//     id: "01",
//     title: "Strategy",
//     body:
//       "We map constraints, risks, and jobs-to-be-done so everyone sees the same picture before pushing pixels.",
//     image: "/dashboard.jpg",
//   },
//   {
//     id: "02",
//     title: "Art Direction",
//     body:
//       "We prototype multiple directions, test quickly, and keep stakeholders inside the loop.",
//     image: "/admin-management.webp",
//   },
//   {
//     id: "03",
//     title: "Production",
//     body:
//       "States, edge-cases, and handoff documentation that keep engineers happy.",
//     image: "/qr.webp",
//   },
//   {
//     id: "04",
//     title: "Rebranding",
//     body:
//       "We learn continuously from metrics, support feedback, and real users.",
//     image: "/compilance.webp",
//   },
//   {
//     id: "05",
//     title: "Design",
//     body:
//       "Final visual polish ensuring every pixel serves a purpose.",
//     image: "/bakery.webp",
//   },
// ];

// /* -------------------------------------------------- */
// /* STEP ITEM */
// /* -------------------------------------------------- */

// function StepItem({
//   step,
//   index,
//   activeIndex,
// }: {
//   step: typeof steps[0];
//   index: number;
//   activeIndex: number;
// }) {
//   const isActive = index === activeIndex;

//   return (
//     <div className="h-screen flex flex-col justify-center py-24">
//       <motion.div
//         animate={{
//           opacity: isActive ? 1 : 0.1,
//           x: isActive ? 0 : -20,
//         }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className="space-y-6"
//       >
//         <span className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-500">
//           Step {step.id}
//         </span>

//         <h3 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight text-zinc-100">
//           {step.title}
//         </h3>

//         <p className="text-lg lg:text-xl text-zinc-400 max-w-md leading-relaxed">
//           {step.body}
//         </p>
//       </motion.div>
//     </div>
//   );
// }

// /* -------------------------------------------------- */
// /* MAIN SECTION */
// /* -------------------------------------------------- */
// export function ProcessSection() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const containerRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   useMotionValueEvent(scrollYProgress, "change", (latest) => {
//     const index = Math.min(steps.length - 1, Math.floor(latest * steps.length));
//     setActiveIndex(index);
//   });

//   return (
//     <section id="process" className="relative py-32 bg-black text-white">
//       {/* BACKGROUND WORD */}
//       <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.03] select-none">
//         <div className="text-[clamp(10rem,40vw,50rem)] font-black tracking-[-0.08em]">PROCESS</div>
//       </div>

//       {/* HEADING */}
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 mb-32">
//         <SectionHeading eyebrow="Workflow" title="How we work." />
//       </div>

//       {/* STICKY LAYOUT — proven pattern */}
//       <div ref={containerRef} className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
//         {/* STICKY IMAGE — sits behind, full height of container */}
//         <div className="hidden lg:block sticky top-0 h-0 overflow-visible z-10">
//           <div className="h-screen w-1/2 ml-auto flex items-center justify-center pr-8">
//             <div className="relative w-full max-w-[520px] h-[min(620px,75vh)] rounded-[3rem] overflow-hidden border border-zinc-800 bg-zinc-900 shadow-[0_40px_120px_rgba(0,0,0,0.7)]">
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={activeIndex}
//                   initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
//                   animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
//                   exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
//                   transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//                   className="absolute inset-0"
//                 >
//                   <img
//                     src={steps[activeIndex].image}
//                     alt={steps[activeIndex].title}
//                     className="h-full w-full object-cover"
//                   />
//                   <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent" />
//                 </motion.div>
//               </AnimatePresence>
//             </div>
//           </div>
//         </div>

//         {/* SCROLLING TEXT — left half */}
//         <div className="relative z-20 w-full lg:w-1/2">
//           {steps.map((step, index) => (
//             <StepItem key={step.id} step={step} index={index} activeIndex={activeIndex} />
//           ))}
//         </div>
//       </div>

//       {/* MOBILE */}
//       <div className="lg:hidden px-6 mt-24 space-y-16">
//         {steps.map((step) => (
//           <div key={step.id} className="space-y-6">
//             <div className="h-64 overflow-hidden rounded-3xl border border-zinc-900">
//               <img src={step.image} alt={step.title} className="h-full w-full object-cover opacity-70" />
//             </div>
//             <h3 className="text-4xl font-bold">{step.title}</h3>
//             <p className="text-zinc-400">{step.body}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }