import Image from 'next/image'
import Heading2 from '@/components/Heading2'
import SectionSpacer from '@/components/SectionSpacer'
import BoxObject from '@/components/BoxObject';
import Script from 'next/script';
import Projects from '@/components/Projects';
import Link from 'next/link';
import BlogPostsList from '@/components/BlogPostsList';
import { getSiteTitleAndDescriptionFromCMS, getProjectsFromApi, getBlogPostsFromApi } from '@/utils/index';

export default async function Home() {
    const siteTitleAndDescription = await getSiteTitleAndDescriptionFromCMS();
    const projectsRes = await getProjectsFromApi();
    const projects = projectsRes?.projects?.edges || [];

    const latestBlogPostsRes = await getBlogPostsFromApi(undefined, 3);
    const latestBlogPosts = latestBlogPostsRes?.posts?.edges || [];

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

                {/* <DottedXAxis></DottedXAxis> */}
                <div className="mt-32 col-span-1 md:col-span-2">
                    <p className="
                        leading-8 text-lg sm:text-xl md:leading-10 md:text-2xl
                        md:mt-0 font-light"
                    >
                        {siteTitleAndDescription?.allSettings?.generalSettingsDescription}
                    </p>
                    <div className="col-span-full flex items-center gap-4 ">
                        <Image
                            src="/images/home/paul-merupu-portrait-photo-1-1.jpg"
                            alt="Paul Merupu"
                            width={90}
                            height={90}
                            className=" rounded-full "
                        />
                        <h1 className=" text-xl md:text-xl lg:text-2xl text-sky-700 dark:text-sky-600">
                            {`Paul Merupu`}
                        </h1>
                    </div>
                </div>

                {/* <SectionSpacer></SectionSpacer>
                <Heading2>Experience
                    <span className="text-2xl ms-2"></span>
                </Heading2>
                <Experience></Experience> */}

                {/* <SectionSpacer></SectionSpacer>
                <Heading2>Certifications <span className="text-2xl ms-2">✔️</span>
                </Heading2>
                <Certification></Certification> */}


                {/* <SectionSpacer></SectionSpacer>
                <Heading2>Education
                    <span className="text-2xl ms-2"></span>
                </Heading2>
                <Education></Education> */}

                <SectionSpacer></SectionSpacer>
                <Heading2>
                    <Link href="/blog" className="hover:underline">
                        Latest from Blog
                    </Link>
                    <span className="text-2xl ms-2"></span>
                </Heading2>

                <BlogPostsList blogPosts={latestBlogPosts} />

                <SectionSpacer></SectionSpacer>
                <Heading2>Projects
                    <span className="text-2xl ms-2"></span>
                </Heading2>
                <Projects projects={projects}></Projects>
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
