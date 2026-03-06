import type { Metadata } from "next";
import { Barlow, Lexend, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-barlow",
  display: "swap",
});

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-lexend",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verse Games Dev House | Home",
  description: "Pick a role. Join a team. Ship something real. 100% Revenue to Contributors.",
  openGraph: {
    title: "Verse Games Dev House | Home",
    description: "Pick a role. Join a team. Ship something real. 100% Revenue to Contributors.",
    type: "website",
    url: "https://vgdh.io",
  },
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${lexend.variable} ${ibmPlexSans.variable}`}
    >
      <body className="font-[family-name:var(--font-lexend)] antialiased">
        {children}
      </body>
    </html>
  );
}
