import { ShieldCheck, Search, FileCheck, CheckCircle2, TrendingUp, AlertTriangle, Scale } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata = {
    title: 'Property Due Diligence Audit | TESELA PROJECTS',
    description: 'Express property audit in the Valencian Community. We detect hidden debts, illegal tenants, and overpricing in 24 hours.',
}

export default function AuditPage() {
    return (
        <div className="flex flex-col min-h-screen">

            {/* 1. HERO SECTION */}
            <section className="relative bg-gradient-to-b from-slate-50 to-white py-20 lg:py-32 overflow-hidden">
                <div className="container relative z-10 text-center">
                    <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium text-emerald-600 bg-emerald-50 mb-6">
                        <ShieldCheck className="mr-2 h-4 w-4" />
                        Express Service 24h
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6 text-slate-900">
                        Buying property in Spain?<br />
                        <span className="text-emerald-600">Don't buy blindly.</span>
                    </h1>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
                        We analyze any property in 24h to detect hidden debts, inflated prices, or legal issues.
                        <strong> 30% of online listings</strong> have hidden defects.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button size="lg" className="h-14 px-8 text-lg w-full sm:w-auto shadow-xl shadow-emerald-600/20 bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                            <Link href="/login?redirect=/dashboard/new-request">
                                Audit my property now
                            </Link>
                        </Button>
                        <span className="text-sm text-muted-foreground">
                            From only 49€ (Limited Offer)
                        </span>
                    </div>
                    <p className="mt-8 text-sm text-slate-500 flex items-center justify-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                        Over 500 buyers protected this year
                    </p>
                </div>
            </section>

            {/* ... (Sections 2 and 3 omitted for brevity in search, focusing on target block) ... */}
            {/* The tool requires contiguous block, so I will target the Hero section specifically first, then Pricing separately if too far apart. Actually, I'll do MultiReplace for this file. */}

            {/* 2. THE PROBLEM */}
            <section className="py-20 bg-slate-50">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight mb-4">What real estate portals WON'T tell you</h2>
                        <p className="text-muted-foreground max-w-xl mx-auto">
                            Idealista and Fotocasa are just advertising showcases. They don't verify legality. We do.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <ProblemCard
                            icon={<AlertTriangle className="h-10 w-10 text-amber-500" />}
                            title="Fake Licenses"
                            description="Apartments sold as 'Airbnb' distincts that actually have tourist activity banned by the community."
                        />
                        <ProblemCard
                            icon={<Scale className="h-10 w-10 text-red-500" />}
                            title="Hidden Debts"
                            description="Old mortgages, seizures, or pending community spillover costs that you inherit upon signing."
                        />
                        <ProblemCard
                            icon={<TrendingUp className="h-10 w-10 text-blue-500" />}
                            title="Absurd Overpricing"
                            description="Properties for sale 40% above the real market price for that specific street."
                        />
                    </div>
                </div>
            </section>

            {/* 3. THE SOLUTION */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight">How the "Safety Shield" works</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-12 text-center">
                        <Step
                            number="1"
                            title="Send us the link"
                            description="Copy and paste the ad link (Idealista, Fotocasa, etc.) in your private dashboard."
                        />
                        <Step
                            number="2"
                            title="Express Investigation"
                            description="Our agents cross-reference data with the Registry, Cadastre, and Urban Planning."
                        />
                        <Step
                            number="3"
                            title="Receive the Verdict"
                            description="In less than 24h you receive a PDF with our verdict: GREEN (Safe), YELLOW (Caution), or RED (Danger)."
                        />
                    </div>
                </div>
            </section>

            {/* 4. PRICING */}
            <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 bg-emerald-600/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="container relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">Peace of mind for the price of a dinner</h2>
                            <p className="text-slate-300 text-lg mb-8">
                                Don't risk a 200,000€ purchase just to save on professional analysis.
                                It's the smartest decision you'll make in the entire buying process.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <BenefitItem text="Market Price Analysis (Big Data)" />
                                <BenefitItem text="Tourist License Verification" />
                                <BenefitItem text="Renovation Cost Detection" />
                                <BenefitItem text="Land Registry Check (if available)" />
                            </ul>
                        </div>

                        {/* Pricing Card */}
                        <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl border-4 border-emerald-400 transform hover:scale-105 transition-transform duration-300">
                            <div className="text-center border-b pb-6 mb-6">
                                <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-2">Launch Offer</p>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-xl text-slate-400 line-through">99€</span>
                                    <span className="text-5xl font-extrabold text-emerald-600">49€</span>
                                </div>
                                <p className="text-sm text-slate-500 mt-2">VAT included</p>
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                    <span className="font-medium">PDF Report in &lt; 24 hours</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                    <span className="font-medium">Money Back Guarantee*</span>
                                </div>
                            </div>

                            <Button size="lg" className="w-full text-lg h-12 bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                                <Link href="/login?redirect=/dashboard/new-request">
                                    I want my report
                                </Link>
                            </Button>
                            <p className="text-xs text-center text-muted-foreground mt-4">
                                *If we cannot find enough data for an analysis, we refund 100%.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. FAQ */}
            <section className="py-20">
                <div className="container max-w-3xl">
                    <h2 className="text-3xl font-bold text-center mb-12">Freqently Asked Questions</h2>
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Do I need to be the owner to request the report?</AccordionTrigger>
                            <AccordionContent>
                                No. You only need the public link to the ad (Idealista, Fotocasa, etc.). We take care of investigating from the outside.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>What if the apartment is already sold?</AccordionTrigger>
                            <AccordionContent>
                                If we detect that the property is no longer on the market, we notify you and you can use your credit to analyze another property at no additional cost.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Does it include a physical visit?</AccordionTrigger>
                            <AccordionContent>
                                No. This is a preliminary "Digital Scan" service to filter out bad options. If the apartment passes the filter ("Green Light"), we offer technical visit services separately.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            {/* 6. FINAL CTA */}
            <section className="py-20 bg-emerald-50/50 text-center">
                <div className="container">
                    <h2 className="text-3xl font-bold mb-6">Don't buy blindly.</h2>
                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Join the investors who sleep peacefully knowing exactly what they are buying.
                    </p>
                    <Button size="lg" className="px-12 text-lg bg-emerald-600 hover:bg-emerald-700 text-white" asChild>
                        <Link href="/login?redirect=/dashboard/new-request">
                            Start Analysis
                        </Link>
                    </Button>
                </div>
            </section>

        </div>
    )
}

// Helpers Components
function ProblemCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
    return (
        <Card className="border-none shadow-none bg-transparent">
            <CardHeader className="text-center items-center">
                <div className="mb-4 p-3 bg-white rounded-xl shadow-sm border">
                    {icon}
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-muted-foreground">
                {description}
            </CardContent>
        </Card>
    )
}

function Step({ number, title, description }: { number: string, title: string, description: string }) {
    return (
        <div className="flex flex-col items-center">
            <div className="h-12 w-12 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center text-xl font-bold mb-6">
                {number}
            </div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-muted-foreground">{description}</p>
        </div>
    )
}

function BenefitItem({ text }: { text: string }) {
    return (
        <li className="flex items-center gap-3">
            <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
            <span className="font-medium">{text}</span>
        </li>
    )
}
