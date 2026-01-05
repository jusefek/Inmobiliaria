import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Search, TrendingUp, MapPin, Key } from "lucide-react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function Home() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden bg-nolla-cream/20">
                {/* Nolla Pattern Background with Overlay */}
                <div
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                        backgroundImage: "url('/images/pattern-nolla.png')",
                        backgroundSize: "400px",
                        backgroundRepeat: "repeat"
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/50 to-background z-0" />

                <div className="container px-4 md:px-6 relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full border border-nolla-blue/30 bg-nolla-blue/10 px-3 py-1 text-sm font-medium text-nolla-blue backdrop-blur-sm mb-4">
                        <span className="flex h-2 w-2 rounded-full bg-nolla-blue mr-2 animate-pulse"></span>
                        Valencian Community Leaders
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-slate-900 font-serif">
                        Invest in Valencia with <span className="italic text-nolla-blue">Peace of Mind</span>.
                    </h1>
                    <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto mt-4">
                        Your Local Partner for the entire journey. From finding the perfect property to managing the tenants. We handle everything.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-10">
                        <Button size="lg" className="bg-nolla-blue hover:bg-nolla-blue/90 text-white font-serif tracking-wide px-10 h-14 text-lg w-full sm:w-auto shadow-xl shadow-nolla-blue/20 rounded-none border-2 border-nolla-blue" asChild>
                            <Link href="/services/audit">
                                <ShieldCheck className="mr-2 h-5 w-5" />
                                Start with an Audit
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="text-slate-700 border-2 border-slate-300 hover:bg-nolla-blue hover:text-white hover:border-nolla-blue font-serif tracking-wide px-10 h-14 text-lg w-full sm:w-auto rounded-none transition-all" asChild>
                            <Link href="/services">Explore Services</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6">
                    <div className="text-center mb-16 space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                            More than a Real Estate Agency. Your Local Partner.
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Tailored services for international investors seeking profitability without headaches.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <ServiceCard
                            icon={ShieldCheck}
                            title="Administrative & Technical Check"
                            description="We review land registry, debts, hidden defects, and urban regulations. Don't buy problems."
                        />
                        <ServiceCard
                            icon={Search}
                            title="Property Search & Selection"
                            description="We don't just find houses. We analyze your needs and budget to find the property that fits your buying criteria."
                        />
                        <ServiceCard
                            icon={TrendingUp}
                            title="Renovation Management"
                            description="We connect you with trusted local contractors and manage the project. We find the solutions; you get the results."
                        />
                        <ServiceCard
                            icon={Key}
                            title="Rental Management"
                            description="The Full Pack. We find the perfect tenant, handle contracts, and manage monthly payments for you."
                        />
                    </div>
                </div>
            </section>

            {/* Stats / Trust */}
            <section className="py-20 border-y bg-white">
                <div className="container text-center">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <Stat number="150+" label="Audited Deals" />
                        <Stat number="12M€" label="Managed Volume" />
                        <Stat number="100%" label="Safe Purchases" />
                        <Stat number="100%" label="Happy Clients" />
                    </div>
                </div>
            </section>

            {/* City Section (SEO) */}
            <section className="py-24 bg-nolla-blue text-white overflow-hidden relative">
                {/* Overlay Pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-nolla.png')] bg-repeat bg-[length:200px]" />

                <div className="container flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl font-bold font-serif text-nolla-cream">Experts in the Valencian Community</h2>
                        <p className="text-blue-50 text-xl leading-relaxed font-light">
                            We know every corner. From the Costa Blanca to Castellón.
                            We identify areas with high potential and where the regulatory traps are.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm text-lg">
                                <MapPin className="text-nolla-cream h-6 w-6" />
                                <span>Stressed Zone Analysis (Housing Law).</span>
                            </li>
                            <li className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm text-lg">
                                <MapPin className="text-nolla-cream h-6 w-6" />
                                <span>Tourist License Expertise.</span>
                            </li>
                            <li className="flex items-center gap-4 bg-white/5 p-4 rounded-lg border border-white/10 backdrop-blur-sm text-lg">
                                <MapPin className="text-nolla-cream h-6 w-6" />
                                <span>Local Network (Notaries, Contractors).</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 relative h-[500px] w-full rounded-tr-[50px] rounded-bl-[50px] overflow-hidden shadow-2xl border-4 border-nolla-cream/20">
                        <div
                            className="absolute inset-0 bg-cover"
                            style={{
                                backgroundImage: "url('/images/home-experts.jpg')",
                                backgroundPosition: "25% center" // Adjusted to 25% to ensure right watermark is cut
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="py-24 bg-nolla-blue text-white text-center">
                <div className="container max-w-3xl space-y-6">
                    <h2 className="text-4xl font-bold font-serif">Ready to purchase safely?</h2>
                    <p className="text-white/90 text-xl font-light">
                        Try our flagship service. For only 49€ we audit the property you are interested in. No strings attached.
                    </p>
                    <Button size="lg" variant="secondary" className="mt-8 bg-nolla-cream text-nolla-blue hover:bg-white font-bold px-10 py-6 text-lg rounded-none shadow-xl border-2 border-white/20" asChild>
                        <Link href="/services/audit">
                            Start Audit Now
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}

function ServiceCard({ icon: Icon, title, description }: { icon: any, title: string, description: string }) {
    return (
        <Card className="group relative overflow-hidden border-2 border-nolla-blue/20 bg-nolla-cream/30 shadow-md hover:shadow-2xl hover:border-nolla-blue transition-all duration-500 rounded-none">
            {/* Subtle Pattern Inside Card */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05] group-hover:opacity-10 transition-opacity duration-500"
                style={{
                    backgroundImage: "url('/images/pattern-nolla.png')",
                    backgroundSize: "200px",
                    backgroundRepeat: "repeat"
                }}
            />

            {/* Decorative Corner Triangles (Nolla Detail) */}
            <div className="absolute top-0 right-0 h-12 w-12 bg-nolla-blue/10 -translate-y-6 translate-x-6 rotate-45 transform group-hover:bg-nolla-blue/80 transition-colors duration-500 z-10" />
            <div className="absolute bottom-0 left-0 h-12 w-12 bg-nolla-blue/10 translate-y-6 -translate-x-6 rotate-45 transform group-hover:bg-nolla-blue/80 transition-colors duration-500 z-10" />

            <CardHeader className="pt-10 text-center relative z-20">
                <div className="mx-auto h-20 w-20 rounded-full border-4 border-white bg-nolla-cream flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:border-nolla-blue/30">
                    <Icon className="h-8 w-8 text-nolla-blue" />
                </div>
                <CardTitle className="text-2xl font-serif text-slate-900 group-hover:text-nolla-blue transition-colors">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center pb-10 px-8 relative z-20">
                <CardDescription className="text-lg text-slate-700 leading-relaxed font-normal">
                    {description}
                </CardDescription>
            </CardContent>
        </Card>
    )
}

function Stat({ number, label }: { number: string, label: string }) {
    return (
        <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-extrabold text-slate-900">{number}</div>
            <div className="text-sm font-medium text-emerald-600 uppercase tracking-wider">{label}</div>
        </div>
    )
}
