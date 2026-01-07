import { MetadataRoute } from 'next'
import { locations, locales } from '@/data/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://teselaprojects.com'

  // Base routes that exist for all languages
  const staticRoutes = [
    '',
    '/services',
    '/services/audit',
    '/blog',
    '/contact',
  ]

  const sitemapEntries: MetadataRoute.Sitemap = []

  // 1. Generate static routes for each locale
  staticRoutes.forEach(route => {
    locales.forEach(locale => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}${route}`,
        lastModified: new Date(),
        changeFrequency: route.includes('audit') ? 'daily' : 'weekly',
        priority: route === '' ? 1 : 0.8,
      })
    })
  })

  // 2. Generate city-specific routes for each locale
  // e.g. /es/alicante, /en/alicante
  locations.forEach(location => {
    locales.forEach(locale => {
      sitemapEntries.push({
        url: `${baseUrl}/${locale}/${location.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.9,
      })
    })
  })

  return sitemapEntries
}
