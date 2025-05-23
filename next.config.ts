import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    ppr: 'incremental',
    // Disable to ensure build works
    // https://github.com/vercel/next.js/issues/32314
    // esmExternals: false,
    // Enable the OpenTelemetry integration
    // https://nextjs.org/docs/app/building-your-application/optimizing/open-telemetry#using-vercelotel
    // https://maxwellweru.com/blog/2024/03/nextjs-opentelemetry-with-azure-monitor
  },
  images: {
    // domains: ['*', 'robohash.org'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Matches any domain
      },
    ],
  },
};

export default nextConfig;
