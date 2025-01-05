import React from 'react'
import { redirect } from 'next/navigation'

async function index({ params } : { params: Promise< {slug: string}> }) : Promise<JSX.Element> {

    // Dynamic route path in Next.js
    let postData = null;
    const slug = (await params).slug;
    try{
        const postDataPromise = await fetch(`https://blog-cms.paulmerupu.com/wp-json/wp/v2/posts?slug=${slug}`, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-store', // Prevents caching
                    Pragma: 'no-cache',          // HTTP/1.0 compatibility
                }
            })
        postData = await postDataPromise.json();
        if( postData?.[0]?.featured_media ) {
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
        // console.log( 'postData from single blog post page', postData );
            // .then( data => data.json() ).catch( error => console.error( 'err', error ) );
    } catch( error ) {
        console.error( error );
        return redirect( '/404' )
    }
        // console.log( 'postData', postData );

    // if postData is null, redirect NextJS app to 404
    if( !postData || postData.length === 0 ) {
        return redirect( '/404' )
    }


  return (
    <div className='my-28'>
        

        <div className="grid grid-cols-4 gap-4">

            <div className=" border border-slate-300 dark:border-slate-700">

            </div>
            <div className="col-span-2">
                <h1 className='text-3xl font-bold'>
                    {/* Post Title */}
                    { postData && postData[0].title.rendered }
                </h1>
                {
                    postData && postData[0].featured_media_data &&
                    <div className='hero-img my-12' dangerouslySetInnerHTML={{ __html:postData[0].featured_media_data.description.rendered }}></div>
                }
                <div className='text-lg mt-4'>
                    {/* Post Content */}
                    <div dangerouslySetInnerHTML={ { __html: postData[0].content.rendered } }></div>
                </div>
            </div>
            <aside className="">

            </aside>
        </div>

    </div>
  )
}

export default index
