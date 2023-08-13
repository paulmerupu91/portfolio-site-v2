import Image from 'next/image'
import Heading2 from '@/components/Heading2'
import SectionSpacer from '@/components/SectionSpacer'
import BoxObject from '@/components/BoxObject';
import DottedXAxis from '@/components/DottedXAxis';
import Testimonials from '@/components/Testimonials';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Script from 'next/script';
import Education from '@/components/Education';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            {/* <BoxObject></BoxObject> */}
            <div className="flex flex-row align-center justify-center ">
                <div className="absolute w-full -z-10 h-screen
                    grid
                    gap-8 xl:gap-12 grid-cols-3 flex-col px-6 lg:px-12 bottom-[10px] top-[-10px]
                    xl:container mx-auto
                    bg-grid"
                >

                    <div className="border-s border-e border-dashed border-slate-300 dark:border-slate-700">

                    </div>
                    <div className="border-s border-e border-dashed border-slate-300 dark:border-slate-700">

                    </div>
                    <div className="border-s border-e border-dashed border-slate-300 dark:border-slate-700">

                    </div>

                </div>
            </div>
            <main className="flex gap-8 md:grid auto-rows-min xl:gap-12 md:grid-cols-3 flex-col p-6 lg:p-12 xl:container mx-auto overflow-x-hidden">

                <SectionSpacer></SectionSpacer>
                <h1 className="col-span-full mt-32 text-4xl md:text-7xl lg:text-8xl text-sky-700 dark:text-sky-600">
                    {`Hi, I'm Paul Merupu`}
                </h1>
                {/* <DottedXAxis></DottedXAxis> */}
                <p className="col-span-1 md:col-span-2
                    leading-8 text-xl sm:text-2xl text-blue-200 md:leading-10 md:text-3xl
                    mt-5 md:mt-0"
                >
                    As a full-stack web developer with over 7 years experience, and having a background in
                    computer science and creative design,
                    I enjoy building {`⚡️`}fast, {`📏`}scalable, and {`💡`}intuitive web applications.
                    I believe in continuous learning and often read about modern development tools and architecture.
                </p>
                <DottedXAxis></DottedXAxis>

                <SectionSpacer></SectionSpacer>
                <Heading2>Skills
                    <span className="text-2xl ms-2">{`🔧`}</span>
                </Heading2>
                <Skills></Skills>

                <SectionSpacer></SectionSpacer>
                <Heading2>Experience
                    <span className="text-2xl ms-2">{`🖥️`}</span>
                </Heading2>
                <Experience></Experience>

                {/* <SectionSpacer></SectionSpacer>
                <Heading2>Certifications <span className="text-2xl ms-2">✔️</span>
                </Heading2> */}

                <SectionSpacer></SectionSpacer>
                <Heading2>Education
                    <span className="text-2xl ms-2">{`🎓`}</span>
                </Heading2>
                <Education></Education>

                <SectionSpacer></SectionSpacer>
                <Heading2>Hobbies
                    <span className="text-2xl ms-2">{`📷`}</span>
                </Heading2>
                <div className="md:col-span-3 flex gap-4 flex-wrap">
                    {['Web Development', 'Photography', 'Guitar', 'Tennis'].map(hobby =>

                        <h3
                            key={hobby}
                            className={`rounded-full bg-white dark:bg-slate-900 inline-block border
                                    border-green-400 px-4 py-2 md:px-7 md:py-4
                                    hover:bg-green-400 hover:text-white
                                    dark:border-green-700
                                    dark:hover:bg-green-700
                                `}

                        >
                            {hobby}
                        </h3>
                    )}
                </div>

                

                {/* <SectionSpacer></SectionSpacer>
                <Heading2>Projects
                <span className="text-2xl ms-2">⚙️</span>
                </Heading2>
                <SectionSpacer></SectionSpacer>
                <Heading2>Testimonials <span className="text-2xl ms-2">💬</span></Heading2>
                <Testimonials />
                
                <SectionSpacer></SectionSpacer>
                <Heading2>Favorite Quotes</Heading2> */}

                <SectionSpacer></SectionSpacer>

                <Footer/>

            </main>
            <Script id="extend-bg">
                {`
                document.querySelector( '.bg-grid' ).style.height = document.documentElement.scrollHeight + 'px';
                
                `}
            </Script>
            <Script id="init-theme"
                // src="./darkModeInit.js"
                strategy='afterInteractive'
            >
                {`
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
                `}
            </Script>
        </>
    )
}
