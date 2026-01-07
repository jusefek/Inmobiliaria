"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, CheckCircle2 } from "lucide-react"
import { useFormState, useFormStatus } from "react-dom"
import { submitContactForm } from "@/actions/contact"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useTranslations } from 'next-intl'

const initialState = {
    success: false,
    message: ''
}

export function ContactForm() {
    const t = useTranslations('ContactForm')
    const [state, formAction] = useFormState(submitContactForm, initialState)

    return (
        <div className="container py-24 px-4 md:px-6 min-h-screen bg-nolla-cream/10">
            <div className="max-w-2xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 font-serif text-nolla-blue">
                    {t('title')}
                </h1>
                <p className="text-slate-600 text-lg font-light">
                    {t('subtitle')}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <Card className="rounded-none border-2 border-nolla-blue/20 shadow-lg bg-white overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-nolla-blue" />
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl font-serif text-nolla-blue">
                                <Mail className="h-6 w-6" />
                                {t('email_label')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg font-medium text-slate-800">{t('email_info')}</p>
                            <p className="text-sm text-slate-500 mt-2">{t('email_response_time')}</p>
                        </CardContent>
                    </Card>

                    <Card className="rounded-none border-2 border-nolla-blue/20 shadow-lg bg-white overflow-hidden group">
                        <div className="absolute top-0 left-0 w-1 h-full bg-nolla-blue" />
                        <CardHeader>
                            <CardTitle className="flex items-center gap-3 text-2xl font-serif text-nolla-blue">
                                <Phone className="h-6 w-6" />
                                {t('phone_label')}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-lg font-medium text-slate-800">{t('phone_number')}</p>
                            <p className="text-sm text-slate-500 mt-2">{t('phone_hours')}</p>
                        </CardContent>
                    </Card>

                    {/* Decorative Box */}
                    <div className="h-48 w-full bg-nolla-blue relative overflow-hidden rounded-none shadow-xl flex items-center justify-center">
                        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern-nolla.png')] bg-repeat bg-[length:150px]" />
                        <span className="relative z-10 text-nolla-cream font-serif text-2xl font-bold italic border-b-2 border-nolla-cream pb-1">
                            {t('location')}
                        </span>
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white p-10 shadow-2xl border-t-8 border-nolla-blue relative">
                    <h3 className="font-bold text-2xl mb-8 font-serif text-slate-900 border-b pb-4">
                        {t('form_title')}
                    </h3>

                    {state.success ? (
                        <div className="flex flex-col items-center justify-center h-[400px] text-center space-y-4 animate-in fade-in">
                            <CheckCircle2 className="h-16 w-16 text-emerald-500" />
                            <h4 className="text-2xl font-bold text-slate-900">{t('success_title')}</h4>
                            <p className="text-slate-600">{state.message}</p>
                            <Button variant="outline" onClick={() => window.location.reload()}>
                                {t('button_send_another')}
                            </Button>
                        </div>
                    ) : (
                        <form action={formAction} className="space-y-6">
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold text-nolla-blue uppercase tracking-wider">
                                        {t('label_name')}
                                    </Label>
                                    <Input
                                        name="name"
                                        placeholder={t('placeholder_name')}
                                        className="rounded-none border-slate-300 focus:border-nolla-blue focus:ring-nolla-blue/20 bg-slate-50"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-sm font-semibold text-nolla-blue uppercase tracking-wider">
                                        {t('label_phone')}
                                    </Label>
                                    <Input
                                        name="phone"
                                        placeholder={t('placeholder_phone')}
                                        className="rounded-none border-slate-300 focus:border-nolla-blue focus:ring-nolla-blue/20 bg-slate-50"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-nolla-blue uppercase tracking-wider">
                                    {t('label_email')}
                                </Label>
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder={t('placeholder_email')}
                                    className="rounded-none border-slate-300 focus:border-nolla-blue focus:ring-nolla-blue/20 bg-slate-50"
                                    required
                                />
                            </div>
                            <div className="space-y-2">
                                <Label className="text-sm font-semibold text-nolla-blue uppercase tracking-wider">
                                    {t('label_message')}
                                </Label>
                                <Textarea
                                    name="message"
                                    className="flex w-full border border-slate-300 bg-slate-50 px-3 py-2 text-sm text-slate-900 placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-nolla-blue/20 focus-visible:border-nolla-blue disabled:cursor-not-allowed disabled:opacity-50 min-h-[150px] rounded-none resize-none"
                                    placeholder={t('placeholder_message')}
                                    required
                                />
                            </div>
                            <SubmitButton />
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}

function SubmitButton() {
    const t = useTranslations('ContactForm')
    const { pending } = useFormStatus()
    return (
        <Button disabled={pending} className="w-full bg-nolla-blue hover:bg-nolla-blue/90 text-white font-bold tracking-wide h-12 rounded-none text-lg shadow-lg">
            {pending ? t('button_sending') : t('button_send')}
        </Button>
    )
}
