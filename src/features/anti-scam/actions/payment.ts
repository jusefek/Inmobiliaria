'use server'

import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import { db } from '@/lib/db'
import { stripe } from '@/lib/stripe'

export async function createCheckoutSession(requestId: string) {
    // 1. Auth Check
    const session = await auth()
    if (!session || !session.user || !session.user.id) {
        return { error: "Unauthorized" }
    }

    // 2. Validate Ownership
    const serviceRequest = await db.serviceRequest.findUnique({
        where: { id: requestId },
    })

    if (!serviceRequest) {
        return { error: "Request not found" }
    }

    if (serviceRequest.userId !== session.user.id) {
        return { error: "Unauthorized access to this request" }
    }

    if (serviceRequest.status === 'PAID' || serviceRequest.status === 'COMPLETED') {
        return { error: "Request is already paid" }
    }

    let sessionUrl: string | null = null

    try {
        // 3. Create Stripe Checkout Session
        const checkoutSession = await stripe.checkout.sessions.create({
            mode: 'payment',
            customer_email: session.user.email || undefined,
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: 'Anti-Scam Property Analysis',
                            description: `Risk Audit for Request #${requestId.slice(-5)}`,
                        },
                        unit_amount: 4900, // 49.00 EUR
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                requestId: requestId, // CRITICAL: Used by Webhook
                userId: session.user.id,
            },
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=success`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?payment=cancelled`,
        })

        sessionUrl = checkoutSession.url
    } catch (error) {
        console.error("Stripe Checkout Error:", error)
        return { error: "Failed to initialize payment" }
    }

    // 4. Redirect User
    if (sessionUrl) {
        redirect(sessionUrl)
    }
}
