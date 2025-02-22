import React, { useEffect } from 'react'
import Link from 'next/link'

import { getBlogPostsFromApi } from '@/utils/index'

async function page(  ): Promise<JSX.Element> {

    const blogPostsRes = await getBlogPostsFromApi();

    const blogPosts = blogPostsRes?.posts?.edges || [];
    console.log('blogposts', blogPosts);
    // const blogPosts = getBlogPostsFromApi( )

    return (
        <div className=' grid md:grid-cols-3 auto-rows-min gap-12 flex-col p-6 lg:p-12 xl:container mx-auto overflow-x-hidden mt-28'>
            <div>
                <h1 className=' text-3xl row-span-3 sticky top-0'>Blog</h1>
            </div>
            {
                blogPosts?.map?.((edge: any) => {

                    const post = edge.node;
                    const {
                        title,
                        slug,
                        excerpt,
                        date,
                        featuredImage = null
                    } = post;

                    const localTimeStr = new Date(date).toLocaleString();
                    console.log( 'featuredImage', featuredImage );
                    const { srcSet: srcSetFI = null, sourceUrl: sourceUrlFI = null } = featuredImage?.node || {};
                    console.log( 'featuredImage.node', featuredImage?.node );
                    console.log( 'srcSetFI', srcSetFI );
                    console.log( 'sourceUrlFI', sourceUrlFI );
                    const excerptTrimmed = trimHtml(excerpt, 100);

                    return (
                        <Link key={post.id} href={`/blog/${slug}`} className='pb-6 border-b border-slate-200  dark:border-slate-700 dark:hover:bg-slate-900'>
                            {/* Post Image */}
                            {/* <img src={post.featured_media_data?.source_url} alt={post.title.rendered} className='w-full h-48 object-cover' /> */}
                            {/* Post Title */}
                            <div className="top-section mb-6">

                                {/* Article Featured Image */}
                                {
                                    featuredImage &&
                                    <div className='hero-img sm:mx-0'>
                                        <img src={sourceUrlFI} alt={title} className='w-full aspect-3/2 object-cover' />
                                    </div>
                                }
                            </div>
                            <div className="bottom-section ">
                                <h2 className=' text-sky-700 mb-3 font-light text-2xl'>{title}</h2>
                                <div dangerouslySetInnerHTML={{ __html: excerptTrimmed }}></div>
                                <time className=' text-slate-700 dark:text-slate-400 mt-2 block '
                                    dateTime={date}
                                >
                                    {localTimeStr}
                                </time>
                            </div>

                        </Link>
                    )
                })
            }
        </div>
    )
}

export default page

// Trim innerHTML to 100 characters
function trimHtml(html: string, maxChars: number, elipsis = true): string {

    const trimmed = html.substring(0, maxChars);
    if (elipsis && html.length > maxChars) {
        return `${trimmed}...`;
    }
    return trimmed;
}
