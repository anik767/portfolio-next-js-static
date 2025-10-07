import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins, Playfair_Display, Rajdhani } from "next/font/google";
import "./globals.css";
import GSAPScrollWrapper from "./components/GSAPScrollWrapper";
import ScrollAnimations from "./components/ScrollAnimations";
import Header from "./components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Azmain Iqtidar Anik - Full Stack Developer",
  description: "Portfolio website of John Doe, a passionate full stack developer and UI/UX designer creating beautiful, functional, and user-centered digital experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${playfair.variable} ${rajdhani.variable} ${jetbrainsMono.variable}`}>
      <body
        className={`${inter.className} ${inter.variable} ${poppins.variable} ${playfair.variable} ${rajdhani.variable} ${jetbrainsMono.variable} bg-[#F4F1EA] antialiased`}
      >
        <Header />
        <GSAPScrollWrapper>
          <ScrollAnimations />
          {children}
        </GSAPScrollWrapper>
      </body>
    </html>
  );
}
