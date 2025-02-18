import React from 'react'
import { redirect } from 'next/navigation'
import { formatWpDateString, getBlogPostsFromApi } from '@/utils/index'
import Link from 'next/link'
import CodeHighlighter from '@/components/CodeHighlighter'

async function index({ params }: { params: Promise<{ slug: string }> }): Promise<JSX.Element> {

    // Dynamic route path in Next.js
    let postData = null;
    const slug = (await params).slug;
    try {
        const postDataPromise = await fetch(`https://blog-cms.paulmerupu.com/wp-json/wp/v2/posts?slug=${slug}`, {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-store', // Prevents caching
                Pragma: 'no-cache',          // HTTP/1.0 compatibility
            }
        })
        postData = await postDataPromise.json();
        if (postData?.[0]?.featured_media) {
            const featuredMediaPromise = await fetch(`https://blog-cms.paulmerupu.com/wp-json/wp/v2/media/${postData[0].featured_media}`, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-store', // Prevents caching
                    Pragma: 'no-cache',          // HTTP/1.0 compatibility
                }
            })
            const featuredMediaData = await featuredMediaPromise.json();
            // console.log( 'featuredMediaData', featuredMediaData );
            postData[0].featured_media_data = featuredMediaData;
        }
        // console.log('postData from single blog post page', postData);

    } catch (error) {
        console.error(error);
        return redirect('/404')
    }
    // console.log( 'postData', postData );

    // if postData is null, redirect NextJS app to 404
    if (!postData || postData.length === 0) {
        return redirect('/404')
    }

    const date = formatWpDateString(postData[0].date);

    let recentPosts = null;
    try{
        recentPosts = await getBlogPostsFromApi();
        recentPosts = recentPosts.filter( post => post.slug !== slug );
    } catch (error) {
        console.error(error);
    }

    const negativeMarginTitleAndHero = `md:-ms-40`;
    const paddingClasses = `lg:ps-8 xl:ps-12`
    const postContent = postData[0].content.rendered || '';

    let hasCodeBlock = false;
    if (postContent.includes('<code')) {
        hasCodeBlock = true;
    }

    return (
        <div className='my-28'>


            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-6 p-6 md:p-0">

                {/* <div className=" border-e border-e-slate-200 dark:border-slate-700"> */}
                
                <div className={`md:col-start-4 md:col-span-6 ${negativeMarginTitleAndHero} ${paddingClasses}`}>
                    <h1 className={`text-3xl md:text-4xl xl:text-5xl font-extralight`}>
                        {/* Post Title */}
                        {postData && postData[0].title.rendered}
                    </h1>
                    {/* Post Date */}
                    <time className=' text-slate-700 dark:text-slate-400 mt-2 block ' dateTime={postData[0].date}>{date}</time>
                    
                </div>
                <div className='md:col-span-3'></div>

                {/* Second Level (Row) */}
                <div></div>
                <div className={`md:col-span-6 md:col-start-4 ${paddingClasses}`}>
                    {
                        postData && postData[0].featured_media_data &&
                        <div className={`hero-img mb-12 sm:mx-0 ${negativeMarginTitleAndHero}`} dangerouslySetInnerHTML={{ __html: postData[0].featured_media_data.description.rendered }}></div>
                    }
                    <div className='article-body text-lg mt-4 sm:px-6 md:px-0 max-w-prose m-auto'>
                        {/* Post Content */}
                        <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
                    </div>
                </div>
                <aside className="sidebar-right md:col-span-3 md:me-6 border-t pt-6 md:pt-0 md:border-none">
                    {
                        recentPosts && recentPosts?.length > 0 &&
                        <div className="recent-posts">
                            <h2 className='text-sky-700 dark:text-sky-600 text-2xl font-light leading-4 mb-6'>Recent Posts</h2>
                            <ul>
                                {recentPosts?.map?.( post =>

                                    <li >
                                        <Link href={`/blog/${post.slug}`} className=' text-gray-800 dark:text-slate-300 block mb-2 '>{post.title.rendered}</Link>
                                    </li>
                                ) }
                            </ul>
                        </div>
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
