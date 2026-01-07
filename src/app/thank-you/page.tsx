import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Home } from "lucide-react"

export const metadata = {
    title: 'Order Received | TESELA PROJECTS',
}

export default function ThankYouPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
            <div className="h-24 w-24 rounded-full bg-emerald-100 flex items-center justify-center mb-8 animate-in zoom-in-50 duration-500">
                <CheckCircle2 className="h-12 w-12 text-emerald-600" />
            </div>

            <h1 className="text-4xl font-serif font-bold text-slate-900 mb-4">
                Thank you for your order!
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mb-2">
                We have received your audit request correctly.
            </p>
            <p className="text-lg text-slate-500 max-w-xl mb-8">
                You will receive an email <strong>in the next 10 minutes</strong> confirming the details.
                Our team is already warming up the engines to analyze your property.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-nolla-blue hover:bg-nolla-blue/90 text-white" asChild>
                    <Link href="/">
                        <Home className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </Button>
            </div>
        </div>
    )
}
