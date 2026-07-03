import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond, Lora, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ConstellationBackground } from "@/components/shared/ConstellationBackground";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["italic"],
  variable: "--font-cormorant",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "FindUrTribe — The Constellation Project",
  description: "Every soul is a star. Every star completes the sky.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "dark", playfair.variable, inter.variable, cormorant.variable, lora.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground bg-[#070B16] overflow-x-hidden selection:bg-white/20">
        <ConstellationBackground />
        {children}
      </body>
    </html>
  );
}
