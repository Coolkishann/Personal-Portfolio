"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const paragraph =
  "We combine years of web design and branding expertise to craft meaningful story driven experiences.";

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
      className="relative bg-black text-center flex justify-center items-center px-6"
    >
      <div className="flex items-center mx-auto justify-center min-h-screen">

        <h2
          ref={textRef}
          className="max-w-5xl text-4xl md:text-6xl xl:text-[4.5rem] font-medium leading-[1.2] flex flex-wrap justify-center"
        >
          {paragraph.split(" ").map((word, i) => (
            <span key={i} className="word mr-3">
              {word}
            </span>
          ))}
        </h2>

      </div>
    </section>
  );
}