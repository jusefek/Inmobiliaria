
import { constructMetadata } from "@/lib/metadata"
import { ContactClient } from "./contact-client";
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params
    const t = await getTranslations('contact');
    return constructMetadata({
        title: `${t('title')} | TESELA PROJECTS`,
        description: t('desc'),
        locale: locale as any,
        canonical: `https://teselaprojects.com/${locale}/contact`
    })
}

export default async function ContactPage() {
    return <ContactClient />;
}
