"use client";

import { useEffect } from "react";
import gsapBase from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isRegistered = false;

function ensureRegistered() {
  if (typeof window === "undefined") return;
  if (isRegistered) return;
  gsapBase.registerPlugin(ScrollTrigger);
  isRegistered = true;
}

export const gsap = gsapBase;

export { ScrollTrigger };

export function useGsapScrollTrigger() {
  useEffect(() => {
    ensureRegistered();
  }, []);
}

