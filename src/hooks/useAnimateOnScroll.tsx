
import { useEffect, useRef } from "react";

export function useAnimateOnScroll<T extends HTMLElement>(animationClass = "animate-fade-in", delay = 0) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    el.style.opacity = '0';
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(animationClass);
          el.style.transitionDelay = `${delay}ms`;
          el.style.opacity = '1';
        }
      },
      { threshold: 0.14 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [animationClass, delay]);

  return ref;
}
