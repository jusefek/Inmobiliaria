import { locales } from "@/data/locations"

import { headers } from 'next/headers'
import { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>
}): Promise<Metadata> {
    const { locale } = await params
    const headersList = await headers()

    // Default host or from environment
    const host = process.env.NEXT_PUBLIC_BASE_URL || 'https://teselaprojects.com';

    // Get current path from middleware header or default to empty
    // The middleware sends the full pathname, e.g. /es/services
    // We need to strip the locale to find the "route"
    const fullPathname = headersList.get('x-current-path') || '';

    // Remove the current locale from the start of the path to get the "clean path"
    // e.g. /es/services -> /services
    // e.g. /es -> /
    let cleanPath = fullPathname.replace(new RegExp(`^/${locale}`), '') || '/';
    if (cleanPath === '') cleanPath = '/'; // Ensure root is /

    // Construct alternates
    const languages: Record<string, string> = {};

    locales.forEach((l) => {
        // Handle root path specially if needed, but usually just /locale + path
        // If cleanPath is /, url is /locale
        languages[l] = `${host}/${l}${cleanPath === '/' ? '' : cleanPath}`;
    });

    return {
        alternates: {
            canonical: `${host}/${locale}${cleanPath === '/' ? '' : cleanPath}`,
            languages: languages,
        },
    }
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode
    params: Promise<{ locale: string }>
}) {
    const { locale } = await params
    const messages = await getMessages();

    return (
        <NextIntlClientProvider messages={messages}>
            <Navbar />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </NextIntlClientProvider>
    )
}
