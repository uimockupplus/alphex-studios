import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { WhatsAppButton } from "@/components/layout/whatsapp-button";
import { siteConfig } from "@/lib/site";
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Alphex Studios | Websites That Turn Visitors Into Customers", template: "%s | Alphex Studios" },
  description: siteConfig.description,
  applicationName: "Alphex Studios",
  openGraph: { type: "website", siteName: "Alphex Studios", title: "Alphex Studios | Websites That Turn Visitors Into Customers", description: siteConfig.description, url: siteConfig.url, images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Alphex Studios — Websites that turn visitors into customers" }] },
  twitter: { card: "summary_large_image", title: "Alphex Studios | Websites That Turn Visitors Into Customers", description: siteConfig.description, images: ["/og-image.png"] },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  return <html lang="en"><body><a className="skip-link" href="#main-content">Skip to content</a><Navbar/><main id="main-content">{children}</main><Footer/><WhatsAppButton/>{gaId && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive"/><Script id="ga4-init" strategy="afterInteractive">{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} window.gtag = gtag; gtag('js', new Date()); gtag('config', '${gaId}', { anonymize_ip: true });`}</Script></>}</body></html>;
}
