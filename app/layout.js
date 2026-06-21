import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
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
  themeColor: "#f8f0e3",
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
