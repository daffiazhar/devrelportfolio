import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://devrel.garysheng.com'),
  title: "Gary Sheng's DevRel Portfolio",
  description: "Software Engineer, Educator, and Movement Builder passionate about empowering developers and building impactful communities.",
  openGraph: {
    title: "Gary Sheng's DevRel Portfolio",
    description: "Software Engineer, Educator, and Movement Builder passionate about empowering developers and building impactful communities.",
    images: [
      {
        url: "/meta.png",
        width: 1788,
        height: 1370,
        alt: "Gary Sheng's DevRel Portfolio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Gary Sheng's DevRel Portfolio",
    description: "Software Engineer, Educator, and Movement Builder passionate about empowering developers and building impactful communities.",
    images: ["/meta.png"]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
