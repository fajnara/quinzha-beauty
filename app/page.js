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
    wa: wa("Halo Quinzha Beauty, saya mau Hydra Facial"),
  },
  {
    name: "Skin Booster Korea",
    price: "Mulai Rp 300.000",
    desc: "Glow dari dalam: kulit lebih lembap, kenyal, dan cerah.",
    wa: wa("Halo Quinzha Beauty, saya tertarik Skin Booster Korea"),
  },
  {
    name: "Tanam Benang",
    price: "Mulai Rp 500.000",
    desc: "Angkat & kencangkan area wajah tanpa operasi, hasil natural.",
    wa: wa("Halo Quinzha Beauty, saya tertarik Tanam Benang"),
  },
  {
    name: "Filler Bibir",
    price: "Mulai Rp 600.000",
    desc: "Bentuk bibir lebih berisi & proporsional, dikerjakan dokter.",
    wa: wa("Halo Quinzha Beauty, saya tertarik Filler Bibir"),
  },
];

const steps = [
  ["1", "Chat WhatsApp", "Ceritakan keluhan & keinginanmu. Kami bantu pilihkan."],
  ["2", "Pilih jadwal", "Tentukan hari & jam yang pas — kami buka sampai malam."],
  ["3", "Konsultasi dokter", "Datang, kulitmu dicek dulu sebelum treatment."],
  ["4", "Treatment", "Dikerjakan & diawasi dokter, di ruang yang nyaman."],
];

const quotes = [
  { t: "Tempat barunya lucu banget, nyaman. Hydra facial-nya bikin muka langsung fresh.", n: "Dinda", l: "Batulicin" },
  { t: "Harganya jelas dari awal, nggak bikin deg-degan. Dokternya ramah.", n: "Tika", l: "Simpang Empat" },
  { t: "Skin booster di sini hasilnya kelihatan. Bakal balik lagi.", n: "Reni", l: "Batulicin" },
];

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
        <section id="beranda" className="relative overflow-hidden pt-28 pb-16 sm:pt-36">
          <div className="absolute -left-32 -top-24 h-96 w-96 rounded-full bg-peach-100 blur-3xl" aria-hidden="true" />
          <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-peach-200/60 blur-3xl" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
            <div>
              <p data-reveal className="mb-4 inline-flex rounded-full bg-peach-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-coral-600">
                Klinik Kecantikan · Batulicin
              </p>
              <h1 data-reveal className="text-4xl font-extrabold leading-[1.05] sm:text-6xl">
                Tempat baru.
                <br />
                <span className="text-coral-500">Glow baru.</span>
              </h1>
              <p data-reveal className="mt-6 max-w-md text-lg text-ink-700">
                Treatment terkini, harga yang jujur, dan ruang klinik baru yang nyaman.
                Glow-up nggak harus bikin dompet deg-degan.
              </p>
              <div data-reveal className="mt-8 flex flex-wrap items-center gap-4">
                <a href={waMain} target="_blank" rel="noopener"
                  className="inline-flex rounded-full bg-coral-500 px-7 py-3 font-semibold text-white shadow-lg shadow-coral-500/30 transition hover:bg-coral-600">
                  Booking via WhatsApp
                </a>
                <a href="#perawatan" className="inline-flex items-center gap-2 px-2 py-3 font-semibold text-ink-900 underline decoration-coral-400 decoration-2 underline-offset-4">
                  Lihat harga
                </a>
              </div>
            </div>

            <div data-reveal className="relative">
              <div className="overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl shadow-coral-500/20">
                <img src="/treatment.jpg" alt="Suasana perawatan di ruang baru Quinzha Beauty" className="h-[440px] w-full object-cover" />
              </div>
              <span className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-3 text-sm font-bold text-ink-900 shadow-xl">
                Ruang baru ✨ lebih nyaman
              </span>
            </div>
          </div>
        </section>

        {/* ===== TREATMENTS + HARGA ===== */}
        <section id="perawatan" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
                Perawatan &amp; Harga
              </p>
              <h2 data-reveal className="text-3xl font-extrabold sm:text-4xl">
                Harga kami terbuka dari awal.
              </h2>
              <p data-reveal className="mt-4 text-ink-700">
                Nggak ada harga rahasia di DM. Ini yang paling sering diambil — klik buat tanya
                atau langsung booking di WhatsApp.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {treatments.map((t) => (
                <a
                  key={t.name}
                  href={t.wa}
                  target="_blank"
                  rel="noopener"
                  data-reveal
                  className="group flex items-center justify-between gap-4 rounded-3xl border border-peach-200 bg-white p-7 transition hover:-translate-y-1 hover:border-coral-400 hover:shadow-xl hover:shadow-coral-500/10"
                >
                  <div>
                    <h3 className="font-display text-2xl font-bold text-ink-900">{t.name}</h3>
                    <p className="mt-1 text-sm text-ink-500">{t.desc}</p>
                    <span className="mt-3 inline-block font-display text-lg font-bold text-coral-500">
                      {t.price}
                    </span>
                  </div>
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-peach-100 text-coral-500 transition group-hover:bg-coral-500 group-hover:text-white" aria-hidden="true">
                    →
                  </span>
                </a>
              ))}
            </div>
            <p data-reveal className="mt-6 text-center text-sm text-ink-500">
              *Harga ilustrasi untuk pratinjau — harga final &amp; promo terbaru via WhatsApp.
            </p>
          </div>
        </section>

        {/* ===== RUANG BARU (gallery) ===== */}
        <section id="ruang" className="bg-cream-100 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
                Ruang Baru
              </p>
              <h2 data-reveal className="text-3xl font-extrabold sm:text-4xl">
                Pindah ke tempat yang lebih nyaman.
              </h2>
              <p data-reveal className="mt-4 text-ink-700">
                Dokter &amp; terapis tetap sama — kualitas &amp; kepercayaan tetap nomor satu, sekarang
                di ruang yang lebih estetik.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div data-reveal className="overflow-hidden rounded-3xl sm:col-span-2 sm:row-span-2">
                <img src="/treatment.jpg" alt="Ruang perawatan Quinzha Beauty" className="h-full min-h-[260px] w-full object-cover" />
              </div>
              <div data-reveal className="overflow-hidden rounded-3xl">
                <img src="/dr-amalia.jpg" alt="Tim dokter Quinzha Beauty" className="h-[200px] w-full object-cover" />
              </div>
              <div data-reveal className="grid place-items-center rounded-3xl bg-coral-500 p-6 text-center text-white">
                <p className="font-display text-xl font-bold leading-snug">
                  Buka sampai malam,
                  <br /> pas buat yang sibuk.
                </p>
              </div>
            </div>
            <p data-reveal className="mt-5 text-xs text-ink-500">
              Foto di atas masih contoh (stok) untuk pratinjau — akan diganti foto ruang &amp; tim asli.
            </p>
          </div>
        </section>

        {/* ===== PROOF ===== */}
        <section id="bukti" className="py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-5">
            <div className="mx-auto max-w-2xl text-center">
              <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
                Bukti
              </p>
              <h2 data-reveal className="text-3xl font-extrabold sm:text-4xl">Geser, lihat bedanya.</h2>
              <p data-reveal className="mt-4 text-ink-700">Seret pembanding untuk melihat sebelum &amp; sesudah.</p>
            </div>

            <div data-reveal className="mx-auto mt-10 max-w-3xl">
              <BeforeAfter
                beforeSrc="/before.jpg"
                afterSrc="/after.jpg"
                beforeAlt="Kulit wajah sebelum perawatan"
                afterAlt="Kulit wajah setelah perawatan — lebih bersih dan merata"
              />
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {quotes.map((q) => (
                <blockquote key={q.n} data-reveal className="rounded-3xl border border-peach-200 bg-white p-6">
                  <p className="text-ink-700">{`“${q.t}”`}</p>
                  <footer className="mt-4 flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full bg-peach-100 font-display font-bold text-coral-500" aria-hidden="true">
                      {q.n.charAt(0)}
                    </span>
                    <span className="text-sm">
                      <strong className="block text-ink-900">{q.n}</strong>
                      <span className="text-ink-500">{q.l}</span>
                    </span>
                  </footer>
                </blockquote>
              ))}
            </div>
            <p data-reveal className="mt-6 text-center text-xs text-ink-500">
              Foto &amp; testimoni masih contoh untuk pratinjau — akan diganti milik pasien, atas izin.
            </p>
          </div>
        </section>

        {/* ===== STEPS ===== */}
        <section id="proses" className="bg-cream-100 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-5">
            <div className="max-w-2xl">
              <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
                Cara booking
              </p>
              <h2 data-reveal className="text-3xl font-extrabold sm:text-4xl">Gampang, tinggal chat.</h2>
            </div>
            <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map(([no, h, d]) => (
                <li key={no} data-reveal className="rounded-3xl bg-white p-6 shadow-sm">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-coral-500 font-display font-bold text-white">
                    {no}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink-900">{h}</h3>
                  <p className="mt-1 text-sm text-ink-500">{d}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ===== VISIT ===== */}
        <section id="kunjungi" className="py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 md:grid-cols-2">
            <div>
              <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-500">
                Kunjungi
              </p>
              <h2 data-reveal className="text-3xl font-extrabold sm:text-4xl">Mampir ke Quinzha 88.</h2>
              <div data-reveal className="mt-6 border-b border-peach-200 pb-5">
                <h3 className="font-display text-xl font-bold text-ink-900">Batulicin</h3>
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
            <div data-reveal className="overflow-hidden rounded-3xl border border-peach-200">
              <iframe
                title="Peta lokasi Quinzha Beauty — Batulicin"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full"
                src="https://maps.google.com/maps?q=Batulicin%2C%20Tanah%20Bumbu%2C%20Kalimantan%20Selatan&z=14&output=embed"
              />
            </div>
          </div>
        </section>

        {/* ===== FOOTER ===== */}
        <footer id="kontak" className="bg-ink-900 text-cream-50">
          <div className="mx-auto max-w-6xl px-5 py-20 text-center">
            <p data-reveal className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-coral-400">
              Siap glow-up?
            </p>
            <h2 data-reveal className="mx-auto max-w-xl text-3xl font-extrabold text-cream-50 sm:text-5xl">
              Booking-nya gampang, tinggal chat.
            </h2>
            <a data-reveal href={waMain} target="_blank" rel="noopener"
              className="mt-8 inline-flex rounded-full bg-coral-500 px-8 py-3.5 font-semibold text-white transition hover:bg-coral-400">
              Booking sekarang
            </a>
          </div>
          <div className="border-t border-white/10">
            <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-5 py-8 sm:flex-row sm:items-center">
              <span className="font-display text-lg font-bold">
                Quinzha<span className="text-coral-400"> 88</span>
              </span>
              <a href="https://instagram.com/quinzhabeautyaesthetic88" target="_blank" rel="noopener" className="text-sm text-coral-300 hover:text-cream-50">
                Instagram @quinzhabeautyaesthetic88
              </a>
              <p className="text-xs text-cream-50/60">
                © {new Date().getFullYear()} Quinzha Beauty 88 · Batulicin, Kalsel.
                <br />
                Pratinjau desain · foto, harga &amp; testimoni masih contoh.
              </p>
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
