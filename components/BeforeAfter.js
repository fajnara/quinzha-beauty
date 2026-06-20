"use client";

import { useEffect, useRef, useState } from "react";

// Interactive before/after wipe (drag / click / keyboard). Both images stay
// aligned; the "before" layer is revealed with clip-path.
export default function BeforeAfter({ beforeSrc, afterSrc, beforeAlt, afterAlt }) {
  const frameRef = useRef(null);
  const dragging = useRef(false);
  const [pos, setPos] = useState(50);

  const applyFromX = (clientX) => {
    const f = frameRef.current;
    if (!f) return;
    const r = f.getBoundingClientRect();
    let p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  useEffect(() => {
    const move = (e) => {
      if (!dragging.current) return;
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      applyFromX(x);
    };
    const end = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: true });
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", end);
      window.removeEventListener("touchend", end);
    };
  }, []);

  const onKeyDown = (e) => {
    let n = pos;
    if (e.key === "ArrowLeft") n -= 4;
    else if (e.key === "ArrowRight") n += 4;
    else return;
    e.preventDefault();
    setPos(Math.max(0, Math.min(100, n)));
  };

  return (
    <div
      className="ba__frame glow-cyan"
      ref={frameRef}
      onClick={(e) => {
        if (e.target.closest(".ba__handle")) return;
        applyFromX(e.clientX);
      }}
    >
      <div className="ba__img ba__img--after">
        <img className="ba__photo" src={afterSrc} alt={afterAlt} draggable="false" />
        <span className="ba__tag ba__tag--after">Sesudah</span>
      </div>
      <div
        className="ba__img ba__img--before"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <img className="ba__photo" src={beforeSrc} alt={beforeAlt} draggable="false" />
        <span className="ba__tag ba__tag--before">Sebelum</span>
      </div>
      <button
        type="button"
        className="ba__handle"
        style={{ left: `${pos}%` }}
        role="slider"
        aria-label="Geser pembanding sebelum dan sesudah"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(pos)}
        onMouseDown={() => (dragging.current = true)}
        onTouchStart={() => (dragging.current = true)}
        onKeyDown={onKeyDown}
      >
        <span className="ba__knob" aria-hidden="true">
          {"↔"}
        </span>
      </button>
    </div>
  );
}
