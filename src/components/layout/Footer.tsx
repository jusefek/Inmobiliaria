import Link from "next/link"
import { ShieldCheck, Mail, MapPin } from "lucide-react"

export function Footer() {
    return (
        <footer className="relative border-t bg-nolla-cream/30 pt-16 pb-8 overflow-hidden">
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
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold tracking-tight text-nolla-blue">TESELA PROJECTS</span>
                        </Link>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Protecting your real estate investment in the Valencian Community. Risk detection and comprehensive management experts.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-nolla-blue">Services</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><Link href="/services/audit" className="hover:text-nolla-blue transition-colors">Property Audit</Link></li>
                            <li><Link href="/services" className="hover:text-nolla-blue transition-colors">Property Search</Link></li>
                            <li><Link href="/services" className="hover:text-nolla-blue transition-colors">Administrative Check</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-nolla-blue">Company</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><Link href="/about" className="hover:text-nolla-blue transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-nolla-blue transition-colors">Real Estate Blog</Link></li>
                            <li><Link href="/contact" className="hover:text-nolla-blue transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-nolla-blue">Legal</h3>
                        <ul className="space-y-3 text-sm text-slate-600">
                            <li><Link href="/privacy" className="hover:text-nolla-blue transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-nolla-blue transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="pt-8 border-t border-nolla-blue/10 text-center text-xs text-slate-500">
                    © {new Date().getFullYear()} TESELA PROJECTS. All rights reserved.
                </div>
            </div>
        </footer>
    )
}
