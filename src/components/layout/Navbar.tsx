'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, ShieldCheck, Newspaper } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useTranslations } from 'next-intl'

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)
    const pathname = usePathname()
    const t = useTranslations('nav')

    // Get current locale from pathname
    const currentLocale = pathname?.split('/')[1] || 'en'
    const getPath = (path: string) => `/${currentLocale}${path}`

    return (
        <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-20 items-center justify-between">
                <span className="text-xl font-bold font-sans tracking-widest text-primary ml-4 md:ml-8">TESELA PROJECTS</span>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-6 items-center">
                    <Link href={getPath('/')} className="text-sm font-medium transition-colors hover:text-nolla-blue">{t('home')}</Link>
                    <Link href={getPath('/services')} className="text-sm font-medium transition-colors hover:text-nolla-blue">{t('services')}</Link>
                    <Link href={getPath('/blog')} className="text-sm font-medium transition-colors hover:text-nolla-blue">{t('blog')}</Link>
                    <Link href={getPath('/contact')} className="text-sm font-medium transition-colors hover:text-nolla-blue">{t('contact')}</Link>
                    <LanguageSwitcher />
                    <Button className="bg-nolla-blue hover:bg-nolla-blue/90 text-white shadow-md transition-all hover:scale-105" asChild>
                        <Link href={getPath('/services/audit')}>
                            <ShieldCheck className="mr-2 h-4 w-4" />
                            {t('audit')}
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="flex items-center p-2 md:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isMenuOpen && (
                <div className="md:hidden border-t border-white/10 p-4 space-y-4 shadow-lg absolute w-full left-0 bg-nolla-blue text-white">
                    <div className="flex flex-col space-y-4">
                        <Link href={getPath('/')} onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 text-sm font-medium p-2 hover:bg-white/10 rounded-md">
                            <Home className="h-4 w-4 text-nolla-gold" />
                            <span>{t('home')}</span>
                        </Link>
                        <Link href={getPath('/services')} onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 text-sm font-medium p-2 hover:bg-white/10 rounded-md">
                            <ShieldCheck className="h-4 w-4 text-nolla-gold" />
                            <span>{t('services')}</span>
                        </Link>
                        <Link href={getPath('/blog')} onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 text-sm font-medium p-2 hover:bg-white/10 rounded-md">
                            <Newspaper className="h-4 w-4 text-nolla-gold" />
                            <span>{t('blog')}</span>
                        </Link>
                        <Link href={getPath('/contact')} onClick={() => setIsMenuOpen(false)} className="flex items-center space-x-2 text-sm font-medium p-2 hover:bg-white/10 rounded-md">
                            <Newspaper className="h-4 w-4 text-nolla-gold" />
                            <span>{t('contact')}</span>
                        </Link>
                        <div className="pt-2">
                            <LanguageSwitcher />
                        </div>
                    </div>
                    <div className="pt-4 border-t border-white/10 space-y-2">
                        <Button className="w-full justify-start bg-nolla-blue hover:bg-nolla-blue/90 text-white border border-white/20" asChild>
                            <Link href={getPath('/services/audit')}>
                                <ShieldCheck className="mr-2 h-4 w-4" />
                                {t('audit')}
                            </Link>
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    )
}
