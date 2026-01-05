import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background text-center p-4">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">404 - Page Not Found</h2>
            <p className="text-muted-foreground mb-8">Could not find the requested resource.</p>
            <Button asChild className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <Link href="/">Return Home</Link>
            </Button>
        </div>
    )
}
