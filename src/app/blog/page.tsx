import Link from 'next/link'

import { getBlogPostsFromApi } from '@/utils/index'

export const metadata = {
    title: 'Blog',
    description: 'Blog posts by Paul Merupu'
}

async function page(  ): Promise<JSX.Element> {

    const blogPostsRes = await getBlogPostsFromApi();
    const blogPosts = blogPostsRes?.posts?.edges || [];
    const borderClasses = `sm:border-b sm:border-slate-200  dark:border-slate-700 `;

    return (
        <div className=' grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-12 flex-col p-6 lg:p-12 xl:container mx-auto overflow-x-hidden mt-28'>
            <div className={`bg-pattern flex sm:items-center sm:justify-center ${borderClasses}`}>
                <h1 className=' text-3xl row-span-3 sticky top-0 py-8 sm:py-0'>Blog</h1>
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
                    const { srcSet: srcSetFI = null, sourceUrl: sourceUrlFI = null } = featuredImage?.node || {};
                    const excerptTrimmed = trimHtml(excerpt, 100);
                    const paddingTopClass = !featuredImage ? 'pt-6' : '';

                    return (
                        <Link key={post.databaseId} href={`/blog/${slug}`} className={`flex flex-col justify-center flex-wrap pb-6 ${paddingTopClass} ${borderClasses} `}>
                            {/* Post Image */}
                            {/* <img src={post.featured_media_data?.source_url} alt={post.title.rendered} className='w-full h-48 object-cover' /> */}
                            {/* Post Title */}
                            {/* Article Featured Image */}
                            {
                                featuredImage &&
                                <div className="top-section mb-6 overflow-hidden">
                                    <div className='hero-img sm:mx-0'>
                                        <img srcSet={srcSetFI} src={sourceUrlFI} alt={title} className='w-full aspect-3/2 object-cover transition-transform duration-300 ease-out hover:scale-105' />
                                    </div>
                                </div>
                            }
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

export const revalidate = 3600