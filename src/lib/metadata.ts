import { Metadata } from 'next'
import { locales, Locale } from '@/data/locations'

export function constructMetadata({
    title,
    description,
    locale,
    canonical,
    image = "/images/og-image.jpg"
}: {
    title: string
    description: string
    locale: Locale
    canonical: string
    image?: string
}): Metadata {

    // Base URL
    const baseUrl = 'https://teselaprojects.com'

    // Generate Hreflangs for all locales
    const languages: Record<string, string> = {}
    locales.forEach(lang => {
        // Replace current locale in canonical URL with the target lang
        // Assumes canonical starts with baseUrl/locale... or just baseUrl if default?
        // Actually, simpler: we construct from the path directly.
        // However, we don't know the exact path structure in this helper easily without passing it.
        // Let's assume canonical is the full EN url or generic path?
        // A better approach: canonical should be passed as the PATH (e.g. /services/audit/alicante)
        // But for now, let's just assume we replace the locale segment if it exists, or prepend it.

        // Simplification for the task: We will just link to the root of the locale if path is complex, 
        // OR we can try to be smart.
        // For now, let's rely on the user manually passing correct alternates if needed, 
        // OR just generate alternates based on the assumption that the path structure is identical:
        // /en/path -> /de/path

        // We'll strip the domain and locale from the canonical input to get the 'slug' path
        // validCanonical example: https://teselaprojects.com/en/services/audit
        const urlObj = new URL(canonical)
        const pathSegments = urlObj.pathname.split('/').filter(Boolean)

        // Remove locale if it's the first segment
        if (locales.includes(pathSegments[0] as any)) {
            pathSegments.shift()
        }

        const purePath = pathSegments.join('/')
        languages[lang] = `${baseUrl}/${lang}/${purePath}`
    })

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            locale: locale,
            url: canonical,
            siteName: "TESELA PROJECTS",
            images: [{ url: image }],
            type: 'website',
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
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
        alternates: {
            canonical: canonical,
            languages: languages,
        }
    }
}
