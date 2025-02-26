import React, { type JSX } from 'react';
import { redirect } from 'next/navigation'
import { formatWpDateString, getBlogPostsFromApi, getBlogPostFromApi } from '@/utils/index'
import Link from 'next/link'
import CodeHighlighter from '@/components/CodeHighlighter'
import readingTime from 'reading-time'
import type { Metadata, ResolvingMetadata } from 'next'
import { parseFromString } from 'dom-parser';

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const slug = params.slug

    try {
        const resPost = await getBlogPostFromApi({ slug: slug });
        const postResGraphQL = resPost?.post || null;
        // Getting DOM model
        const excerptDom = parseFromString(postResGraphQL.excerpt);
        const excerptPTag = excerptDom.getElementsByTagName('p')?.[0] || null;
        let excerptText = '';
        if( excerptPTag && excerptPTag.firstChild ){
            excerptText = excerptPTag.firstChild.textContent || '';
        } else {
            excerptText = postResGraphQL.excerpt;
        }


        return {
            title: postResGraphQL.title,
            description: excerptText,
            openGraph: {
                images: [postResGraphQL.featuredImage?.node.sourceUrl]
            }
        }

    } catch (error) {
        console.error(error);
        return {
            title: 'Blog Post',
            description: 'Blog Post'
        }
    }


}

async function index({ params }: { params: Promise<{ slug: string }> }): Promise<JSX.Element> {

    // Dynamic route path in Next.js

    const slug = (await params).slug;
    let postResGraphQL = null
    try {
        const resPost = await getBlogPostFromApi({ slug: slug });
        postResGraphQL = resPost?.post || null;

    } catch (error) {
        console.error(error);
    }

    // if postData is null, redirect NextJS app to 404
    if (!postResGraphQL || postResGraphQL.post === 0) {
        return redirect('/404')
    }

    const date = formatWpDateString(postResGraphQL?.date);

    let recentPosts = null;
    try {
        const recentPostsRes = await getBlogPostsFromApi();
        const recentAllPosts = recentPostsRes?.posts?.edges || [];

        if (recentAllPosts.length > 0) {
            recentPosts = recentAllPosts?.filter?.((edge: any) => edge?.node?.slug !== slug);
        }
    } catch (error) {
        console.error(error);
    }

    const negativeMarginTitleAndHero = `md:-ms-40`;
    const paddingClasses = `py-12`
    const postContent = postResGraphQL.content || '';

    // Reading time
    let readingTimeStr: (string | null) = null;
    try {

        const readingTimeInfo = readingTime(postContent);
        if (readingTimeInfo?.text) {
            readingTimeStr = readingTimeInfo.text;
        }

    } catch (error) {
        console.error('Reading time error', error);
    }

    let hasCodeBlock = false;
    if (postContent.includes('<code')) {
        hasCodeBlock = true;
    }

    return (
        <div className='my-16 md:my-28 overflow-x-hidden'>


            <div className="grid grid-cols-1 md:grid-cols-12 gap-x-6 lg:gap-x-6 p-6 md:p-0">

                {/* <div className=" border-e border-e-slate-200 dark:border-slate-700"> */}

                <div className={`md:col-start-4 md:col-span-6 ${negativeMarginTitleAndHero} ${paddingClasses} relative`}>

                    {/* Pattern */}
                    <div className="absolute w-full bg-pattern top-0 h-full scale-x-125">
                        {/* Nothing goes here */}
                    </div>

                    <h1 className={`text-3xl md:text-4xl xl:text-5xl font-extralight z-10 relative text-slate-800 dark:text-slate-300`}>
                        {/* Post Title */}
                        {postResGraphQL && postResGraphQL.title}
                    </h1>
                    {/* Post Date */}
                    <div className=" inline-flex flex-wrap items-baseline z-10 relative mt-3 text-slate-700 dark:text-slate-400">
                        <time className='  block ' dateTime={postResGraphQL.date}>{date}</time>
                        {
                            readingTimeStr &&
                            <>
                                <span className='mx-3 sm:mx-4'>|</span> <span className=' block '>{readingTimeStr}</span>
                            </>
                        }
                    </div>

                </div>
                <div className='md:col-span-3'></div>

                {/* Second Level (Row) */}
                <div></div>
                <div className={`md:col-span-6 md:col-start-4 `}>
                    {
                        postResGraphQL && postResGraphQL?.featuredImage &&
                        <div className={`hero-img -mx-6 sm:mx-0 md:-me-0 ${negativeMarginTitleAndHero}`}>
                            <img
                                src={postResGraphQL?.featuredImage?.node.sourceUrl}
                                srcSet={postResGraphQL?.featuredImage?.node.srcSet}
                                alt={postResGraphQL?.featuredImage?.node.altText}
                                className='w-full object-cover'
                            />
                        </div>
                    }
                    <div className='article-body text-lg mt-12 sm:px-6 md:px-0 max-w-prose m-auto'>
                        {/* Post Content */}
                        <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
                    </div>
                </div>
                <aside className="sidebar-right md:col-span-3 md:me-6 border-t border-slate-400 dark:border-slate-600 pt-6 md:pt-6 mt-6 md:mt-0 md:border-none">
                    {
                        recentPosts && recentPosts?.length > 0 &&
                        <RecentPosts recentPosts={recentPosts}></RecentPosts>
                    }
                </aside>
            </div>

            {
                hasCodeBlock &&
                <CodeHighlighter></CodeHighlighter>
            }

        </div>
    )
}

export default index

const RecentPosts = ({ recentPosts }: { recentPosts: Array<any> }) => {
    return (
        <div className="recent-posts">
            <h2 className='text-sky-700 dark:text-sky-600 text-2xl font-light leading-4 mb-6'>Recent Posts</h2>
            <ul>
                {recentPosts?.map?.(({ node: post }, index: number) =>

                    <li key={`recent-post-${index}`}>
                        <Link href={`/blog/${post.slug}`} className=' text-gray-500 hover:text-gray-900 dark:text-slate-400 dark:hover:text-slate-300 block mb-2 '>{post.title}</Link>
                    </li>
                )}
            </ul>
        </div>
    )
}

export const revalidate = 3600