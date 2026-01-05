import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    output: 'standalone',
    // Optimize images from external sources (if using S3/MinIO)
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Restrict this in production
            },
        ],
    },
};

export default nextConfig;
