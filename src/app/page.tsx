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
import Projects from '@/components/Projects';

export default function Home() {
    return (
        <>
            {/* <BoxObject></BoxObject> */}
            <div className=" flex flex-row align-center justify-center relative">
                <div className="absolute w-full z-0 h-screen
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
            <main className=" home-container relative flex gap-8 md:grid auto-rows-min xl:gap-12 md:grid-cols-3 flex-col p-6 lg:p-12 xl:container mx-auto overflow-x-hidden z-[1]">

                <SectionSpacer></SectionSpacer>
                <h1 className="col-span-full mt-32 text-4xl md:text-7xl lg:text-8xl text-sky-700 dark:text-sky-600">
                    {`Hi, I'm Paul Merupu`}
                </h1>
                {/* <DottedXAxis></DottedXAxis> */}
                <p className="col-span-1 md:col-span-2
                    leading-8 text-xl sm:text-2xl md:leading-10 md:text-3xl
                    mt-5 md:mt-0"
                >
                    I specialize in developing high-performance, scalable, and user-friendly web and mobile applications. With a strong foundation in computer science and a passion for design, I continuously seek to improve my skills by exploring the latest tools and architectures in the software development landscape.
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
                <Heading2>Projects
                    <span className="text-2xl ms-2">{`⚙️`}</span>
                </Heading2>
                <Projects></Projects>

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

                

            </main>
            <Script id="extend-bg">
                {`
                document.querySelector( '.bg-grid' ).style.height = document.querySelector( '.home-container' ).scrollHeight + 'px';
                
                `}
            </Script>
            
        </>
    )
}
