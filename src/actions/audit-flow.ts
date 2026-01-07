'use server'

import { db } from '@/lib/db'
import { stripe } from '@/lib/stripe'
import { sendAdminNotification } from '@/lib/mail'

import { headers } from 'next/headers'

export async function submitGuestAuditRequest(prevState: unknown, formData: FormData) {
    // Dynamic Base URL for Stripe Redirects (Handles port 3000, 3001, etc.)
    const headersList = await headers()
    const host = headersList.get('host') || 'localhost:3000'
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https'
    const BASE_URL = `${protocol}://${host}`

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const propertyUrl = formData.get('propertyUrl') as string

    if (!email || !propertyUrl) {
        return { error: 'Email and Property URL are required.' }
    }

    try {
        // 1. Find or Create User
        let user = await db.user.findUnique({
            where: { email },
        })

        if (!user) {
            user = await db.user.create({
                data: {
                    email,
                    name: name || email.split('@')[0],
                    role: 'CLIENT',
                    // No password set yet. They can recover it later or we send magic link.
                },
            })
        }

        // 2. Create Service Request (Pending Payment)
        const request = await db.serviceRequest.create({
            data: {
                userId: user.id,
                type: 'ANTI_SCAM_CHECK',
                status: 'PENDING_PAYMENT',
                propertyUrl: propertyUrl,
                amountPaid: 49.00, // Hardcoded for this service
                // Store comments if we had a field, or use adminNotes for now or metadata?
                // Schema doesn't have "userComments", let's put it in adminNotes for now or ignore.
                // Better: Update schema later if strictly needed. For now assume sales flow.
            },
        })

        // 2.5 Send immediate admin notification (Lead capture)
        await sendAdminNotification({
            subject: `🔐 NEW AUDIT REQUEST: ${name || email}`,
            name: name || 'No name provided',
            email: email,
            propertyUrl: propertyUrl,
            amount: 49.00,
            comments: formData.get('comments') as string || undefined,
        })

        // 3. Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'eur',
                        product_data: {
                            name: 'Property Due Diligence Audit (24h Express)',
                            description: `Analysis for: ${propertyUrl}`,
                        },
                        unit_amount: 4900, // 49.00 EUR
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${BASE_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${BASE_URL}/services/audit/checkout?canceled=true`,
            customer_email: email, // Use the provided email for Stripe receipt
            metadata: {
                requestId: request.id,
                userId: user.id,
                serviceType: 'ANTI_SCAM_CHECK'
            },
        })

        if (!session.url) {
            throw new Error('Failed to create Stripe session')
        }

        // Return the URL to redirect on client
        return { url: session.url }

    } catch (error) {
        console.error('Guest Audit Error:', error)
        return { error: 'Something went wrong. Please try again.' }
    }
}
