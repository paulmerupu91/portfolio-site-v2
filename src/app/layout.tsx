import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Navigation from '@/components/Navigation'
import Script from 'next/script'
import Footer from '@/components/Footer'
import GATracker from '@/components/GATracker'
import { cookies } from 'next/headers'
import AnimatedDiv from '@/components/AnimatedDiv';

const hyperLegible = localFont({
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
const hyperLegibleBold = localFont({
    src: './../fonts/Atkinson-Hyperlegible-Bold-102.otf',
    display: 'swap',
    weight: '700'
})

export const metadata: Metadata = {
    title: 'Paul Merupu',
    description: 'Full stack engineer with over 8 years of experience building performant and modern web applications.'
}

const bgClassNames = 'bg-slate-100 dark:bg-slate-800'

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const cookieStore = await cookies();
    const theme = cookieStore.get('theme')?.value || 'light';

    return (
        <html lang="en" className={`h-full ${theme}`}>
            <body className={`${hyperLegible.className} ${bgClassNames} h-full flex flex-col text-slate-800 dark:text-slate-200 ${bgClassNames} overflow-x-hidden z-0`}>

                <Navigation></Navigation>
                <div id="content-wrapper" className={`${bgClassNames} flex-grow border-b border-b-slate-300 dark:border-b-slate-700 `}>
                    <GATracker>
                        <AnimatedDiv>
                            {children}
                        </AnimatedDiv>
                    </GATracker>


                </div>

                <Script id='gtm-js' strategy='afterInteractive' src='https://www.googletagmanager.com/gtag/js?id=UA-70356318-2'>

                </Script>
                <Script id='gtm-script' strategy='afterInteractive'>
                    {`
                         window.dataLayer = window.dataLayer || [];
                         function gtag(){dataLayer.push(arguments);}
                         gtag('js', new Date());
                       
                         gtag('config', 'UA-70356318-2');
                    `}
                </Script>

                <Footer />



                {/* <Script id="init-theme"
                    // src="./darkModeInit.js"
                    strategy='beforeInteractive'
                >
                    {`
                        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                            document.documentElement.classList.add('dark')
                        } else {
                            document.documentElement.classList.remove('dark')
                        }
                    `}
                </Script> */}
            </body>

        </html>
    )
}
