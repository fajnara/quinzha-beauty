"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const accentBg = {
  coral: "bg-coral-500",
  blue: "bg-blue-500",
  gold: "bg-gold-500",
  teal: "bg-teal-500",
  pink: "bg-pink-500",
};

// Auto-scrolling row of portrait testimonial videos. Videos autoplay muted +
// loop and only the on-screen ones load/play (IntersectionObserver) so it stays
// fast and light. A speaker button toggles sound per card, and only ONE video
// can have sound at a time — unmuting one mutes the rest.
export default function TestimonialCarousel({ items }) {
  const rootRef = useRef(null);
  // key (`${dup}-${i}`) of the single card whose sound is on, or null = all muted.
  const [activeKey, setActiveKey] = useState(null);

  const toggleSound = useCallback((key) => {
    setActiveKey((cur) => (cur === key ? null : key));
  }, []);

  // Lazy-load + play only the videos currently on screen. Set up once so it
  // never tears down on toggle (kept independent of the sound state).
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const vids = Array.from(root.querySelectorAll("video[data-key]"));
    if (!vids.length) return;
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

  // Enforce single-audio: exactly the active card is unmuted, all others muted.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    root.querySelectorAll("video[data-key]").forEach((v) => {
      const on = v.dataset.key === activeKey;
      v.muted = !on;
      if (on) {
        const p = v.play();
        if (p && p.catch) p.catch(() => {});
      }
    });
  }, [activeKey]);

  return (
    <>
      <div
        ref={rootRef}
        className="marquee marquee--slow mt-14"
        aria-label="Testimoni video pasien"
      >
        {[0, 1].map((dup) => (
          <div className="marquee__track" key={dup} aria-hidden={dup === 1}>
            {items.map((t, i) => {
              const key = `${dup}-${i}`;
              return (
                <Card
                  key={key}
                  t={t}
                  cardKey={key}
                  decorative={dup === 1}
                  soundOn={activeKey === key}
                  onToggle={toggleSound}
                />
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

function SoundIcon({ on }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M11 5 6 9H2v6h4l5 4V5z" fill="currentColor" stroke="none" />
      {on ? (
        <>
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 6a9 9 0 0 1 0 12" />
        </>
      ) : (
        <path d="m16.5 9 5 6m0-6-5 6" />
      )}
    </svg>
  );
}

function Card({ t, cardKey, decorative, soundOn, onToggle }) {
  const hasVideo = !!t.video;
  return (
    <figure className="relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden rounded-3xl bg-cream-200 sm:w-[260px]">
      {hasVideo ? (
        <video
          data-key={cardKey}
          className="absolute inset-0 h-full w-full cursor-pointer object-cover"
          poster={t.poster}
          muted
          loop
          playsInline
          preload="none"
          onClick={() => onToggle(cardKey)}
        >
          <source data-src={t.video} type="video/mp4" />
        </video>
      ) : (
        <img src={t.poster} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />

      {hasVideo ? (
        <button
          type="button"
          tabIndex={decorative ? -1 : 0}
          aria-label={soundOn ? "Matikan suara" : "Nyalakan suara"}
          aria-pressed={soundOn}
          onClick={(e) => {
            e.stopPropagation();
            onToggle(cardKey);
          }}
          className={`absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full shadow-lg outline-none ring-cream-50/70 transition hover:scale-105 focus-visible:ring-2 ${
            soundOn
              ? `${accentBg[t.accent]} text-ink-900`
              : "bg-ink-900/55 text-cream-50 backdrop-blur-sm hover:bg-ink-900/70"
          }`}
        >
          <SoundIcon on={soundOn} />
        </button>
      ) : null}

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
