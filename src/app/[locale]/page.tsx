import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Search, TrendingUp, MapPin, Key, CheckCircle2, ArrowRight, AlertTriangle, Scale, Hammer, Languages } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { locales } from "@/data/locations" // Import locales
import { constructMetadata } from "@/lib/metadata"
import { TestimonialsSection } from "@/components/marketing/testimonials-section"
import { getTranslations } from "next-intl/server"
import { JsonLd } from "@/components/seo/json-ld"
import { RenovationCalculator } from "@/components/tools/renovation-calculator"

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'home' })

    return constructMetadata({
        title: t('seo_title'),
        description: t('seo_desc'),
        locale: locale as any,
        canonical: `https://teselaprojects.com/${locale}`
    })
}

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const t = await getTranslations({ locale, namespace: 'home' })
    const tCalc = await getTranslations({ locale, namespace: 'calculator_section' })

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Property Audit & Due Diligence",
        "provider": {
            "@type": "Organization",
            "name": "Tesela Projects",
            "url": "https://teselaprojects.com"
        },
        "description": "Comprehensive real estate audit and due diligence service for international property investors in Spain.",
        "areaServed": {
            "@type": "State",
            "name": "Valencian Community"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Real Estate Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Property Search & Purchase",
                        "description": "Comprehensive guide from search to signature, handling all legal bureaucracy."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Renovations & Maintenance",
                        "description": "Management of renovation projects with verified local contractors."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Vacation Rental Management",
                        "description": "Complete rental management services to maximize investment returns."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Cultural Integration",
                        "description": "Practical classes and support for integrating into the local culture."
                    }
                }
            ]
        }
    }

    return (
        <main className="flex flex-col min-h-screen">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section id="hero" className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden bg-nolla-cream/20">
                {/* Optimized Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1600596542815-2a512130e018?auto=format&fit=crop&q=80&w=2070"
                        alt="Luxury interior in Valencia, Spain - Background"
                        fill
                        priority
                        className="object-cover opacity-20"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background" />
                </div>

                <div className="container px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full border border-nolla-blue/30 bg-nolla-blue/10 px-3 py-1 text-sm font-medium text-nolla-blue backdrop-blur-sm mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-nolla-blue mr-2 animate-pulse"></span>
                        {t('hero_badge')}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-slate-900 font-serif">
                        {t('hero_title_premium_1')}<br />
                        <span className="text-3xl md:text-5xl text-slate-400 font-light italic my-2 block">{t('hero_title_premium_2')}</span>
                        <span className="italic text-nolla-blue">{t('hero_title_premium_3')}</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto mt-4">
                        {t('hero_desc_premium')}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                        <Button className="bg-nolla-blue hover:bg-nolla-blue/90 text-white font-serif tracking-wide px-10 h-14 text-lg w-full sm:w-auto shadow-xl shadow-nolla-blue/20 rounded-none border-2 border-nolla-blue" asChild>
                            <Link href={`/${locale}/services/audit`} aria-label={t('cta_audit')}>
                                <ShieldCheck className="mr-2 h-5 w-5" />
                                {t('cta_audit')}
                            </Link>
                        </Button>
                        <Button variant="outline" className="text-slate-700 border-2 border-slate-300 hover:bg-nolla-blue hover:text-white hover:border-nolla-blue font-serif tracking-wide px-10 h-14 text-lg w-full sm:w-auto rounded-none transition-all" asChild>
                            <Link href={`/${locale}/services`} aria-label={t('cta_explore')}>{t('cta_explore')}</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Renovation Calculator Section */}
            <section id="renovation-calculator" className="py-24 bg-slate-50 border-b border-slate-200">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="flex-1 space-y-6">
                            <div className="inline-flex items-center rounded-full border border-nolla-blue/30 bg-white px-3 py-1 text-sm font-medium text-nolla-blue shadow-sm mb-2">
                                <span className="flex h-2 w-2 rounded-full bg-nolla-blue mr-2"></span>
                                New Tool 2025
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold font-serif text-slate-900 leading-tight">
                                {tCalc('title')}
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-light">
                                {tCalc('desc')}
                            </p>
                            <ul className="space-y-4 pt-4">
                                <li className="flex items-center gap-3 text-slate-700">
                                    <div className="h-2 w-2 rounded-full bg-nolla-gold"></div>
                                    <span>{tCalc('item_1')}</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <div className="h-2 w-2 rounded-full bg-nolla-gold"></div>
                                    <span>{tCalc('item_2')}</span>
                                </li>
                                <li className="flex items-center gap-3 text-slate-700">
                                    <div className="h-2 w-2 rounded-full bg-nolla-gold"></div>
                                    <span>{tCalc('item_3')}</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full relative">
                            {/* Decorative blob/pattern behind calculator */}
                            <div className="absolute -top-10 -right-10 w-64 h-64 bg-nolla-blue/5 rounded-full blur-3xl -z-10"></div>
                            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-nolla-gold/5 rounded-full blur-3xl -z-10"></div>

                            <RenovationCalculator locale={locale} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section id="services-grid" className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            {t('value_prop_title')}
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            {t('value_prop_desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard
                            icon={Search}
                            title={t('service_1_title')}
                            description={t('service_1_desc')}
                        />
                        <ServiceCard
                            icon={Hammer}
                            title={t('service_2_title')}
                            description={t('service_2_desc')}
                        />
                        <ServiceCard
                            icon={Key}
                            title={t('service_3_title')}
                            description={t('service_3_desc')}
                        />
                        <ServiceCard
                            icon={Languages}
                            title={t('service_4_title')}
                            description={t('service_4_desc')}
                        />

                    </div>
                </div>
            </section>

            {/* Stats / Trust */}
            <section id="trust-metrics" className="py-16 border-y border-slate-100 bg-white">
                <div className="container text-center">
                    <p className="text-sm font-semibold text-nolla-gold uppercase tracking-widest mb-10">{t('testimonials_title')}</p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
                        <Stat number="150+" label={t('stat_1_label')} />
                        <Stat number="12M€" label={t('stat_2_label')} />
                        <Stat number="100%" label={t('stat_3_label')} />
                        <Stat number="4.9/5" label={t('stat_4_label')} />
                    </div>
                </div>
            </section>

            {/* City Section (SEO) */}
            <section id="local-expertise" className="py-24 bg-nolla-blue text-white overflow-hidden relative">
                {/* Overlay Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-nolla.png')] bg-repeat bg-[length:200px]" />

                <div className="container flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1 space-y-8 pl-4 md:pl-12 lg:pl-16">
                        <h2 className="text-4xl font-bold font-serif text-nolla-cream">{t('city_title')}</h2>
                        <p className="text-blue-50 text-xl leading-relaxed font-light">
                            {t('city_desc')}
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm text-lg">
                                <MapPin className="text-nolla-cream h-6 w-6" />
                                <span>{t('city_item_1')}</span>
                            </li>
                            <li className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm text-lg">
                                <MapPin className="text-nolla-cream h-6 w-6" />
                                <span>{t('city_item_2')}</span>
                            </li>
                            <li className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm text-lg">
                                <MapPin className="text-nolla-cream h-6 w-6" />
                                <span>{t('city_item_3')}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 relative h-[500px] w-full rounded-tr-[50px] rounded-bl-[50px] overflow-hidden shadow-2xl border-4 border-nolla-cream/20">
                        <Image
                            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?auto=format&fit=crop&q=80&w=1920"
                            alt="Map of the Valencian Community showing our real estate expertise areas"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>

            {/* Audit Process (Steps) */}
            <section id="process-steps" className="py-24 bg-white">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl font-serif text-slate-900 mb-4">
                            {t('how_title')}
                        </h2>
                        <div className="w-24 h-1 bg-nolla-gold mx-auto rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

                        <Step
                            number="01"
                            title={t('how_1_title')}
                            description={t('how_1_desc')}
                        />
                        <Step
                            number="02"
                            title={t('how_2_title')}
                            description={t('how_2_desc')}
                        />
                        <Step
                            number="03"
                            title={t('how_3_title')}
                            description={t('how_3_desc')}
                        />
                    </div>
                </div>
            </section>




            {/* Testimonials */}
            <TestimonialsSection locale={locale} />

            {/* CTA Final */}
            <section id="cta-final" className="py-24 bg-nolla-blue text-white text-center">
                <div className="container mx-auto max-w-3xl space-y-6">
                    <h2 className="text-4xl font-bold font-serif">{t('cta_final_title')}</h2>
                    <p className="text-white/90 text-xl font-light">
                        {t('cta_final_desc')}
                    </p>
                    <Button variant="secondary" className="mt-8 bg-nolla-cream text-nolla-blue hover:bg-white font-bold px-10 py-6 text-lg rounded-none shadow-xl border-2 border-white/20" asChild>
                        <Link href={`/${locale}/services/audit`} aria-label={t('cta_final_btn')}>
                            {t('cta_final_btn')}
                        </Link>
                    </Button>
                </div>
            </section>
        </main>
    )
}

function ServiceCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <article className="group relative overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)] hover:shadow-nolla-gold/20 hover:-translate-y-1 hover:border-nolla-gold transition-all duration-300 rounded-xl">
            {/* Subtle Pattern Inside Card */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500"
                style={{
                    backgroundImage: "url('/images/pattern-nolla.png')",
                    backgroundSize: "200px",
                    backgroundRepeat: "repeat"
                }}
            />

            {/* Decorative Gold Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nolla-blue via-nolla-gold to-nolla-blue opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <CardHeader className="pt-8 text-center relative z-20">
                <div className="mx-auto h-16 w-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-nolla-blue group-hover:border-nolla-gold transition-all duration-500 shadow-sm">
                    <Icon className="h-8 w-8 text-nolla-blue group-hover:text-nolla-gold transition-colors duration-500" />
                </div>
                <CardTitle className="text-xl font-bold font-serif text-slate-800 group-hover:text-nolla-blue transition-colors">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-8 px-6 relative z-20">
                <CardDescription className="text-base text-slate-600 leading-relaxed font-normal group-hover:text-slate-700">
                    {description}
                </CardDescription>
            </CardContent>
        </article>
    )
}

function Stat({ number, label }: { number: string, label: string }) {
    return (
        <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-extrabold text-slate-900">{number}</div>
            <div className="text-sm font-medium text-nolla-blue uppercase tracking-wider">{label}</div>
        </div>
    )
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
    return (
        <article className="relative flex flex-col items-center text-center space-y-4 bg-white p-6 rounded-xl border border-slate-50 shadow-sm z-10">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-nolla-blue text-white text-2xl font-bold shadow-lg shadow-nolla-blue/20 mb-2">
                {number}
            </div>
            <h3 className="text-xl font-bold text-slate-900">{title}</h3>
            <p className="text-slate-600 leading-relaxed max-w-sm">
                {description}
            </p>
        </article>
    )
}
