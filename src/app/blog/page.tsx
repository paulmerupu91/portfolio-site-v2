import React, { useEffect } from 'react'
import Link from 'next/link'

import { getBlogPostsFromApi } from '@/utils/index'

async function page(): Promise<JSX.Element> {

    const blogPosts = await getBlogPostsFromApi()
    // console.log('blogposts', blogPosts)
    // const blogPosts = getBlogPostsFromApi( )

    return (
        <div className=' grid md:grid-cols-3 auto-rows-min gap-12 flex-col p-6 lg:p-12 xl:container mx-auto overflow-x-hidden mt-28'>
            <div>
                <h1 className=' text-3xl row-span-3 sticky top-0'>Blog</h1>
            </div>
            {
                blogPosts?.map?.((post: any) => {
                    return (
                        <Link key={post.id} href={`/blog/${post.slug}`} className='pb-6 border-b border-slate-200  dark:border-slate-700 dark:hover:bg-slate-900'>
                            {/* Post Image */}
                            {/* <img src={post.featured_media_data?.source_url} alt={post.title.rendered} className='w-full h-48 object-cover' /> */}
                            {/* Post Title */}
                            <h2 className=' text-sky-700 mb-3 font-light text-2xl'>{post.title.rendered}</h2>
                            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}></div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default page
