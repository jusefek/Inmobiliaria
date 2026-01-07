import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen } from "lucide-react"
import { dictionaries, Locale } from "@/data/locations"

export function LocalGlossary({ locale, term, definition }: { locale: Locale, term: string, definition: string }) {
    if (!term || !definition) return null;

    return (
        <section className="py-12 bg-slate-50 border-t">
            <div className="container max-w-3xl">
                <Card className="bg-amber-50/50 border-amber-200 shadow-sm">
                    <CardHeader className="pb-2">
                        <div className="flex items-center gap-2 text-amber-800">
                            <BookOpen className="h-5 w-5" />
                            <CardTitle className="text-lg font-serif">
                                {locale === 'de' ? 'Lokales Fachwissen' :
                                    locale === 'sv' ? 'Lokal kunskap' :
                                        locale === 'no' ? 'Lokal kunnskap' :
                                            locale === 'da' ? 'Lokal viden' :
                                                locale === 'nl' ? 'Lokale kennis' :
                                                    'Local Insight'}
                            </CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="text-slate-800 font-medium mb-1">{term}</p>
                        <p className="text-slate-600 text-sm leading-relaxed">
                            {definition}
                        </p>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
