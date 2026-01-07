"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Link as UserLink, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useTranslations } from "next-intl";

export function ContactClient() {
    const t = useTranslations('contact');
    const [isLoading, setIsLoading] = React.useState(false);
    const [isSuccess, setIsSuccess] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsLoading(true);
        setError(null);
        setIsSuccess(false);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            email: formData.get("email"),
            message: formData.get("message"),
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || "Failed to send message");
            }

            setIsSuccess(true);
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            setError(err instanceof Error ? err.message : "Something went wrong");
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 bg-slate-50">
                {/* Header */}
                <div className="bg-slate-900 py-20 text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 bg-[url('/images/pattern-nolla.png')] bg-repeat bg-[length:100px]" />
                    <div className="container relative z-10 px-4">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6 animate-fade-in-up">
                            {t('title')}
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
                            {t('desc')}
                        </p>
                    </div>
                </div>

                <div className="container py-20 px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                        {/* Contact Info */}
                        <div className="space-y-10">
                            <div>
                                <h3 className="text-2xl font-bold font-serif text-slate-900 mb-6">{t('get_in_touch')}</h3>
                                <p className="text-slate-600 text-lg leading-relaxed">
                                    {t('get_in_touch_desc')}
                                </p>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="bg-nolla-blue/10 p-3 rounded-lg text-nolla-blue">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">{t('email_label')}</h4>
                                        <a href="mailto:info.teselaprojects@gmail.com" className="text-slate-600 hover:text-nolla-blue transition-colors">
                                            info.teselaprojects@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-nolla-blue/10 p-3 rounded-lg text-nolla-blue">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h4 className="font-semibold text-slate-900">{t('phone_label')}</h4>
                                        <a href="tel:+34634415516" className="text-slate-600 hover:text-nolla-blue transition-colors">
                                            +34 634 415 516
                                        </a>
                                        {/* WhatsApp Button */}
                                        <a
                                            href="https://wa.me/34634415516"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors mt-1"
                                        >
                                            <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                            </svg>
                                            Chat on WhatsApp
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-nolla-blue/10 p-3 rounded-lg text-nolla-blue">
                                        <MapPin className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-slate-900">{t('office_label')}</h4>
                                        <p className="text-slate-600">
                                            {t('office_address')}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100">
                            {isSuccess ? (
                                <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-12 animate-fade-in-up">
                                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-2">
                                        <CheckCircle className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">{t('success_title')}</h3>
                                    <p className="text-slate-600">{t('success_message')}</p>
                                    <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-4">
                                        {t('send_another')}
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    {error && (
                                        <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                                            {error}
                                        </div>
                                    )}
                                    <div className="space-y-2">
                                        <Label htmlFor="name">{t('form_name_label')}</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            required
                                            placeholder={t('form_name_placeholder')}
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">{t('form_email_label')}</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            placeholder={t('form_email_placeholder')}
                                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">{t('form_message_label')}</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            required
                                            placeholder={t('form_message_placeholder')}
                                            className="min-h-[150px] bg-slate-50 border-slate-200 focus:bg-white transition-all resize-none"
                                            disabled={isLoading}
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        size="lg"
                                        className="w-full h-12 bg-nolla-blue hover:bg-nolla-blue/90 text-lg font-medium shadow-lg shadow-nolla-blue/25"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? t('button_sending') : t('form_submit')}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
