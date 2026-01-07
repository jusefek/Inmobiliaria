
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { Check, X, ShieldCheck, Search, Hammer, Key, Languages } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;

    const t = await getTranslations({ locale, namespace: 'services_page' });
    const tHome = await getTranslations({ locale, namespace: 'home' });

    return (
        <div className="flex flex-col min-h-screen font-sans">
            <main className="flex-1">
                {/* Hero Section */}
                <div className="bg-slate-900 py-32 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('/images/pattern-nolla.png')] bg-repeat bg-[length:200px]" />
                    <div className="container px-4 text-center relative z-10">
                        <span className="inline-block py-1 px-3 rounded-full bg-nolla-blue/20 text-nolla-blue text-sm font-semibold mb-6 border border-nolla-blue/30 backdrop-blur-sm">
                            TESELA PROJECTS
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold font-serif text-white mb-6 animate-fade-in-up">
                            {t('hero_title')}
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                            {t('hero_desc')}
                        </p>
                    </div>
                </div>

                {/* Expat Services Grid (Replicated from Home) */}
                <section id="services-grid" className="py-20 bg-slate-50">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16 space-y-2">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                                {tHome('value_prop_title')}
                            </h2>
                            <p className="text-slate-600 max-w-2xl mx-auto">
                                {tHome('value_prop_desc')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <ServiceCard
                                icon={Search}
                                title={tHome('service_1_title')}
                                description={tHome('service_1_desc')}
                            />
                            <ServiceCard
                                icon={Hammer}
                                title={tHome('service_2_title')}
                                description={tHome('service_2_desc')}
                            />
                            <ServiceCard
                                icon={Key}
                                title={tHome('service_3_title')}
                                description={tHome('service_3_desc')}
                            />
                            <ServiceCard
                                icon={Languages}
                                title={tHome('service_4_title')}
                                description={tHome('service_4_desc')}
                            />
                        </div>
                    </div>
                </section>

                {/* Comparison Section */}
                <section className="py-24 bg-white">
                    <div className="container px-4 md:px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold font-serif text-slate-900">{t('comp_title')}</h2>
                        </div>

                        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden">
                            <div className="grid grid-cols-3 bg-slate-50 p-6 border-b border-slate-200">
                                <div className="text-sm font-semibold text-slate-400 uppercase tracking-widest pt-2">Comparison</div>
                                <div className="text-center font-bold text-slate-500 text-lg">{t('comp_blind')}</div>
                                <div className="text-center font-bold text-nolla-blue text-lg flex items-center justify-center gap-2">
                                    <ShieldCheck className="w-5 h-5" /> {t('comp_audit')}
                                </div>
                            </div>

                            <div className="divide-y divide-slate-100">
                                <ComparisonRow label={t('comp_r1_label')} no />
                                <ComparisonRow label={t('comp_r2_label')} no />
                                <ComparisonRow label={t('comp_r3_label')} no />
                                <ComparisonRow label={t('comp_r4_label')} no />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pricing / CTA Section */}
                <section className="py-24 bg-slate-50 border-t border-slate-200">
                    <div className="container px-4 text-center">
                        <div className="max-w-lg mx-auto bg-slate-900 rounded-3xl p-10 md:p-14 text-white shadow-2xl relative overflow-hidden group hover:scale-105 transition-transform duration-500">
                            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <ShieldCheck className="w-48 h-48 -mr-10 -mt-10" />
                            </div>

                            <h3 className="text-2xl font-serif font-bold mb-2 text-slate-200">{t('pricing_title')}</h3>
                            <div className="text-6xl font-bold text-nolla-cream mb-6 font-serif">
                                49€
                            </div>
                            <p className="text-slate-400 mb-8 border-b border-slate-700 pb-8">
                                One-time fee. Delivery in 24 hours.
                            </p>

                            <Button asChild size="lg" className="w-full bg-nolla-blue hover:bg-nolla-blue/90 text-white font-bold h-14 text-lg shadow-lg shadow-nolla-blue/25">
                                <Link href={`/${locale}/services/audit/checkout`}>
                                    {t('pricing_cta')}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

        </div>
    )
}

function ComparisonRow({ label, no = false }: { label: string, no?: boolean }) {
    return (
        <div className="grid grid-cols-3 p-6 items-center hover:bg-slate-50/50 transition-colors">
            <div className="font-medium text-slate-700">{label}</div>
            <div className="flex justify-center">
                {no ? <X className="text-red-300 w-6 h-6" /> : <Check className="text-green-500 w-6 h-6" />}
            </div>
            <div className="flex justify-center">
                <Check className="text-nolla-blue w-6 h-6 drop-shadow-sm" />
            </div>
        </div>
    )
}

function ServiceCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <article className="flex flex-col items-center text-center p-8 rounded-xl bg-white shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 group">
            <div className="h-16 w-16 rounded-full bg-slate-50 flex items-center justify-center mb-6 group-hover:bg-nolla-blue/5 transition-colors duration-300">
                <Icon className="h-8 w-8 text-slate-700 group-hover:text-nolla-blue transition-colors duration-300" strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">{title}</h3>
            <p className="text-slate-600 leading-relaxed text-sm">
                {description}
            </p>
        </article>
    )
}
