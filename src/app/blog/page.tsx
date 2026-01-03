import Link from 'next/link'

import { getBlogPostsFromApi } from '@/utils/index';
import BlogPostsList from './../../components/BlogPostsList';

export const metadata = {
    title: 'Blog',
    description: 'Blog posts by Paul Merupu'
}

type Props = {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function page({ searchParams }: Props): Promise<JSX.Element> {

    const { after } = await searchParams;
    const blogPostsRes = await getBlogPostsFromApi(after as string);
    const blogPosts = blogPostsRes?.posts?.edges || [];
    const pageInfo = blogPostsRes?.posts?.pageInfo || {};
    const borderClasses = `sm:border-b sm:border-slate-200  dark:border-slate-700 `;

    return (
        <div className=' grid sm:grid-cols-2 lg:grid-cols-3 auto-rows-min gap-12 flex-col p-6 lg:p-12 xl:container mx-auto overflow-x-hidden mt-28'>
            <div className={`bg-pattern flex sm:items-center sm:justify-center ${borderClasses}`}>
                <h1 className=' text-3xl row-span-3 sticky top-0 py-8 sm:py-0'>Blog</h1>
            </div>
            <BlogPostsList blogPosts={blogPosts} />
            {
                pageInfo?.hasNextPage &&
                <div className="col-span-full flex justify-center mt-12">
                    <Link
                        href={`/blog?after=${pageInfo.endCursor}`}
                        className="px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        Next →
                    </Link>
                </div>
            }
            {
                pageInfo?.hasPreviousPage &&
                <div className="col-span-full flex justify-center mt-12">
                    <Link
                        href={`/blog?before=${pageInfo.startCursor}`}
                        className="px-6 py-3 border border-slate-300 dark:border-slate-600 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                    >
                        ← Previous
                    </Link>
                </div>
            }
        </div>
    )
}

export default page