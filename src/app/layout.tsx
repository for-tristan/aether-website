import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aether \u2014 Browse beyond limits",
  description: "A faster, cleaner and more private browsing experience. Built on Chromium with anti-fingerprinting, tracker blocking, and a liquid-glass interface.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
