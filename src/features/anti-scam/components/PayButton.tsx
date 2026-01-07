'use client'

import { createCheckoutSession } from "../actions/payment"
import { Button } from "@/components/ui/button"
import { CreditCard } from "lucide-react"

export function PayButton({ requestId }: { requestId: string }) {
    return (
        <form action={async () => { await createCheckoutSession(requestId) }}>
            <Button type="submit" size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white">
                <CreditCard className="mr-2 h-4 w-4" />
                Pay Now (49€)
            </Button>
        </form>
    )
}
