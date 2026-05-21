import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mirana Anwar",
  description: "Software Engineer II at JP Morgan Chase. Columbia MS CS candidate. Building distributed systems, ML pipelines, and things that scale.",
  openGraph: {
    title: "Mirana Anwar",
    description: "Backend engineer based in NYC. Open to backend and infrastructure roles.",
    url: "https://miranaanwar.com",
    siteName: "Mirana Anwar",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  );
}
