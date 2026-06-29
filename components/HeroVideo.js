"use client";

import { useEffect, useRef } from "react";

// Hero media: a muted, looping background video that paints its poster instantly
// (so LCP stays fast) and only autoplays via JS when the user hasn't asked for
// reduced motion. No-JS / reduced-motion users keep the still poster.
// If `src` (hero.mp4) isn't present yet, the <video> simply shows the poster.
export default function HeroVideo({ src, poster, label, className }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const p = v.play();
    if (p && p.catch) p.catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}
