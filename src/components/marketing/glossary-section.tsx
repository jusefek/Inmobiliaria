import { glossary } from "@/data/glossary"
import { Locale } from "@/data/locations"

export function GlossarySection({ locale }: { locale: Locale }) {
    const terms = glossary[locale]

    if (!terms) return null

    return (
        <section className="py-20 bg-slate-50">
            <div className="container max-w-4xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4 font-serif">
                        {locale === 'de' ? 'Wichtige Begriffe für Investoren' :
                            locale === 'es' ? 'Glosario del Inversor' :
                                locale === 'sv' ? 'Viktiga begrepp för investerare' :
                                    'Key Real Estate Terms'}
                    </h2>
                    <p className="text-muted-foreground">
                        {locale === 'de' ? 'Verstehen Sie die spanische Bürokratie.' :
                            'Understanding the Spanish bureaucracy.'}
                    </p>
                </div>

                {/* DL Element for Google Featured Snippets */}
                <div className="overflow-hidden">
                    <dl className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                        {Object.values(terms).map((item) => (
                            <div key={item.term} className="relative pl-6 border-l-2 border-nolla-gold/30 hover:border-nolla-gold transition-colors duration-300 pb-2">
                                <dt className="text-xl font-bold text-nolla-blue mb-3 font-serif break-words">
                                    {item.term}
                                </dt>
                                <dd className="text-slate-600 leading-relaxed text-base">
                                    {item.definition}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </section>
    )
}
