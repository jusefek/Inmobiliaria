"use client"

import Link from "next/link";
import { ShieldCheck, Mail, MapPin, Phone } from "lucide-react";
import { usePathname } from "next/navigation";
import { locations } from "@/data/locations";
import { useTranslations, useLocale } from "next-intl";

export function Footer() {
    const pathname = usePathname()
    const currentLocale = useLocale();
    const t = useTranslations('footer');
    const tNav = useTranslations('nav');
    const getPath = (path: string) => `/${currentLocale}${path}`

    return (
        <footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800 font-sans">
            {/* Pattern Overlay */}
            <div
                className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: "url('/images/pattern-nolla.png')",
                    backgroundSize: "300px",
                    backgroundRepeat: "repeat"
                }}
            />
            <div className="container relative z-10 px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="space-y-4">
                        <Link href={getPath('/')} className="flex items-center space-x-2">
                            <span className="text-xl font-bold tracking-tight text-white mb-2 block">TESELA PROJECTS</span>
                        </Link>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            {t('brand_desc')}
                        </p>
                    </div>
                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">{t('quick_links_title')}</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href={getPath('/')} className="hover:text-nolla-cream transition-colors">{t('link_home')}</Link></li>
                            <li><Link href={getPath('/services')} className="hover:text-nolla-cream transition-colors">{t('link_services')}</Link></li>
                            <li><Link href={getPath('/blog')} className="hover:text-nolla-cream transition-colors">{tNav('blog')}</Link></li>
                            <li><Link href={getPath('/services/audit')} className="hover:text-nolla-cream transition-colors">{t('link_audit')}</Link></li>
                            <li><Link href={getPath('/contact')} className="hover:text-nolla-cream transition-colors">{t('link_contact')}</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Local Expertise (Dynamic) */}
                    <div>
                        <h4 className="text-white font-bold mb-6 tracking-wide">{t('local_experts_title')}</h4>
                        <ul className="space-y-3 text-sm">
                            {locations.slice(0, 5).map(loc => {
                                // Try to get loc title in current locale, fallback to 'en' or first available
                                const localeData = (loc.locales as any)[currentLocale] || (loc.locales as any)['en'];
                                return (
                                    <li key={loc.slug}>
                                        <Link href={`/${currentLocale}/services/audit/${loc.slug}`} className="hover:text-nolla-cream transition-colors flex items-center gap-2 group">
                                            <span className="h-1.5 w-1.5 bg-nolla-blue rounded-full group-hover:bg-nolla-cream transition-colors"></span>
                                            {t('audit_in')} {localeData?.title?.replace("Audit in ", "") || loc.slug}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                </div>
                <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500 font-light">
                    © {new Date().getFullYear()} TESELA PROJECTS. {t('copyright')}
                </div>
            </div>
        </footer>
    )
}
