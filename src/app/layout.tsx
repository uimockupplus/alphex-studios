import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://studio.alphexai.com"),
  title: "Alphex Studios | Websites That Turn Visitors Into Customers",
  description: "Alphex Studios designs fast, modern, conversion-focused websites for startups, local businesses, and growing brands.",
  openGraph: {
    title: "Alphex Studios | Websites That Turn Visitors Into Customers",
    description: "AI-assisted web design and development for businesses ready to grow.",
    url: "https://studio.alphexai.com",
    siteName: "Alphex Studios",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Alphex Studios — Websites that turn visitors into customers" }],
  },
  twitter: { card: "summary_large_image", title: "Alphex Studios", description: "Websites that turn visitors into customers." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
