import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: `${site.name} | ${site.university} Cybersecurity`,
  description: site.description,
  openGraph: {
    title: site.name,
    description: site.description,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0D14",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
