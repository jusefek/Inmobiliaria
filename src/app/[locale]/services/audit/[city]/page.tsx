import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react"
import { GlossarySection } from "@/components/marketing/glossary-section"
import { locations, Locale } from "@/data/locations"
import { constructMetadata } from "@/lib/metadata"
import { StickyCTA } from "@/components/marketing/sticky-cta"

import { getTranslations } from "next-intl/server"

// Generate all combinations of locale + city
export async function generateStaticParams() {
    const params: { locale: string; city: string }[] = []

    locations.forEach(location => {
        // For each location, find which locales it supports (or all)
        // Check keys in location.locales
        Object.keys(location.locales).forEach(localeKey => {
            params.push({
                locale: localeKey,
                city: location.slug
            })
        })
    })

    return params
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale, city: string }> }) {
    const { locale, city } = await params
    const location = locations.find(l => l.slug === city)
    const localeData = location?.locales[locale]

    if (!location || !localeData) return {}

    return constructMetadata({
        title: localeData.seo_title,
        description: localeData.description,
        locale: locale,
        canonical: `https://teselaprojects.com/${locale}/services/audit/${city}`
    })
}

export default async function CityAuditPage({ params }: { params: Promise<{ locale: Locale, city: string }> }) {
    const { locale, city } = await params
    const t = await getTranslations('city_page')
    const location = locations.find(l => l.slug === city)
    const data = location?.locales[locale]

    if (!location || !data) {
        notFound()
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* 1. HERO City */}
            <section className="relative py-20 lg:py-32 bg-nolla-blue text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern-nolla.png')] bg-repeat bg-[length:200px]" />
                <div className="container relative z-10 flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 space-y-6">
                        <div className="inline-flex items-center rounded-sm bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur-sm border border-white/20">
                            <ShieldCheck className="mr-2 h-4 w-4 text-nolla-cream" />
                            {t('verified_badge')}
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif leading-tight">
                            {data.content_h1}
                        </h1>
                        <p className="text-xl text-blue-100 max-w-xl">
                            {data.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="bg-nolla-cream text-nolla-blue hover:bg-white text-lg px-8 border-2 border-transparent" asChild>
                                <Link href={`/${locale}/services/audit/checkout`}>
                                    {t('cta_audit_price')}
                                </Link>
                            </Button>
                        </div>
                        <p className="text-xs text-blue-200 mt-2 font-light">
                            {t('guarantee_text')}
                        </p>
                    </div>
                    {/* Placeholder for Dynamic Map or Image */}
                    <div className="flex-1 w-full max-w-md bg-white/5 p-4 rounded-xl border border-white/10 backdrop-blur-md">
                        <div className="aspect-square relative rounded-lg overflow-hidden bg-slate-200">
                            {/* Ideally a map of the city or relevant image */}
                            <Image
                                src="/images/home-experts.jpg"
                                alt={`Real Estate Expert in ${location.slug}`}
                                fill
                                className="object-cover opacity-80"
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                                <p className="text-white font-bold text-lg capitalize">{location.slug}, Spain</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. GLOSSARY SECTION (The SEO Trap) */}
            <GlossarySection locale={locale} />

            {/* 3. Sticky CTA for Conversion */}
            <StickyCTA />
        </div>
    )
}
