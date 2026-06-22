"use client";

import { useEffect, useRef } from "react";

const accentBg = {
  coral: "bg-coral-500",
  blue: "bg-blue-500",
  gold: "bg-gold-500",
  teal: "bg-teal-500",
  pink: "bg-pink-500",
};

// Auto-scrolling row of portrait testimonial videos. Videos are muted+loop and
// only the ones actually on screen are loaded & played (IntersectionObserver),
// so dropping in real clips stays fast and light even on phones. Posters are
// server-rendered for an instant first paint; sources attach lazily.
export default function TestimonialCarousel({ items }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const vids = Array.from(root.querySelectorAll("video[data-lazy]"));
    if (!vids.length) return;

    // Respect reduced-motion: keep the poster, never autoplay.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const attach = (v) => {
      if (v.dataset.loaded) return;
      v.querySelectorAll("source[data-src]").forEach((s) => {
        s.src = s.dataset.src;
      });
      v.load();
      v.dataset.loaded = "1";
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          const v = e.target;
          if (e.isIntersecting) {
            attach(v);
            const p = v.play();
            if (p && p.catch) p.catch(() => {});
          } else {
            v.pause();
          }
        }
      },
      { rootMargin: "200px 0px", threshold: 0.25 }
    );
    vids.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, [items]);

  return (
    <>
      <div
        ref={rootRef}
        className="marquee marquee--slow mt-14"
        aria-label="Testimoni video pasien"
      >
        {[0, 1].map((dup) => (
          <div className="marquee__track" key={dup} aria-hidden={dup === 1}>
            {items.map((t, i) => (
              <Card key={`${dup}-${t.name}-${i}`} t={t} />
            ))}
          </div>
        ))}
      </div>
      <p className="mx-auto mt-8 max-w-3xl px-5 text-center text-xs text-ink-500">
        Diputar tanpa suara — ketuk video untuk menyalakan suara.
      </p>
    </>
  );
}

function Card({ t }) {
  const hasVideo = !!(t.video || t.videoWebm);
  return (
    <figure className="relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden rounded-3xl bg-cream-200 sm:w-[260px]">
      {hasVideo ? (
        <video
          data-lazy="1"
          className="absolute inset-0 h-full w-full object-cover"
          poster={t.poster}
          muted
          loop
          playsInline
          preload="none"
          onClick={(e) => {
            e.currentTarget.muted = !e.currentTarget.muted;
          }}
        >
          {t.videoWebm ? <source data-src={t.videoWebm} type="video/webm" /> : null}
          {t.video ? <source data-src={t.video} type="video/mp4" /> : null}
        </video>
      ) : (
        <img src={t.poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />
      <span
        className={`pointer-events-none absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full ${accentBg[t.accent]} text-ink-900 shadow-lg`}
        aria-hidden="true"
      >
        ▶
      </span>
      <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 p-5 text-cream-50">
        <p className="font-body text-sm leading-snug">{`“${t.quote}”`}</p>
        <p className="mt-2 font-display text-base font-semibold">
          {t.name}{" "}
          <span className="font-body text-xs font-normal text-cream-50/70">· {t.loc}</span>
        </p>
      </figcaption>
    </figure>
  );
}
