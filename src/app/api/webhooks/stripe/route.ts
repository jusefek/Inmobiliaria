import { headers } from 'next/headers'
import { stripe } from '@/lib/stripe'
import { db } from '@/lib/db'
import Stripe from 'stripe'

export async function POST(req: Request) {
    const body = await req.text()
    const signature = (await headers()).get('Stripe-Signature') as string

    let event: Stripe.Event

    try {
        event = stripe.webhooks.constructEvent(
            body,
            signature,
            process.env.STRIPE_WEBHOOK_SECRET!
        )
    } catch (error: any) {
        return new Response(`Webhook Error: ${error.message}`, { status: 400 })
    }

    const session = event.data.object as Stripe.Checkout.Session

    if (event.type === 'checkout.session.completed') {
        // Retrieve the Request ID from Metadata
        const requestId = session.metadata?.requestId

        if (!requestId) {
            return new Response('Missing requestId in metadata', { status: 400 })
        }

        console.log(`💰 Payment succeeded for Request ID: ${requestId}`)

        // Update DB Status
        await db.serviceRequest.update({
            where: { id: requestId },
            data: {
                status: 'PAID',
                stripeSessionId: session.id,
            }
        })
    }

    return new Response(null, { status: 200 })
}
