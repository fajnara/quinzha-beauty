import { Baloo_2, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Baloo_2({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-baloo",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata = {
  title: "Quinzha Beauty 88 — Klinik Kecantikan di Batulicin",
  description:
    "Quinzha Beauty Aesthetic 88, Batulicin. Hydra Facial, Skin Booster Korea, Tanam Benang, Filler Bibir — harga jujur, suasana baru yang nyaman.",
  metadataBase: new URL("https://quinzha-beauty.example"),
  openGraph: {
    title: "Quinzha Beauty 88 — Glow-up jujur di Batulicin",
    description:
      "Treatment terkini, harga transparan, ruang klinik baru yang nyaman.",
    type: "website",
    locale: "id_ID",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffaf6",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="id"
      className={`no-js ${display.variable} ${body.variable}`}
      suppressHydrationWarning
    >
      <body suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.remove('no-js');document.documentElement.classList.add('js');",
          }}
        />
        {children}
      </body>
    </html>
  );
}
