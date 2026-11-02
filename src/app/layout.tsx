import type { Metadata } from "next";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const display = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: "Equipping youngsters to compete internationally – an elite Zimbabwean private school blending heritage, technology and holistic education. ZIMSEC-aligned O & A-Level programs from Form 1 to 6.",
  keywords: [
    "Cliffs International College",
    "private school Zimbabwe",
    "international school Ruwa",
    "ZIMSEC curriculum",
    "O Level A Level Zimbabwe",
    "elite education Zimbabwe",
    "boarding school Zimbabwe",
    "academic excellence Zimbabwe",
    "holistic education",
    "digital literacy education"
  ],
  authors: [{ name: "Cliffs International College" }],
  creator: "Cliffs International College",
  publisher: "Cliffs International College",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Cliffs International College | Elite Private School in Zimbabwe",
    description: "Equipping youngsters to compete internationally – an elite Zimbabwean private school blending heritage, technology and holistic education.",
    url: SITE_URL,
    siteName: "Cliffs International College",
    locale: "en_ZW",
    type: "website",
    images: [
      {
        url: "/school_pictures/school_layout_1.jpg",
        width: 1200,
        height: 630,
        alt: "Cliffs International College campus",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cliffs International College | Elite Private School in Zimbabwe",
    description: "Equipping youngsters to compete internationally – an elite Zimbabwean private school blending heritage, technology and holistic education.",
    images: ["/school_pictures/school_layout_1.jpg"],
    creator: "@CliffsCollege", // Replace with actual Twitter handle if available
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              "name": "Cliffs International College",
              "description": "An elite Zimbabwean private school blending heritage, technology and holistic education.",
              "url": SITE_URL,
              "logo": `${SITE_URL}/school_pictures/Logo.jpg`,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "20440 Victory Park",
                "addressLocality": "Ruwa",
                "addressCountry": "ZW"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+263-783-841-141",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://www.facebook.com/CliffsInternationalCollege", // Replace with actual social media
                "https://www.instagram.com/CliffsInternationalCollege"
              ],
              "educationalCredentialAwarded": "ZIMSEC O Level and A Level Certificates",
              "hasEducationalUse": "Secondary Education",
              "numberOfStudents": "200-500", // Approximate
              "foundingDate": "2018-05-08"
            })
          }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} antialiased bg-white text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
