import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kashi Yatra 2026 | IIT BHU Cultural Festival",
  description: "Kashi Yatra - The annual cultural festival of IIT (BHU) Varanasi. Experience the spiritual essence of Kashi through art, music, dance, and cultural extravaganza.",
  keywords: ["Kashi Yatra", "IIT BHU", "Cultural Festival", "Varanasi", "College Fest"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
