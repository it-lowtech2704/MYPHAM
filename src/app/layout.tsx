import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "vietnamese"],
  variable: "--font-serif",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "vietnamese"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Palma Organics – Dầu Gội Dừa Thiên Nhiên",
  description: "Giải pháp chăm sóc tóc tự nhiên từ dầu dừa ép lạnh Việt Nam. Nuôi dưỡng mái tóc khỏe đẹp từ gốc đến ngọn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`scroll-smooth ${playfair.variable} ${plusJakarta.variable}`}>
      <body className="antialiased min-h-screen flex flex-col font-sans">{children}</body>
    </html>
  );
}
