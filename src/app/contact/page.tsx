import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone } from "lucide-react"

export const metadata = {
    title: "Contact | TESELA PROJECTS",
    description: "Contact our real estate team in the Valencian Community.",
}

export default function ContactPage() {
    return (
        <div className="container py-24 px-4 md:px-6 min-h-screen bg-nolla-cream/10">
            <div className="max-w-2xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-serif text-nolla-blue">Let's Talk About Your Search</h1>
                <p className="text-slate-600 text-lg font-light">
                    Have questions about a property? Want to audit an apartment before reserving?
                    We are here to protect your purchase.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <Card className="rounded-none border-2 border-nolla-blue/20 shadow-lg bg-white overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-nolla-blue" />
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl font-serif text-nolla-blue">
                                <Mail className="h-6 w-6" />
                                Email
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg font-medium text-slate-800">info@teselaprojects.com</p>
                            <p className="text-sm text-slate-500 mt-2">Response in max. 24h</p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-2 border-nolla-blue/20 shadow-lg bg-white overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-nolla-blue" />
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl font-serif text-nolla-blue">
                                <Phone className="h-6 w-6" />
                                Phone
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg font-medium text-slate-800">+34 960 000 000</p>
                            <p className="text-sm text-slate-500 mt-2">Monday to Friday (9:00 - 18:00)</p>
                        </CardContent>
                    </Card>

                    {/* Decorative Box */}
                    <div className="h-48 w-full bg-nolla-blue relative overflow-hidden rounded-none shadow-xl flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern-nolla.png')] bg-repeat bg-[length:150px]" />
                        <span className="relative z-10 text-nolla-cream font-serif text-2xl font-bold italic border-b-2 border-nolla-cream pb-1">Valencian Community, Spain</span>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-10 shadow-2xl border-t-8 border-nolla-blue relative">
                    <h3 className="font-bold text-2xl mb-8 font-serif text-slate-900 border-b pb-4">Send us a message</h3>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-nolla-blue uppercase tracking-wider">Name</label>
                                <Input placeholder="Your name" className="rounded-none border-slate-300 focus:border-nolla-blue focus:ring-nolla-blue/20 bg-slate-50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-nolla-blue uppercase tracking-wider">Phone</label>
                                <Input placeholder="+34..." className="rounded-none border-slate-300 focus:border-nolla-blue focus:ring-nolla-blue/20 bg-slate-50" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-nolla-blue uppercase tracking-wider">Email</label>
                            <Input type="email" placeholder="hello@example.com" className="rounded-none border-slate-300 focus:border-nolla-blue focus:ring-nolla-blue/20 bg-slate-50" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-semibold text-nolla-blue uppercase tracking-wider">Message</label>
                            <textarea
                                className="flex w-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nolla-blue/20 focus-visible:border-nolla-blue disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px] rounded-none resize-none"
                                placeholder="I'm interested in..."
                            />
                        </div>
                        <Button className="w-full bg-nolla-blue hover:bg-nolla-blue/90 text-white font-bold tracking-wide h-12 rounded-none text-lg shadow-lg">
                            Send Inquiry
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}
