import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
<<<<<<< HEAD
  title: "Aether",
  description: "A faster, cleaner and more private browsing experience. Built on Chromium with anti-fingerprinting, tracker blocking, and a liquid-glass interface.",
=======
  title: "Aether \u2014 Browse beyond limits",
  description: "A faster, cleaner and more private browsing experience. Built on Chromium.",
  icons: {
    icon: "/favicon-32.png",
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
  },
>>>>>>> c24233208a7df97ef24db8ba691b60eea82cde0f
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
