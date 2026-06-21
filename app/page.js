import Header from "@/components/Header";
import BeforeAfter from "@/components/BeforeAfter";
import ScrollReveal from "@/components/ScrollReveal";

const NUM = "6285222088878";
const wa = (t) => `https://wa.me/${NUM}?text=${encodeURIComponent(t)}`;
const waMain = wa("Halo Quinzha Beauty, saya mau konsultasi");

const treatments = [
  {
    name: "Hydra Facial",
    price: "Mulai Rp 70.000",
    desc: "Bersihin, lembapin, dan angkat sel kulit mati — hasil fresh seketika.",
    accent: "coral",
    wa: wa("Halo Quinzha Beauty, saya mau Hydra Facial"),
  },
  {
    name: "Skin Booster Korea",
    price: "Mulai Rp 300.000",
    desc: "Glow dari dalam: kulit lebih lembap, kenyal, dan cerah.",
    accent: "blue",
    wa: wa("Halo Quinzha Beauty, saya tertarik Skin Booster Korea"),
  },
  {
    name: "Tanam Benang",
    price: "Mulai Rp 500.000",
    desc: "Angkat & kencangkan area wajah tanpa operasi, hasil natural.",
    accent: "gold",
    wa: wa("Halo Quinzha Beauty, saya tertarik Tanam Benang"),
  },
  {
    name: "Filler Bibir",
    price: "Mulai Rp 600.000",
    desc: "Bentuk bibir lebih berisi & proporsional, dikerjakan dokter.",
    accent: "teal",
    wa: wa("Halo Quinzha Beauty, saya tertarik Filler Bibir"),
  },
];

const values = [
  {
    accent: "coral",
    title: "Ditangani dokter",
    desc: "Setiap treatment dicek & diawasi dokter — bukan asal kerja.",
    icon: (
      <path d="M12 3a4 4 0 0 1 4 4v2a4 4 0 1 1-8 0V7a4 4 0 0 1 4-4Zm-7 18a7 7 0 0 1 14 0" />
    ),
  },
  {
    accent: "blue",
    title: "Harga transparan",
    desc: "Harga jelas dari awal, nggak ada angka rahasia di DM.",
    icon: <path d="M12 3v18M7 7h7a3 3 0 0 1 0 6H7m0 0h8" />,
  },
  {
    accent: "teal",
    title: "Ruang baru nyaman",
    desc: "Tempat baru yang lebih estetik & bersih, buka sampai malam.",
    icon: <path d="M4 11 12 4l8 7M6 10v9h12v-9M10 19v-5h4v5" />,
  },
];

const trust = [
  "Ditangani dokter",
  "Harga transparan",
  "Buka sampai malam",
  "Ruang baru",
  "Alat steril",
  "Konsultasi dulu",
];

// Testimonial videos — posters use existing photos; drop /public/*.mp4 and set
// `video` later to play real clips.
const testimonials = [
  { name: "Dinda", loc: "Batulicin", poster: "/after.jpg", quote: "Muka langsung fresh, tempatnya nyaman banget.", accent: "coral" },
  { name: "Tika", loc: "Simpang Empat", poster: "/treatment.jpg", quote: "Harganya jelas dari awal, dokternya ramah.", accent: "blue" },
  { name: "Reni", loc: "Batulicin", poster: "/dr-amalia.jpg", quote: "Skin booster-nya kelihatan hasilnya. Balik lagi!", accent: "teal" },
  { name: "Sari", loc: "Batulicin", poster: "/before.jpg", quote: "Pertama kali ke klinik, dijelasin pelan-pelan.", accent: "gold" },
  { name: "Mega", loc: "Pagatan", poster: "/after.jpg", quote: "Glow-up tanpa bikin dompet nangis. Recommended.", accent: "pink" },
];

const steps = [
  ["1", "Chat WhatsApp", "Ceritakan keluhan & keinginanmu. Kami bantu pilihkan.", "coral"],
  ["2", "Pilih jadwal", "Tentukan hari & jam yang pas — kami buka sampai malam.", "blue"],
  ["3", "Konsultasi dokter", "Datang, kulitmu dicek dulu sebelum treatment.", "gold"],
  ["4", "Treatment", "Dikerjakan & diawasi dokter, di ruang yang nyaman.", "teal"],
];

// accent → tailwind class maps (kept static so Tailwind v4 keeps the utilities)
const accentBg = {
  coral: "bg-coral-500",
  blue: "bg-blue-500",
  gold: "bg-gold-500",
  teal: "bg-teal-500",
  pink: "bg-pink-500",
};
const accentText = {
  coral: "text-coral-500",
  blue: "text-blue-500",
  gold: "text-gold-500",
  teal: "text-teal-500",
  pink: "text-pink-500",
};
const accentSoftBg = {
  coral: "bg-coral-500/15",
  blue: "bg-blue-500/15",
  gold: "bg-gold-500/20",
  teal: "bg-teal-500/15",
  pink: "bg-pink-500/20",
};

// abstract decorative shape for the treatment cards
function Blob({ className }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M44.7-58.2C57.3-49.2 66.2-34.6 70.3-18.6 74.3-2.6 73.6 14.9 66 28.9 58.4 42.9 44 53.5 27.9 60.4 11.8 67.3-6 70.6-22.4 66.4-38.9 62.2-54 50.5-62.9 35.3-71.8 20-74.5 1.4-71.1-15.6-67.7-32.6-58.1-48-44.4-57.8-30.7-67.6-12.9-71.8 3.6-69.8 20.1-67.7 32.1-67.2 44.7-58.2Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

// portrait testimonial "video" card (poster now, real <video src> later)
function VideoCard({ t }) {
  return (
    <figure className="relative aspect-[9/16] w-[230px] shrink-0 overflow-hidden rounded-3xl bg-cream-200 sm:w-[260px]">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster={t.poster}
        src={t.video}
        muted
        loop
        playsInline
        autoPlay={!!t.video}
        preload="none"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/10 to-transparent" />
      <span className={`absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full ${accentBg[t.accent]} text-ink-900 shadow-lg`} aria-hidden="true">
        ▶
      </span>
      <figcaption className="absolute inset-x-0 bottom-0 p-5 text-cream-50">
        <p className="font-body text-sm leading-snug">{`“${t.quote}”`}</p>
        <p className="mt-2 font-display text-base font-semibold">
          {t.name} <span className="font-body text-xs font-normal text-cream-50/70">· {t.loc}</span>
        </p>
      </figcaption>
    </figure>
  );
}

const schema = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: "Quinzha Beauty Aesthetic 88",
  description:
    "Klinik kecantikan di Batulicin: Hydra Facial, Skin Booster Korea, Tanam Benang, Filler Bibir.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Batulicin",
    addressRegion: "Tanah Bumbu, Kalimantan Selatan",
    addressCountry: "ID",
  },
  telephone: "+6285222088878",
  sameAs: ["https://instagram.com/quinzhabeautyaesthetic88"],
};

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#perawatan">Lompat ke perawatan</a>
      <Header />

      <main>
        {/* ===== HERO ===== */}
        <section id="beranda" className="relative overflow-hidden pt-32 pb-20 sm:pt-44 sm:pb-28">
          <div className="absolute -right-48 -top-40 h-[30rem] w-[30rem] rounded-full bg-pink-500/10 blur-3xl" aria-hidden="true" />
          <div className="absolute -left-48 top-72 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl" aria-hidden="true" />

          <div className="relative mx-auto max-w-4xl px-5 text-center">
            <p data-reveal className="mb-7 inline-flex items-center gap-2 rounded-full border border-cream-200 bg-cream-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-ink-700">
              <span className="h-2 w-2 rounded-full bg-coral-500" aria-hidden="true" />
              Klinik Kecantikan · Batulicin
            </p>
            <h1 data-reveal className="text-6xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
              Cantik. Aman.
              <br />
              <span className="italic text-coral-500">Jujur.</span>
            </h1>
            <p data-reveal className="mx-auto mt-7 max-w-xl text-lg text-ink-700 sm:text-xl">
              Treatment terkini, harga yang jujur, dan ruang klinik baru yang nyaman.
              Glow-up nggak harus bikin dompet deg-degan.
            </p>
            <div data-reveal className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a href={waMain} target="_blank" rel="noopener"
                className="inline-flex rounded-full bg-coral-500 px-8 py-4 font-semibold text-white shadow-lg shadow-coral-500/25 transition hover:bg-coral-600">
                Booking via WhatsApp
              </a>
              <a href="#perawatan" className="inline-flex items-center gap-2 px-2 py-3 font-semibold text-ink-900 underline decoration-coral-400 decoration-2 underline-offset-4">
                Lihat harga →
              </a>
            </div>
          </div>

          <div data-reveal className="relative mx-auto mt-16 max-w-[88rem] px-5">
            <div className="overflow-hidden rounded-[2.5rem] border border-cream-200 shadow-2xl shadow-ink-900/10">
              <img src="/treatment.jpg" alt="Suasana perawatan di ruang baru Quinzha Beauty" className="h-[58vh] min-h-[340px] w-full object-cover sm:h-[640px]" />
            </div>
            <span className="absolute -bottom-5 left-8 rounded-2xl bg-cream-50 px-6 py-3.5 text-sm font-bold text-ink-900 shadow-xl sm:left-14">
              Ruang baru ✨ lebih nyaman
            </span>
          </div>
        </section>

        {/* ===== TRUST STRIP ===== */}
        <section className="border-y border-cream-200 bg-cream-50 py-7">
          <div className="marquee" aria-label="Alasan memilih Quinzha Beauty">
            {[0, 1].map((dup) => (
              <div className="marquee__track" key={dup} aria-hidden={dup === 1}>
                {trust.map((t, i) => (
                  <span key={`${dup}-${t}`} className="flex items-center gap-3.5 font-display text-xl font-medium text-ink-900 sm:text-2xl">
                    {t}
                    <span className={`h-1.5 w-1.5 rounded-full ${i % 2 ? "bg-teal-500" : "bg-coral-500"}`} aria-hidden="true" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* ===== KENAPA (3-col value row) ===== */}
        <section id="kenapa" className="py-28 sm:py-40">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
                Kenapa Quinzha
              </p>
              <h2 data-reveal className="text-5xl font-semibold sm:text-6xl">
                Glow-up yang bisa kamu percaya.
              </h2>
            </div>
            <div className="mt-16 grid gap-10 md:grid-cols-3">
              {values.map((v) => (
                <div key={v.title} data-reveal className="border-t-2 border-ink-900 pt-6">
                  <span className={`grid h-12 w-12 place-items-center rounded-2xl ${accentSoftBg[v.accent]} ${accentText[v.accent]}`}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
                      {v.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-semibold text-ink-900">{v.title}</h3>
                  <p className="mt-2 text-ink-700">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TREATMENTS (colorful use-case cards) ===== */}
        <section id="perawatan" className="bg-cream-200/60 py-28 sm:py-40">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
                Perawatan &amp; Harga
              </p>
              <h2 data-reveal className="text-5xl font-semibold sm:text-6xl">
                Harga kami terbuka dari awal.
              </h2>
              <p data-reveal className="mx-auto mt-5 max-w-xl text-lg text-ink-700">
                Nggak ada harga rahasia di DM. Ini yang paling sering diambil — klik buat tanya
                atau langsung booking di WhatsApp.
              </p>
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2">
              {treatments.map((t) => (
                <a
                  key={t.name}
                  href={t.wa}
                  target="_blank"
                  rel="noopener"
                  data-reveal
                  className={`group relative flex min-h-[260px] flex-col justify-between overflow-hidden rounded-[2rem] p-8 text-ink-900 transition hover:-translate-y-1 ${accentBg[t.accent]}`}
                >
                  <Blob className="pointer-events-none absolute -right-10 -top-12 h-48 w-48 text-white/20 transition-transform duration-500 group-hover:scale-110" />
                  <div className="relative">
                    <h3 className="font-display text-3xl font-semibold">{t.name}</h3>
                    <p className="mt-3 max-w-xs text-sm text-ink-900/80">{t.desc}</p>
                  </div>
                  <div className="relative mt-8 flex items-center justify-between">
                    <span className="font-display text-xl font-semibold">{t.price}</span>
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-ink-900 text-cream-50 transition group-hover:bg-cream-50 group-hover:text-ink-900" aria-hidden="true">
                      →
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <p data-reveal className="mt-8 text-center text-sm text-ink-500">
              *Harga ilustrasi untuk pratinjau — harga final &amp; promo terbaru via WhatsApp.
            </p>
          </div>
        </section>

        {/* ===== BIG STATEMENT ===== */}
        <section className="py-28 sm:py-44">
          <div className="mx-auto max-w-5xl px-5 text-center">
            <h2 data-reveal className="text-5xl font-semibold leading-[1.05] sm:text-7xl">
              Glow-up nggak harus bikin
              <br className="hidden sm:block" />{" "}
              <span className="italic text-coral-500">dompet deg-degan.</span>
            </h2>
            <p data-reveal className="mx-auto mt-7 max-w-xl text-lg text-ink-700 sm:text-xl">
              Dokter &amp; terapis tetap sama — kualitas &amp; kepercayaan nomor satu,
              sekarang di ruang yang lebih estetik dan nyaman.
            </p>
          </div>
        </section>

        {/* ===== BUKTI (before/after) ===== */}
        <section id="bukti" className="bg-cream-200/60 py-28 sm:py-40">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
                Bukti
              </p>
              <h2 data-reveal className="text-5xl font-semibold sm:text-6xl">Geser, lihat bedanya.</h2>
              <p data-reveal className="mx-auto mt-5 max-w-xl text-lg text-ink-700">Seret pembanding untuk melihat sebelum &amp; sesudah.</p>
            </div>

            <div data-reveal className="mx-auto mt-14 max-w-4xl">
              <BeforeAfter
                beforeSrc="/before.jpg"
                afterSrc="/after.jpg"
                beforeAlt="Kulit wajah sebelum perawatan"
                afterAlt="Kulit wajah setelah perawatan — lebih bersih dan merata"
              />
            </div>
            <p data-reveal className="mt-8 text-center text-xs text-ink-500">
              Foto masih contoh untuk pratinjau — akan diganti milik pasien, atas izin.
            </p>
          </div>
        </section>

        {/* ===== TESTIMONI VIDEO ===== */}
        <section id="testimoni" className="py-28 sm:py-40">
          <div className="mx-auto max-w-3xl px-5 text-center">
            <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
              Testimoni
            </p>
            <h2 data-reveal className="text-5xl font-semibold sm:text-6xl">
              Dengar langsung dari mereka.
            </h2>
            <p data-reveal className="mx-auto mt-5 max-w-xl text-lg text-ink-700">
              Cerita nyata pasien Quinzha — glow baru di ruang yang baru.
            </p>
          </div>

          <div data-reveal className="marquee marquee--slow mt-14" aria-label="Testimoni video pasien">
            {[0, 1].map((dup) => (
              <div className="marquee__track" key={dup} aria-hidden={dup === 1}>
                {testimonials.map((t, i) => (
                  <VideoCard key={`${dup}-${t.name}-${i}`} t={t} />
                ))}
              </div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-3xl px-5 text-center text-xs text-ink-500">
            Video contoh untuk pratinjau — akan diganti video pasien asli, atas izin.
          </p>
        </section>

        {/* ===== PROCESS ===== */}
        <section id="proses" className="bg-cream-200/60 py-28 sm:py-40">
          <div className="mx-auto max-w-7xl px-5">
            <div className="mx-auto max-w-3xl text-center">
              <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
                Cara booking
              </p>
              <h2 data-reveal className="text-5xl font-semibold sm:text-6xl">Gampang, tinggal chat.</h2>
            </div>
            <ol className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([no, h, d, accent]) => (
                <li key={no} data-reveal className="rounded-3xl border border-cream-200 bg-cream-50 p-7">
                  <span className={`grid h-11 w-11 place-items-center rounded-full font-display font-bold text-ink-900 ${accentBg[accent]}`}>
                    {no}
                  </span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{h}</h3>
                  <p className="mt-1.5 text-sm text-ink-500">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== VISIT ===== */}
        <section id="kunjungi" className="py-28 sm:py-40">
          <div className="mx-auto grid max-w-7xl items-start gap-14 px-5 md:grid-cols-2">
            <div>
              <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
                Kunjungi
              </p>
              <h2 data-reveal className="text-5xl font-semibold sm:text-6xl">Mampir ke Quinzha 88.</h2>
              <div data-reveal className="mt-7 border-b border-cream-200 pb-5">
                <h3 className="font-display text-2xl font-semibold text-ink-900">Batulicin</h3>
                <p className="mt-1 text-ink-700">Batulicin, Tanah Bumbu, Kalimantan Selatan.</p>
                <a href={waMain} target="_blank" rel="noopener"
                  className="mt-2 inline-block font-semibold text-coral-500 underline underline-offset-4">
                  WhatsApp 0852-2208-8878
                </a>
              </div>
              <p data-reveal className="mt-5 text-ink-700">
                <strong className="text-ink-900">Jam buka</strong>
                <br />
                Setiap hari · sampai malam
                <br />
                <span className="text-xs text-ink-500">*alamat lengkap &amp; jam pasti perlu dikonfirmasi klinik.</span>
              </p>
            </div>
            <div data-reveal className="overflow-hidden rounded-3xl border border-cream-200">
              <iframe
                title="Peta lokasi Quinzha Beauty — Batulicin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[420px] w-full"
                src="https://maps.google.com/maps?q=Batulicin%2C%20Tanah%20Bumbu%2C%20Kalimantan%20Selatan&z=14&output=embed"
              />
            </div>
          </div>
        </section>

        {/* ===== CTA BAND ===== */}
        <section className="bg-ink-900 text-cream-50">
          <div className="mx-auto max-w-5xl px-5 py-28 text-center sm:py-40">
            <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-400">
              Siap glow-up?
            </p>
            <h2 data-reveal className="mx-auto max-w-2xl text-5xl font-semibold text-cream-50 sm:text-7xl">
              Booking-nya gampang, tinggal chat.
            </h2>
            <a data-reveal href={waMain} target="_blank" rel="noopener"
              className="mt-9 inline-flex rounded-full bg-coral-500 px-9 py-4 font-semibold text-white transition hover:bg-coral-400">
              Booking sekarang
            </a>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer id="kontak" className="bg-ink-900 text-cream-50/80">
          <div className="border-t border-white/10">
            <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">
              <div className="lg:col-span-2">
                <span className="font-display text-2xl font-semibold text-cream-50">
                  Quinzha<span className="text-coral-400"> 88</span>
                </span>
                <p className="mt-3 max-w-xs text-sm">
                  Klinik kecantikan di Batulicin — treatment terkini, harga jujur,
                  ruang baru yang nyaman.
                </p>
              </div>
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-cream-50">Jelajahi</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><a href="#perawatan" className="hover:text-cream-50">Perawatan &amp; Harga</a></li>
                  <li><a href="#bukti" className="hover:text-cream-50">Bukti</a></li>
                  <li><a href="#testimoni" className="hover:text-cream-50">Testimoni</a></li>
                  <li><a href="#kunjungi" className="hover:text-cream-50">Kunjungi</a></li>
                </ul>
              </div>
              <div>
                <p className="font-display text-sm font-semibold uppercase tracking-wider text-cream-50">Kontak</p>
                <ul className="mt-4 space-y-2 text-sm">
                  <li><a href={waMain} target="_blank" rel="noopener" className="hover:text-cream-50">WhatsApp 0852-2208-8878</a></li>
                  <li><a href="https://instagram.com/quinzhabeautyaesthetic88" target="_blank" rel="noopener" className="text-coral-300 hover:text-cream-50">@quinzhabeautyaesthetic88</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto max-w-7xl px-5 py-6 text-xs text-cream-50/60">
              © {new Date().getFullYear()} Quinzha Beauty 88 · Batulicin, Kalsel.
              {" · "}
              Pratinjau desain · foto, harga &amp; testimoni masih contoh.
            </div>
          </div>
        </footer>
      </main>

      <ScrollReveal />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
