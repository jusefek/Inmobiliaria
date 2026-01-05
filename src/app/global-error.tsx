'use client'

import { useEffect } from 'react'
import { Button } from "@/components/ui/button"

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <html>
            <body className="flex min-h-screen flex-col items-center justify-center bg-slate-50 text-center p-4">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Something went wrong!</h2>
                <p className="text-muted-foreground mb-8 max-w-md">
                    We apologize for the inconvenience. Our team has been notified.
                </p>
                <Button
                    onClick={
                        // Attempt to recover by trying to re-render the segment
                        () => reset()
                    }
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                >
                    Try again
                </Button>
            </body>
        </html>
    )
}
