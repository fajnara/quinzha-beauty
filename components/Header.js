"use client";

import { useEffect, useState } from "react";

const WA =
  "https://wa.me/6285222088878?text=" +
  encodeURIComponent("Halo Quinzha Beauty, saya mau konsultasi");

const links = [
  ["#perawatan", "Perawatan & Harga"],
  ["#ruang", "Ruang Baru"],
  ["#bukti", "Bukti"],
  ["#kunjungi", "Kunjungi"],
];

export default function Header() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        stuck ? "border-b border-peach-200 bg-cream-50/85 backdrop-blur" : ""
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#beranda" className="flex items-center gap-2" aria-label="Quinzha Beauty — beranda">
          <span className="grid h-9 w-9 place-items-center rounded-2xl bg-coral-500 font-display text-base font-bold text-white">
            Q
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink-900">
            Quinzha<span className="text-coral-500"> 88</span>
          </span>
        </a>

        <nav aria-label="Navigasi utama" className="flex items-center gap-2">
          <button
            type="button"
            className="grid h-11 w-11 place-items-center sm:hidden"
            aria-expanded={open}
            aria-controls="nav-list"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Buka menu</span>
            <span aria-hidden="true" className="text-2xl leading-none text-ink-900">
              {open ? "×" : "≡"}
            </span>
          </button>

          <ul
            id="nav-list"
            onClick={() => setOpen(false)}
            className={`${
              open ? "flex" : "hidden"
            } absolute inset-x-0 top-full flex-col gap-1 border-b border-peach-200 bg-cream-50/97 px-5 pb-4 backdrop-blur sm:static sm:flex sm:flex-row sm:items-center sm:gap-7 sm:border-0 sm:bg-transparent sm:p-0`}
          >
            {links.map(([href, label]) => (
              <li key={href}>
                <a
                  href={href}
                  className="block py-2 text-sm font-medium text-ink-700 transition-colors hover:text-coral-500"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="pt-2 sm:pt-0">
              <a
                href={WA}
                target="_blank"
                rel="noopener"
                className="inline-flex rounded-full bg-coral-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-coral-600"
              >
                Konsultasi
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
