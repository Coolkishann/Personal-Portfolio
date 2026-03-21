"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SectionHeading } from "../ui/SectionHeading";

gsap.registerPlugin(ScrollTrigger);

const paragraph =
  "Skilled in developing responsive interfaces and secure REST APIs using the MERN stack. Familiar with caching and systems optimization.";

export function AboutSection() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = gsap.utils.toArray<HTMLSpanElement>(".word");

      // initial state
      gsap.set(words, {
        color: "#3f3f46",
      });

      // Scroll animation
      gsap.to(words, {
        color: "#ffffff",
        stagger: 0.15,
        ease: "none",
        scrollTrigger: {
          trigger: container.current,
          start: "top top",
          end: "+=2000", // scroll distance
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
<section
  ref={container}
  className="relative bg-black text-center flex justify-center items-center px-6 min-h-screen"
>
  <div className="flex flex-col items-center justify-center mx-auto max-w-5xl">
    
    <SectionHeading
      eyebrow="About"
      // title="About Me"
    />

<h2
  ref={textRef}
  className="mt-6 font-body text-[24px] md:text-[46px] xl:text-[46px] leading-relaxed text-center max-w-5xl mx-auto"
>
  {paragraph.split(" ").map((word, i) => (
    <span key={i} className="word inline-block">
      {word}&nbsp;
    </span>
  ))}
</h2>

  </div>
</section>
  );
}