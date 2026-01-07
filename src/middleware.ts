import createMiddleware from 'next-intl/middleware';
import { locales } from './data/locations';

export default createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: 'en'
});

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(de|en|es|nl|fr|pl|it|ru|sv|no|da)/:path*']
};
