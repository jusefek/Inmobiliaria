
import { Shield, Search, Languages } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { getTranslations } from "next-intl/server"

export async function TestimonialsSection({ locale }: { locale: string }) {
    const t = await getTranslations({ locale, namespace: 'home' });

    const benefits = [
        {
            icon: Shield,
            title: t('ben_1_title'),
            desc: t('ben_1_desc'),
        },
        {
            icon: Search,
            title: t('ben_2_title'),
            desc: t('ben_2_desc'),
        },
        {
            icon: Languages,
            title: t('ben_3_title'),
            desc: t('ben_3_desc'),
        }
    ]

    return (
        <section className="py-24 bg-slate-50 border-t border-slate-200">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-16 max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold font-serif mb-6 text-slate-900">
                        {t('benefit_title')}
                    </h2>
                    <p className="text-lg text-slate-600">
                        {t('benefit_subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                    {benefits.map((b, i) => (
                        <Card key={i} className="bg-white border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-300 group">
                            <CardContent className="pt-8 pb-8 px-6 text-center">
                                <div className="mx-auto bg-nolla-blue/5 h-16 w-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <b.icon className="h-8 w-8 text-nolla-blue" />
                                </div>
                                <h3 className="font-bold text-xl text-slate-900 mb-4">{b.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {b.desc}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
