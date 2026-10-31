import type { Metadata } from "next";
import "./globals.css";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const metadata: Metadata = {

  title: "Aether \u2014 Browse beyond limits",
  description: "A faster, cleaner and more private browsing experience. Built on Chromium.",
  icons: {
    icon: `${BASE}/favicon-32.png`,
    shortcut: `${BASE}/favicon-32.png`,
    apple: `${BASE}/apple-touch-icon.png`,
  },
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
