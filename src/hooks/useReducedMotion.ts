"use client";

import { useEffect, useState } from "react";

interface UseReducedMotionResult {
  prefersReducedMotion: boolean;
  isClient: boolean;
}

export function useReducedMotion(): UseReducedMotionResult {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return { prefersReducedMotion, isClient };
}

// Animation configuration based on reduced motion preference
export function getAnimationConfig(reducedMotion: boolean) {
  if (reducedMotion) {
    return {
      duration: 0.001,
      ease: "linear",
    };
  }
  return {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1], // Smooth cubic bezier
  };
}

// Stagger children animation config
export function getStaggerConfig(reducedMotion: boolean, baseDelay = 0) {
  if (reducedMotion) {
    return { delayChildren: 0, staggerChildren: 0 };
  }
  return { delayChildren: baseDelay, staggerChildren: 0.08 };
}
