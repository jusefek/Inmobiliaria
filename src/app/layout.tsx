import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SchemaOrg } from "@/components/seo/schema-org";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });

export const metadata: Metadata = {
    metadataBase: new URL('https://teselaprojects.com'), // Replace with actual domain
    title: {
        default: "TESELA PROJECTS | Experts in Safe Real Estate Investment in Valencia",
        template: "%s | TESELA PROJECTS"
    },
    description: "Specific audits for investors in the Valencian Community. We verify debts, licenses, and urban legality. Total protection for your purchase.",
    applicationName: "TESELA PROJECTS",
    authors: [{ name: "TESELA PROJECTS Team" }],
    generator: "Next.js",
    keywords: ["real estate audit", "Valencia investment", "property due diligence", "buy safe spain", "real estate personal shopper"],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://teselaprojects.com",
        siteName: "TESELA PROJECTS",
        title: "TESELA PROJECTS | Safe Real Estate Investment",
        description: "Don't buy blindly. We audit properties in the Valencian Community to detect scams and hidden debts.",
        images: [
            {
                url: "/images/og-image.jpg", // Ensure this image exists or create a placeholder
                width: 1200,
                height: 630,
                alt: "TESELA PROJECTS - Real Estate Safety",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "TESELA PROJECTS | Safe Investment",
        description: "Professional property audits in Valencia. Avoid risks and buy with peace of mind.",
        images: ["/images/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    alternates: {
        canonical: "https://teselaprojects.com",
    },
};

import Script from "next/script";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "RealEstateAgent", // More specific than Organization
        "name": "TESELA PROJECTS",
        "url": "https://teselaprojects.com",
        "logo": "https://teselaprojects.com/images/logo.png",
        "description": "Experts in real estate security and investment management in the Valencian Community.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Valencia",
            "addressRegion": "Valencia",
            "addressCountry": "ES"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+34634415516",
            "contactType": "customer service",
            "areaServed": "ES",
            "availableLanguage": ["English", "Spanish"]
        },
        "sameAs": [
            "https://www.linkedin.com/company/teselaprojects",
            "https://twitter.com/teselaprojects",
            "https://instagram.com/teselaprojects"
        ],
        "knowsAbout": [
            "Real Estate Investment in Spain",
            "Property Due Diligence",
            "Spanish Housing Market Regulations",
            "Tourist Licenses in Valencia"
        ],
        "areaServed": [
            {
                "@type": "City",
                "name": "Valencia"
            },
            {
                "@type": "City",
                "name": "Alicante"
            },
            {
                "@type": "City",
                "name": "Castellón"
            },
            {
                "@type": "City",
                "name": "Madrid"
            },
            {
                "@type": "City",
                "name": "Barcelona"
            }
        ]
    };

    return (
        <html lang="en" className="scroll-smooth">
            <head>
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-PWB8B2JR');
                    `}
                </Script>
            </head>
            <body
                className={cn(inter.variable, playfair.variable, "min-h-screen flex flex-col bg-background font-sans antialiased")}
                suppressHydrationWarning
            >
                <noscript>
                    <iframe
                        src="https://www.googletagmanager.com/ns.html?id=GTM-PWB8B2JR"
                        height="0"
                        width="0"
                        style={{ display: 'none', visibility: 'hidden' }}
                    />
                </noscript>
                <GoogleAnalytics />
                <SchemaOrg schema={organizationSchema} />
                {children}
            </body>
        </html>
    );
}
