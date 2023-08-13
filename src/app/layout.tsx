import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Navigation from '@/components/Navigation'
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] })

const questrial = localFont({
    src: './../fonts/Questrial-Regular.otf',
    display: 'swap',
})
const hyperLedible = localFont({
    display: 'swap',
    src: [
        {
            path: './../fonts/Atkinson-Hyperlegible-Regular-102.otf',
            weight: '500',
            style: 'normal'
        },
        {
            path: './../fonts/Atkinson-Hyperlegible-Bold-102.otf',
            weight: '700',
            style: 'normal'
        }
    ]
})
const hyperLedibleBold = localFont({
    src: './../fonts/Atkinson-Hyperlegible-Bold-102.otf',
    display: 'swap',
    weight: '700'
})

export const metadata: Metadata = {
    title: 'Paul Merupu',
    description: 'Full stack engineer with over 7 years of experience building performant and modern web applications.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            
            <body className={`${hyperLedible.className} text-slate-500 dark:text-slate-200 dark:bg-slate-900 overflow-x-hidden`}>
                
                <Navigation></Navigation>
                {children}
                
            </body>
            
        </html>
    )
}
