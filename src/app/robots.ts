import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/admin/', '/api/'], // Blocks private routes
            },
            {
                userAgent: 'GPTBot', // Explicitly allow ChatGPT
                allow: '/',
            },
            {
                userAgent: 'Google-Extended', // Explicitly allow Gemini/Bard
                allow: '/',
            }
        ],
        sitemap: 'https://teselaprojects.com/sitemap.xml',
    }
}
