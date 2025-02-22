import { gql, request } from 'graphql-request';

export function formatWpDateString(dateString: string) {
    const date = new Date(dateString);

    // To local date string
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        // timeZone: "EST",
        // timeZoneName: 'short',
    });
}



export async function getBlogPostsFromApi(): Promise<any> {
    // return fetch('https://blog-cms.paulmerupu.com/wp-json/wp/v2/posts', {
    //         method: 'GET',
    //         headers: {
    //             'Cache-Control': 'no-store', // Prevents caching
    //             Pragma: 'no-cache',          // HTTP/1.0 compatibility
    //         }
    //     })
    //     .then(async response => await response.json())

    const document = gql`
        query {
            posts {
                edges {
                node {
                    title
                    content
                    slug
                    excerpt
                    terms {
                    edges {
                        node {
                        slug
                        name
                        }
                    }
                    }
                    date
                    link
                    modified
                    databaseId
                    featuredImage {
                    node {
                        id
                        sourceUrl(size: LARGE)
                        srcSet(size: LARGE)
                        mediaItemUrl
                        link
                        altText
                    }
                    }
                }
                }
            }
        }
    `;

    return await request('https://blog-cms.paulmerupu.com/graphql', document)
}

