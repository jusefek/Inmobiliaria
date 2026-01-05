import Image from "next/image"

export const metadata = {
    title: "About Us | TESELA PROJECTS",
    description: "Meet the team behind your real estate safety.",
}

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero About */}
            <section className="bg-nolla-blue text-white py-24 text-center px-4 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-nolla.png')] bg-repeat bg-[length:250px]" />
                <div className="relative z-10">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 font-serif">Our Mission: Your <span className="text-nolla-cream italic">Peace of Mind</span></h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto font-light leading-relaxed">
                        We were born to fight the opacity of the real estate market in the Valencian Community.
                        We are the barrier between your money and a bad purchase.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 container px-4 md:px-6 bg-nolla-cream/5">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <h2 className="text-4xl font-bold text-nolla-blue font-serif">Why TESELA?</h2>
                        <div className="prose prose-lg text-slate-700 leading-relaxed font-light">
                            <p>
                                The real estate sector in Spain can be a jungle for the international buyer.
                                Hidden defects, unmentioned registry charges, pending community assessments...
                            </p>
                            <p className="border-l-4 border-nolla-blue pl-6 italic text-slate-900">
                                We founded TESELA PROJECTS with a radical premise: <strong>We don't sell houses, we sell security.</strong>
                                We are not a traditional agency that charges a commission to the seller. We are <em>Personal Shoppers</em>
                                working exclusively for you, the buyer.
                            </p>
                            <p>
                                Our team consists of technical architects, lawyers, and financial experts
                                who analyze every transaction with a magnifying glass.
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 relative h-[450px] w-full bg-slate-200 rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-2xl border-4 border-nolla-blue/10">
                        {/* Team Image */}
                        <div
                            className="absolute inset-0 bg-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                            style={{
                                backgroundImage: "url('/images/about-team.jpg')",
                                backgroundPosition: "20% center"
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* Values Grid */}
            <section className="bg-white py-24 px-4 border-t border-nolla-blue/10 relative">
                <div className="absolute top-0 left-0 right-0 h-2 bg-[url('/images/pattern-nolla.png')] opacity-20" />
                <div className="container">
                    <h2 className="text-4xl font-bold text-center mb-16 text-nolla-blue font-serif">Our Core Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-nolla-cream/20 p-8 rounded-none border border-nolla-blue/10 shadow-sm hover:shadow-lg transition-all hover:bg-nolla-cream/40">
                            <h3 className="text-2xl font-bold mb-4 text-nolla-blue font-serif">Radical Transparency</h3>
                            <p className="text-slate-700 font-light">If an apartment has problems, we will tell you. We prefer to lose a deal than to lose your trust.</p>
                        </div>
                        <div className="bg-nolla-cream/20 p-8 rounded-none border border-nolla-blue/10 shadow-sm hover:shadow-lg transition-all hover:bg-nolla-cream/40">
                            <h3 className="text-2xl font-bold mb-4 text-nolla-blue font-serif">Independence</h3>
                            <p className="text-slate-700 font-light">We do not take commissions from agencies or sellers. Our interests are 100% aligned with yours.</p>
                        </div>
                        <div className="bg-nolla-cream/20 p-8 rounded-none border border-nolla-blue/10 shadow-sm hover:shadow-lg transition-all hover:bg-nolla-cream/40">
                            <h3 className="text-2xl font-bold mb-4 text-nolla-blue font-serif">Technology</h3>
                            <p className="text-slate-700 font-light">We use Big Data to value properties and detect overpricing in the market, ensuring you pay the fair price.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
