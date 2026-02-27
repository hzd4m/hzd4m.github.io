"use client";

import { useState, useEffect, useRef, useCallback } from "react";

interface ScrollOptimizationOptions {
  threshold?: number;
  rootMargin?: string;
  disabled?: boolean;
}

export function useScrollOptimization({
  threshold = 0.1,
  rootMargin = "0px",
  disabled = false,
}: ScrollOptimizationOptions = {}) {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsInView(true);
        setHasAnimated(true);
      }
    },
    []
  );

  useEffect(() => {
    if (disabled || hasAnimated) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [handleIntersection, threshold, rootMargin, disabled, hasAnimated]);

  return { ref, isInView, hasAnimated };
}

// Hook to detect scroll direction
export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setScrollDirection("up");
      } else if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setScrollY(currentScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollDirection, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollDirection);
  }, []);

  return { scrollDirection, scrollY };
}

// Hook for lazy loading with IntersectionObserver
export function useLazyLoad(options: IntersectionObserverInit = {}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setIsLoaded(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, ...options }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [options]);

  return { ref, isLoaded, isInView };
}

// Hook for parallax effect
export function useParallax(scrollY: number, speed: number = 0.5) {
  return scrollY * speed;
}
