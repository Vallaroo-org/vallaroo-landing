import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import AppProvidersWrapper from '@/src/wrappers/AppProvidersWrapper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'aos/dist/aos.css';
import './style.css';

const inter = Inter({
    variable: '--font-inter',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Vallaroo - Complete Shop Management Platform',
    description: 'Vallaroo - Complete shop management platform for modern businesses. Manage your shop, products, customers, and orders all in one place with our powerful B2B and B2C applications.',
    keywords: 'shop management, e-commerce, inventory management, business software, vallaroo, b2b, b2c, retail management, multi-tenant, saas'
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900,1&display=swap" rel="stylesheet" />
            </head>
            <body className={inter.variable}>
                {children}
                <AppProvidersWrapper />
                
                {/* Simple Analytics - 100% privacy-first analytics */}
                <Script
                    src="https://scripts.simpleanalyticscdn.com/latest.js"
                    data-collect-dnt="true"
                    strategy="afterInteractive"
                />
                <noscript>
                    <img 
                        src="https://queue.simpleanalyticscdn.com/noscript.gif?collect-dnt=true" 
                        alt="" 
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </noscript>
            </body>
        </html>
    );
}
