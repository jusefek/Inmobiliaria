import { getRequestConfig } from 'next-intl/server';
import { locales } from './data/locations';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Validate that the incoming `locale` parameter is valid
    // @ts-ignore
    if (!locale || !locales.includes(locale as any)) {
        // @ts-ignore
        locale = 'en'; // default
    }

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});
