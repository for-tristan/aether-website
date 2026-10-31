import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {

  title: "Aether Browser",
  description: "A faster, cleaner and more private browsing experience. Built on Chromium.",
  icons: {
    icon: "/favicon-32.png",
    shortcut: "/favicon-32.png",
    apple: "/apple-touch-icon.png",
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
