import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

const nextConfig: NextConfig = {
    output: 'standalone',

    // Configuración de headers para caché multilingüe
    async headers() {
        return [
            {
                // Aplicar a todas las rutas localizadas
                source: '/:locale/:path*',
                headers: [
                    {
                        key: 'Vary',
                        value: 'Accept-Language, Cookie',
                    },
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                ],
            },
            {
                // Aplicar también a la raíz
                source: '/',
                headers: [
                    {
                        key: 'Vary',
                        value: 'Accept-Language, Cookie',
                    },
                ],
            },
        ];
    },

    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'source.unsplash.com',
            },
        ],
    },
};

export default withNextIntl(nextConfig);

