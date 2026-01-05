'use client'

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Home, ShieldCheck, Newspaper } from "lucide-react"

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    const navItems = [
        { name: "Home", href: "/", icon: Home },
        { name: "Services", href: "/services", icon: ShieldCheck },
        { name: "Blog", href: "/blog", icon: Newspaper },
        { name: "Contact", href: "/contact", icon: Home },
    ]

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <span className="text-xl font-bold tracking-tight text-primary">TESELA PROJECTS</span>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "transition-colors hover:text-foreground/80",
                                pathname === item.href ? "text-foreground" : "text-foreground/60"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Auth Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <Button variant="ghost" className="text-slate-600 hover:text-nolla-blue" asChild>
                        <Link href="/login">Client Access</Link>
                    </Button>
                    <Button asChild className="bg-nolla-blue hover:bg-nolla-blue/90 text-white shadow-md">
                        <Link href="/services/audit">Property Audit</Link>
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="flex items-center p-2 md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden border-t p-4 space-y-4 bg-background">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="flex items-center space-x-2 text-sm font-medium p-2 hover:bg-muted rounded-md"
                        >
                            <item.icon className="h-4 w-4" />
                            <span>{item.name}</span>
                        </Link>
                    ))}
                    <div className="pt-4 border-t space-y-2">
                        <Button variant="outline" className="w-full justify-start" asChild>
                            <Link href="/login">Client Access</Link>
                        </Button>
                        <Button className="w-full justify-start bg-nolla-blue hover:bg-nolla-blue/90 text-white" asChild>
                            <Link href="/services/anti-scam">Property Audit</Link>
                        </Button>
                    </div>
                </div>
            )}
        </header>
    )
}
