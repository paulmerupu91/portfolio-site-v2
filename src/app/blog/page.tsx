import React, { useEffect } from 'react'
import Link from 'next/link'

function getBlogPostsFromApi() {
    return fetch('https://blog-cms.paulmerupu.com/wp-json/wp/v2/posts', {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-store', // Prevents caching
                Pragma: 'no-cache',          // HTTP/1.0 compatibility
            }
        })
        .then(async response => await response.json())
}

async function page(): Promise<JSX.Element> {

    const blogPosts = await getBlogPostsFromApi()
    // console.log('blogposts', blogPosts)
    // const blogPosts = getBlogPostsFromApi( )

    return (
        <div className='flex gap-8 md:grid auto-rows-min xl:gap-12 flex-col p-6 lg:p-12 xl:container mx-auto overflow-x-hidden mt-28'>
            <h1>Blog</h1>
            {
                blogPosts?.map?.((post: any) => {
                    return (
                        <Link key={post.id} href={`/blog/${post.slug}`}>
                            <h2>{post.title.rendered}</h2>
                            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }}></div>
                        </Link>
                    )
                })
            }
        </div>
    )
}

export default page
