'use server'

import { z } from 'zod'
import { auth } from '@/auth'
import { db } from '@/lib/db'
import { stripe } from '@/lib/stripe'
import { redirect } from 'next/navigation'

const RequestSchema = z.object({
    propertyUrl: z.string().url("Please provide a valid URL from Idealista/Fotocasa"),
    notes: z.string().optional(),
})

export async function submitRequest(formData: FormData) {
    // 1. Validate Input
    const rawData = {
        propertyUrl: formData.get('propertyUrl'),
        notes: formData.get('notes'),
    }

    const validatedFields = RequestSchema.safeParse(rawData)

    if (!validatedFields.success) {
        return { error: "Invalid URL provided." }
    }

    // 2. Auth Check
    const session = await auth()
    if (!session || !session.user || !session.user.id) {
        return { error: "You must be logged in." }
    }

    const userId = session.user.id;
    const { propertyUrl } = validatedFields.data;

    let redirectUrl = '';

    try {
        // 3. Create DB Record (Persistence First)
        const serviceRequest = await db.serviceRequest.create({
            data: {
                userId: userId,
                type: 'ANTI_SCAM_CHECK',
                status: 'PENDING_PAYMENT',
                propertyUrl: propertyUrl,
                amountPaid: 49.00,
            }
        })

        // 4. Create Stripe Checkout Session
        const checkoutSession = await stripe.checkout.sessions.create({
            mode: 'payment',
            payment_method_types: ['card'],
            customer_email: session.user.email || undefined,
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: 'Anti-Scam Property Analysis',
                            description: 'Comprehensive risk audit for property URL: ' + propertyUrl,
                        },
                        unit_amount: 4900, // 49.00 EUR in cents
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                requestId: serviceRequest.id,
                userId: userId,
            },
            success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
            cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?canceled=true`,
        })

        if (checkoutSession.url) {
            redirectUrl = checkoutSession.url;
        } else {
            return { error: "Failed to create payment session." }
        }

    } catch (error) {
        console.error("Stripe Error:", error)
        return { error: "Internal Error. Please try again." }
    }

    // Redirect must happen outside try/catch in Server Actions
    if (redirectUrl) {
        redirect(redirectUrl)
    }
}
