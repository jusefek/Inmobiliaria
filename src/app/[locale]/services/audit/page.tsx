import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { ShieldCheck, Search, FileCheck, CheckCircle2, TrendingUp, AlertTriangle, Scale, ArrowRight } from "lucide-react";
import { StickyCTA } from "@/components/marketing/sticky-cta";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { TrustBar } from "@/components/marketing/trust-bar";
import { SchemaOrg } from "@/components/seo/schema-org";
import { locales, Locale } from "@/data/locations";
import { constructMetadata } from "@/lib/metadata";
import { getTranslations } from "next-intl/server";

// Static Params for this page (generates /en/services/audit, /de/services/audit, etc.)
export function generateStaticParams() {
    return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    return constructMetadata({
        title: locale === 'de' ? 'Immobiliencheck Spanien | TESELA PROJECTS' : 'Property Due Diligence Audit | TESELA PROJECTS',
        description: locale === 'de'
            ? 'Vermeiden Sie Risiken beim Immobilienkauf in Spanien. Wir prüfen Schulden, Lizenzen und Legalität in 24h.'
            : 'Express property audit in Spain. We detect hidden debts, illegal tenants, and overpricing in 24 hours.',
        locale: locale as any,
        canonical: `https://teselaprojects.com/${locale}/services/audit`
    })
}

export default async function AuditPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: 'audit_page' });
    const tNav = await getTranslations({ locale, namespace: 'nav' });

    const faqData = [
        {
            question: locale === 'de' ? "Ist es sicher, ohne Prüfung zu kaufen?" : "Is it safe to buy a property without checking it?",
            answer: locale === 'de'
                ? "Nein. In Spanien gehen Schulden auf das Haus über, nicht auf den Besitzer. Unser Check schützt Sie."
                : "No. In Spain, debts follow the property, not the owner. Using our audit prevents you from inheriting hidden costs."
        },
        {
            question: locale === 'de' ? "Muss ich Eigentümer sein?" : "Do I need to be the owner to request the report?",
            answer: locale === 'de'
                ? "Nein. Sie brauchen nur den Link zum Inserat (Idealista, etc.). Wir prüfen mit öffentlichen Daten."
                : "No. You only need the public URL of the ad (Idealista, Fotocasa, etc.). We investigate using open data and official registries."
        },
        {
            question: locale === 'de' ? "Was, wenn es schon verkauft ist?" : "What happens if the property is already sold?",
            answer: locale === 'de'
                ? "Wenn es nicht mehr verfügbar ist, sagen wir Ihnen Bescheid. Sie behalten Ihr Guthaben für die nächste Immobilie."
                : "If the property is off the market, we notify you immediately. You can use your credit for another analysis at no extra cost."
        }
    ];

    const combinedSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Product",
                "name": "Express Property Due Diligence Audit",
                "image": "https://teselaprojects.com/images/audit-service.jpg",
                "description": "Comprehensive legal and urban analysis of any property in the Valencian Community in less than 24 hours.",
                "brand": {
                    "@type": "Brand",
                    "name": "TESELA PROJECTS"
                },
                "offers": {
                    "@type": "Offer",
                    "url": "https://teselaprojects.com/services/audit",
                    "priceCurrency": "EUR",
                    "price": "49.00",
                    "priceValidUntil": "2025-12-31",
                    "availability": "https://schema.org/InStock"
                },
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "150"
                }
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://teselaprojects.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Services",
                        "item": "https://teselaprojects.com/services"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Property Audit",
                        "item": "https://teselaprojects.com/services/audit"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "mainEntity": faqData.map(item => ({
                    "@type": "Question",
                    "name": item.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": item.answer
                    }
                }))
            }
        ]
    };

    return (
        <div className="flex flex-col min-h-screen">
            <SchemaOrg schema={combinedSchema} />

            {/* Breadcrumbs Visual (Simple) */}
            <nav aria-label="Breadcrumb" className="bg-slate-50 py-3 text-sm text-slate-500">
                <div className="container">
                    <ol className="flex items-center space-x-2">
                        <li><Link href={`/${locale}`} className="hover:text-nolla-blue">{tNav('home')}</Link></li>
                        <li>/</li>
                        <li><Link href={`/${locale}/services`} className="hover:text-nolla-blue">{tNav('services')}</Link></li>
                        <li>/</li>
                        <li className="font-medium text-slate-900" aria-current="page">{tNav('audit')}</li>
                    </ol>
                </div>
            </nav>

            {/* 1. HERO SECTION */}
            <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32 overflow-hidden">
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-8">
                            <div className="inline-flex items-center rounded-sm bg-nolla-blue/10 px-3 py-1 text-sm font-medium text-nolla-blue backdrop-blur-sm border border-nolla-blue/20">
                                <ShieldCheck className="mr-2 h-4 w-4" />
                                {t('hero_badge')}
                            </div>
                            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 font-serif leading-tight">
                                {t('hero_title_1')}
                                <br />
                                <span className="text-nolla-blue">
                                    {t('hero_title_2')}
                                </span>
                            </h1>
                            <p className="text-lg text-slate-600 leading-relaxed max-w-lg">
                                {t('hero_desc')}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-nolla-blue/20 bg-nolla-blue hover:bg-nolla-blue/90 text-white" asChild aria-label="Start your property audit for 49 euros">
                                    <Link href={`/${locale}/services/audit/checkout`}>
                                        {t('cta_primary')}
                                    </Link>
                                </Button>
                                <Button size="lg" variant="outline" className="h-14 px-8 text-lg w-full sm:w-auto" asChild>
                                    <Link href="#how-it-works">
                                        {t('cta_secondary')}
                                    </Link>
                                </Button>
                            </div>

                            <TrustBar />
                        </div>

                        <div className="relative">
                            <div className="relative bg-white p-2 rounded-[30px] shadow-2xl">
                                <Image
                                    src="/images/audit-team-final.jpg"
                                    alt="Property Audit Team"
                                    width={600}
                                    height={800}
                                    className="rounded-[25px] border border-slate-100 object-cover h-[500px] w-full"
                                    priority
                                />
                                {/* Floating Badge */}
                                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce-slow">
                                    <div className="bg-green-100 p-2 rounded-full">
                                        <CheckCircle2 className="h-6 w-6 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-slate-900">100% Online</p>
                                        <p className="text-xs text-slate-500">No visits needed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. THE PROBLEM */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">{t('problem_title')}</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            {t('problem_desc')}
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ProblemCard
                            icon={<AlertTriangle className="h-10 w-10 text-amber-500" />}
                            title={t('problem_1_title')}
                            description={t('problem_1_desc')}
                        />
                        <ProblemCard
                            icon={<Scale className="h-10 w-10 text-red-500" />}
                            title={t('problem_2_title')}
                            description={t('problem_2_desc')}
                        />
                        <ProblemCard
                            icon={<TrendingUp className="h-10 w-10 text-blue-500" />}
                            title={t('problem_3_title')}
                            description={t('problem_3_desc')}
                        />
                    </div>
                </div>
            </section>

            {/* 3. THE SOLUTION */}
            <section className="py-20" id="how-it-works">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight">{t('how_title')}</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 text-center">
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

            {/* 6. FINAL CTA */}
            <section className="py-20 bg-nolla-cream/30 text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">{t('cta_final_title')}</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        {t('cta_final_desc')}
                    </p>
                    <Button size="lg" className="px-12 text-lg bg-nolla-blue hover:bg-nolla-blue/90 text-white" asChild aria-label="Get instant peace of mind for 49 euros">
                        <Link href={`/${locale}/services/audit/checkout`}>
                            {t('cta_final_btn')}
                        </Link>
                    </Button>
                </div>
            </section>

            {/* 7. RELATED INSIGHTS (Internal Linking) */}
            <section className="py-20 border-t bg-white">
                <div className="container">
                    <h2 className="text-2xl font-bold mb-8">Related Insights for Investors</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Placeholder Links for future content */}
                        <div className="group cursor-pointer">
                            <div className="h-48 bg-slate-100 rounded-lg mb-4 overflow-hidden relative">
                                <span className="absolute top-4 left-4 bg-white/90 px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-sm text-slate-900">Guide</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 group-hover:text-nolla-blue transition-colors">How to obtain a Tourist License in Valencia (2025)</h3>
                            <div className="flex items-center text-sm text-nolla-blue font-medium mt-2">
                                Read Article <ArrowRight className="ml-1 h-4 w-4" />
                            </div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="h-48 bg-slate-100 rounded-lg mb-4 overflow-hidden relative">
                                <span className="absolute top-4 left-4 bg-white/90 px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-sm text-slate-900">Market</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 group-hover:text-nolla-blue transition-colors">The most profitable neighborhoods in Alicante</h3>
                            <div className="flex items-center text-sm text-nolla-blue font-medium mt-2">
                                Read Article <ArrowRight className="ml-1 h-4 w-4" />
                            </div>
                        </div>
                        <div className="group cursor-pointer">
                            <div className="h-48 bg-slate-100 rounded-lg mb-4 overflow-hidden relative">
                                <span className="absolute top-4 left-4 bg-white/90 px-2 py-1 text-xs font-bold uppercase tracking-wider rounded-sm text-slate-900">Legal</span>
                            </div>
                            <h3 className="font-bold text-lg mb-2 group-hover:text-nolla-blue transition-colors">Hidden defects: What to check before signing</h3>
                            <div className="flex items-center text-sm text-nolla-blue font-medium mt-2">
                                Read Article <ArrowRight className="ml-1 h-4 w-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <StickyCTA />
        </div>
    )
}

function ProblemCard({ icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
            <div className="bg-slate-50 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-slate-600 leading-relaxed">
                {description}
            </p>
        </div>
    )
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
    return (
        <div className="relative p-6">
            <div className="text-6xl font-black text-slate-100 absolute top-0 left-1/2 -translate-x-1/2 -z-10 select-none">
                {number}
            </div>
            <h3 className="text-xl font-bold mt-8 mb-4">{title}</h3>
            <p className="text-slate-600">
                {description}
            </p>
        </div>
    )
}
