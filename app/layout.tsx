import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const siteUrl = "https://www.rheumdocs.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rheumatologist in Hagerstown, MD | Rheumatology Consultants",
    template: "%s | Rheumatology Consultants",
  },
  description:
    "Rheumatology Consultants is Western Maryland's independent rheumatology and osteoporosis specialty practice in Hagerstown, MD, serving patients since 1994 with onsite infusion, imaging, and an in-house clinical trial research center.",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Rheumatologist in Hagerstown, MD | Rheumatology Consultants",
    description:
      "Independent rheumatology and osteoporosis specialty practice in Hagerstown, MD since 1994, with onsite infusion, imaging, and an in-house clinical trial research center.",
    url: siteUrl,
    siteName: "Rheumatology Consultants",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rheumatology Consultants, Hagerstown, Maryland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rheumatologist in Hagerstown, MD | Rheumatology Consultants",
    description:
      "Independent rheumatology and osteoporosis specialty practice in Hagerstown, MD since 1994, with onsite infusion, imaging, and an in-house clinical trial research center.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

const conditions = [
  "Rheumatoid Arthritis",
  "Osteoarthritis",
  "Psoriatic Arthritis",
  "Psoriasis",
  "Polymyalgia Rheumatica",
  "Ankylosing Spondylitis",
  "Chronic Low Back Pain",
  "Osteoporosis",
  "Lupus",
  "Joint and Muscle Pain",
];

const services = [
  "Infusion Therapy",
  "Digital X-Ray Imaging",
  "Bone Density Testing",
  "Musculoskeletal Ultrasound",
  "Onsite Laboratory Services",
  "Clinical Research Trials",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#clinic`,
      name: "Rheumatology Consultants",
      description:
        "Independent rheumatology and osteoporosis specialty practice serving Western Maryland since 1994, with an in-house Osteoporosis and Clinical Trial Research Center.",
      url: siteUrl,
      telephone: "+1-301-791-6680",
      faxNumber: "+1-301-714-1506",
      address: {
        "@type": "PostalAddress",
        streetAddress: "346 Mill Street",
        addressLocality: "Hagerstown",
        addressRegion: "MD",
        postalCode: "21740",
        addressCountry: "US",
      },
      medicalSpecialty: ["Rheumatology"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "09:00",
          closes: "16:30",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Friday"],
          opens: "09:00",
          closes: "12:00",
        },
      ],
      availableService: [
        ...conditions.map((name) => ({
          "@type": "MedicalTherapy",
          name,
        })),
        ...services.map((name) => ({
          "@type": "MedicalProcedure",
          name,
        })),
      ],
    },
    {
      "@type": "Physician",
      "@id": `${siteUrl}/#dr-okoye`,
      name: "Dr. Okechukwu Okoye",
      jobTitle: "Medical Director",
      medicalSpecialty: "Rheumatology",
      worksFor: {
        "@id": `${siteUrl}/#clinic`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="font-body bg-bg text-ink antialiased">
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
