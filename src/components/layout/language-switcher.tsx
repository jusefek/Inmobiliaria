"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

const locales = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'de', label: 'Deutsch' },
    { code: 'nl', label: 'Nederlands' },
    { code: 'sv', label: 'Svenska' },
    { code: 'no', label: 'Norsk' },
    { code: 'da', label: 'Dansk' },
    { code: 'pl', label: 'Polski' },
    { code: 'fr', label: 'Français' },
    { code: 'it', label: 'Italiano' },
    { code: 'ru', label: 'Русский' },
]

export function LanguageSwitcher() {
    const pathname = usePathname()
    const router = useRouter()

    // Extract current locale from pathname (e.g. /en/services -> en)
    const currentLocale = pathname?.split('/')[1] || 'en'

    const handleLocaleChange = (newLocale: string) => {
        // Replace the locale segment in the URL
        const segments = pathname.split('/')
        segments[1] = newLocale
        const newPath = segments.join('/')
        router.push(newPath)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="w-9 px-0">
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {locales.map((locale) => (
                    <DropdownMenuItem
                        key={locale.code}
                        onClick={() => handleLocaleChange(locale.code)}
                        className={currentLocale === locale.code ? "bg-slate-100 font-bold" : ""}
                    >
                        {locale.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
