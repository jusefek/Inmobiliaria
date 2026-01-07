'use server'

export async function submitContactForm(prevState: any, formData: FormData) {
    // In a real app, this would send an email via Resend/SendGrid
    // For now, we simulate success
    await new Promise(resolve => setTimeout(resolve, 1000))

    return {
        success: true,
        message: 'Message received! We will contact you shortly.'
    }
}
