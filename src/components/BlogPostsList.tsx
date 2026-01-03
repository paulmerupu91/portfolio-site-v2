import Link from "next/link";

const borderClasses = `sm:border-b sm:border-slate-200  dark:border-slate-700 `;
export default function BlogPostsList({ blogPosts }: { blogPosts: any }) {
    return (
        blogPosts?.map?.((edge: any) => {

            const post = edge.node;
            const {
                title,
                slug,
                excerpt,
                date,
                featuredImage = null
            } = post;

            const localTimeStr = new Date(date).toLocaleString('en-US', { dateStyle: 'long' });
            const { srcSet: srcSetFI = null, sourceUrl: sourceUrlFI = null } = featuredImage?.node || {};
            const excerptTrimmed = trimHtml(excerpt, 100);
            const paddingTopClass = !featuredImage ? 'pt-6' : '';

            return (
                <Link key={post.databaseId} href={`/blog/${slug || post.databaseId}`} className={`flex flex-col gap-4 pb-6 ${paddingTopClass} ${borderClasses} `}>
                    {
                        featuredImage &&
                        <div className="top-section overflow-hidden">
                            <div className='hero-img w-full sm:mx-0'>
                                <img width="1600" height="900" srcSet={srcSetFI} src={sourceUrlFI}
                                    alt={title}
                                    className='w-full aspect-[16/9] object-cover transition-transform duration-300 ' // ease-out hover:scale-105
                                />
                            </div>
                        </div>
                    }
                    <div className="bottom-section ">
                        <h2 className='mb-3 font-bold text-2xl'>{title}</h2>
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
    );
}

// Trim innerHTML to 100 characters
function trimHtml(html: string, maxChars: number, elipsis = true): string {

    const trimmed = html.substring(0, maxChars);
    if (elipsis && html.length > maxChars) {
        return `${trimmed}...`;
    }
    return trimmed;
}

export const revalidate = 3600