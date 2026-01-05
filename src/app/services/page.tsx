import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ShieldCheck, Search, TrendingUp, Key } from "lucide-react"

export const metadata = {
    title: "Services | TESELA PROJECTS",
    description: "Comprehensive services for real estate investors in the Valencian Community.",
}

export default function ServicesPage() {
    return (
        <div className="min-h-screen py-20 bg-nolla-cream/10">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block p-2 px-4 rounded-full border border-nolla-blue/20 bg-nolla-blue/5 text-nolla-blue text-sm font-bold tracking-widest uppercase mb-4">
                        Our Expertise
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-serif text-nolla-blue">Comprehensive Solutions for Investors</h1>
                    <p className="text-xl text-slate-600 leading-relaxed font-light">
                        From search to profitability. We cover the entire lifecycle of your real estate investment in the Valencian Community.
                    </p>
                </div>

                <div className="grid gap-12">
                    {/* Service 1: Audit (Highlighted) */}
                    <div className="group relative overflow-hidden flex flex-col md:flex-row gap-8 items-center bg-white rounded-none p-8 md:p-12 border-2 border-nolla-blue/20 shadow-lg hover:shadow-2xl hover:border-nolla-blue/60 transition-all duration-500">
                        {/* Pattern Overlay */}
                        <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-10 transition-opacity bg-[url('/images/pattern-nolla.png')] bg-[length:300px] z-0" />

                        <div className="flex-1 space-y-6 relative z-10">
                            <div className="inline-flex p-4 rounded-none border-2 border-nolla-blue/10 bg-nolla-cream/50 text-nolla-blue">
                                <ShieldCheck className="h-8 w-8" />
                            </div>
                            <h2 className="text-3xl font-bold font-serif text-nolla-blue">Property Due Diligence Audit</h2>
                            <p className="text-lg text-slate-700 leading-relaxed font-light">
                                Our flagship service. Before making a deposit, we verify the land registry,
                                urban charges, community status, and hidden technical defects.
                            </p>
                            <ul className="space-y-3 text-slate-700 font-medium">
                                <li className="flex items-center gap-3"><span className="text-nolla-blue font-bold">✓</span> Administrative Check (Nota Simple)</li>
                                <li className="flex items-center gap-3"><span className="text-nolla-blue font-bold">✓</span> Debt Check (Community/Tax)</li>
                                <li className="flex items-center gap-3"><span className="text-nolla-blue font-bold">✓</span> Market Valuation (Big Data)</li>
                            </ul>
                            <Button size="lg" className="bg-nolla-blue hover:bg-nolla-blue/90 text-white rounded-none w-full sm:w-auto" asChild>
                                <Link href="/services/audit">Hire for 49€</Link>
                            </Button>
                        </div>
                        <div className="flex-1 w-full h-[350px] bg-slate-200 overflow-hidden shadow-inner border-4 border-nolla-cream relative z-20">
                            <div
                                className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2670&auto=format&fit=crop')" }}
                            />
                        </div>
                    </div>

                    {/* Service 2: Investment Advisory */}
                    <div className="group relative overflow-hidden flex flex-col md:flex-row-reverse gap-8 items-center bg-white rounded-none p-8 md:p-12 border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-nolla-blue transition-all duration-500">
                        <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-5 transition-opacity bg-[url('/images/pattern-nolla.png')] bg-[length:300px] z-0" />

                        <div className="flex-1 space-y-6 relative z-10">
                            <div className="inline-flex p-4 rounded-none border border-slate-200 bg-white text-nolla-blue">
                                <Search className="h-8 w-8" />
                            </div>
                            <h2 className="text-3xl font-bold font-serif text-slate-800 group-hover:text-nolla-blue transition-colors">Property Search & Selection</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-light">
                                It's not about buying a house; it's about finding the <em>perfect</em> property.
                                We analyze your budget and goals to find properties that fit your needs like a glove.
                            </p>
                            <Button variant="outline" size="lg" className="border-2 border-nolla-blue text-nolla-blue hover:bg-nolla-blue hover:text-white rounded-none w-full sm:w-auto" asChild>
                                <Link href="/contact">Define my Search Criteria</Link>
                            </Button>
                        </div>
                        <div className="flex-1 w-full h-[300px] bg-slate-200 overflow-hidden border-4 border-white shadow-sm relative z-20">
                            <div
                                className="w-full h-full bg-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                style={{
                                    backgroundImage: "url('/images/service-investment.jpg')",
                                    backgroundPosition: "center top"
                                }}
                            />
                        </div>
                    </div>

                    {/* Service 3: Renovation */}
                    <div className="group relative overflow-hidden flex flex-col md:flex-row gap-8 items-center bg-white rounded-none p-8 md:p-12 border-2 border-slate-200 shadow-md hover:shadow-xl hover:border-nolla-blue transition-all duration-500">
                        <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-5 transition-opacity bg-[url('/images/pattern-nolla.png')] bg-[length:300px] z-0" />

                        <div className="flex-1 space-y-6 relative z-10">
                            <div className="inline-flex p-4 rounded-none border border-slate-200 bg-white text-nolla-blue">
                                <TrendingUp className="h-8 w-8" />
                            </div>
                            <h2 className="text-3xl font-bold font-serif text-slate-800 group-hover:text-nolla-blue transition-colors">Renovation Project Management</h2>
                            <p className="text-lg text-slate-600 leading-relaxed font-light">
                                We are your boots on the ground. We don't build; we manage.
                                We identify the best local contractors, negotiate quotes, and supervise the work.
                            </p>
                            <Button variant="outline" size="lg" className="border-2 border-nolla-blue text-nolla-blue hover:bg-nolla-blue hover:text-white rounded-none w-full sm:w-auto" asChild>
                                <Link href="/contact">View Projects</Link>
                            </Button>
                        </div>
                        <div className="flex-1 w-full h-[300px] bg-slate-200 overflow-hidden border-4 border-white shadow-sm relative z-20">
                            <div
                                className="w-full h-full bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop')" }}
                            />
                        </div>
                    </div>

                    {/* Service 4: Rental Management */}
                    <div className="group relative overflow-hidden flex flex-col md:flex-row-reverse gap-8 items-center bg-nolla-blue text-white rounded-none p-8 md:p-12 shadow-2xl border-4 border-nolla-blue">
                        <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-nolla.png')] bg-repeat bg-[length:200px] z-0" />

                        <div className="flex-1 space-y-6 relative z-10">
                            <div className="inline-flex p-4 rounded-none border-2 border-white/20 bg-white/10 text-nolla-cream backdrop-blur-sm">
                                <Key className="h-8 w-8" />
                            </div>
                            <h2 className="text-3xl font-bold font-serif text-nolla-cream">Comprehensive Rental Management</h2>
                            <p className="text-lg text-blue-100 leading-relaxed font-light">
                                The "Full Pack". Once bought and renovated, we don't leave you alone.
                                We find the perfect tenant, manage contracts, and handle monthly payments.
                            </p>
                            <Button size="lg" className="bg-nolla-cream text-nolla-blue hover:bg-white border-0 shadow-lg rounded-none w-full sm:w-auto font-bold" asChild>
                                <Link href="/contact">Manage my Property</Link>
                            </Button>
                        </div>
                        <div className="flex-1 w-full h-[300px] bg-nolla-blue/50 overflow-hidden border-4 border-white/10 shadow-inner relative z-20">
                            <div
                                className="w-full h-full bg-cover bg-center opacity-80 mix-blend-overlay"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=2574&auto=format&fit=crop')" }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
