"use client";

import { useEffect } from "react";

// One mounted observer reveals every [data-reveal] element on scroll.
// Falls back to "show everything" if IntersectionObserver is missing or
// reduced-motion is on, and has a final safety timeout.
export default function ScrollReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll("[data-reveal]"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.05 }
    );
    els.forEach((el) => io.observe(el));

    const safety = setTimeout(
      () => els.forEach((el) => el.classList.add("is-in")),
      4000
    );

    return () => {
      io.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return null;
}
