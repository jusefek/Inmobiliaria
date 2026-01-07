import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Locale } from "@/data/locations"

const messages = {
    en: {
        title: "Order Received!",
        subtitle: "Thank you for trusting us. We have received your request.",
        desc: "Our architects are already reviewing the data. You will receive an email confirmation shortly.",
        cta: "Back to Home"
    },
    es: {
        title: "¡Pedido Recibido!",
        subtitle: "Gracias por tu confianza. Hemos recibido tu solicitud.",
        desc: "Nuestros arquitectos ya están revisando los datos. Recibirás un email de confirmación en breve.",
        cta: "Volver al Inicio"
    },
    de: {
        title: "Bestellung Erhalten!",
        subtitle: "Danke für Ihr Vertrauen. Wir haben Ihre Anfrage erhalten.",
        desc: "Unsere Architekten prüfen bereits die Daten. Sie erhalten in Kürze eine Bestätigung per E-Mail.",
        cta: "Zurück zur Startseite"
    },
    sv: {
        title: "Beställning Mottagen!",
        subtitle: "Tack för ditt förtroende. Vi har tagit emot din förfrågan.",
        desc: "Våra arkitekter granskar redan uppgifterna. Du får en bekräftelse via e-post inom kort.",
        cta: "Tillbaka till Startsidan"
    },
    nl: {
        title: "Bestelling Ontvangen!",
        subtitle: "Bedankt voor uw vertrouwen. We hebben uw aanvraag ontvangen.",
        desc: "Onze architecten bekijken de gegevens al. U ontvangt binnenkort een bevestiging per e-mail.",
        cta: "Terug naar Home"
    },
    no: {
        title: "Ordre Mottatt!",
        subtitle: "Takk for tilliten.",
        desc: "Vi ser på saken. E-post kommer snart.",
        cta: "Hjem"
    },
    da: {
        title: "Ordre Modtaget!",
        subtitle: "Tak for din tillid.",
        desc: "Vi kigger på det. Email på vej.",
        cta: "Hjem"
    }
}

export default async function ThankYouPage({ params }: { params: Promise<{ locale: Locale }> }) {
    const { locale } = await params
    const txt = messages[locale as keyof typeof messages] || messages['en']

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 p-4 text-center">
            <div className="bg-white p-12 rounded-2xl shadow-xl border border-slate-100 max-w-lg">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-500">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                </div>
                <h1 className="text-3xl font-bold text-slate-900 mb-2">{txt.title}</h1>
                <p className="text-xl text-nolla-blue font-medium mb-4">{txt.subtitle}</p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                    {txt.desc}
                </p>
                <Button asChild size="lg" className="bg-nolla-blue hover:bg-nolla-blue/90 text-white w-full">
                    <Link href={`/${locale}`}>
                        {txt.cta} <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </div>
    )
}
