"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero section (approx 500px)
            const show = window.scrollY > 500
            setIsVisible(show)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className={cn(
            "fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur border-t border-nolla-blue/10 z-[100] md:hidden transition-transform duration-300 transform",
            isVisible ? "translate-y-0" : "translate-y-full"
        )}>
            <div className="flex items-center gap-4">
                <div className="flex-1">
                    <p className="text-[10px] text-slate-500 mb-0.5 leading-tight">
                        Report in EN/ES. <span className="font-semibold text-nolla-blue">Support for EU/Nordic clients.</span>
                    </p>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-extrabold text-slate-900">49€</span>
                        <span className="text-sm text-slate-400 line-through">99€</span>
                    </div>
                </div>
                <Button size="lg" className="bg-nolla-blue hover:bg-nolla-blue/90 text-white shadow-lg px-6" asChild aria-label="Secure your investment now for 49 euros">
                    <Link href="/services/audit/checkout">
                        <ShieldCheck className="mr-2 h-4 w-4" />
                        Audit Now
                    </Link>
                </Button>
            </div>
        </div>
    )
}
