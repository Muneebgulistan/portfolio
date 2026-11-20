import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import { SITE_CONTENT } from "@/data/content";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  process.env.SITE_URL ||
  SITE_CONTENT.meta.url;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: SITE_CONTENT.meta.title,
  description: SITE_CONTENT.meta.description,
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Muneeb Gulistan",
    "Web Developer",
    "AI Learner",
    "Next.js Developer",
    "React Developer",
    "Pak Austria Institute",
    "ARMAAS Solutions",
    "Feedify Organization",
    "Pakistan Developer",
  ],
  authors: [{ name: "Muneeb Gulistan", url: siteUrl }],
  creator: "Muneeb Gulistan",
  openGraph: {
    title: SITE_CONTENT.meta.title,
    description: SITE_CONTENT.meta.description,
    url: siteUrl,
    siteName: SITE_CONTENT.meta.siteName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONTENT.meta.title,
    description: SITE_CONTENT.meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muneeb Gulistan",
    url: siteUrl,
    image: `${siteUrl}/muneeb-profile.jpg`,
    email: "mailto:muneegulistan@gmail.com",
    jobTitle: "Web Developer & AI Learner",
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Pak Austria Institute",
      },
    ],
    memberOf: [
      { "@type": "Organization", name: "ARMAAS Solutions" },
      { "@type": "Organization", name: "Feedify Organization" },
    ],
    sameAs: [
      "https://github.com/Muneebgulistan",
      "https://www.linkedin.com/in/muneeb-gulistan/",
      "https://www.instagram.com/muneebgulistan/",
    ],
  };

  return (
    <html lang="en" className={chakraPetch.variable}>
      <body className="bg-bg text-text antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
