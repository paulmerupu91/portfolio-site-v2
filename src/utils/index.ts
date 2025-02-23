import { gql, request } from 'graphql-request';
const environment = process.env.NODE_ENV;
// env for blog graphql
const BLOG_GRAPHQL = process.env.BLOG_CMS_GRAPHQL_URL;

export function formatWpDateString(dateString: string) {
    const date = new Date(dateString);

    // To local date string
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    });
}

// TO-DO: If the environment is development or local, get draft posts also 

const statusFilter = environment === "development" ? ["DRAFT", "PUBLISH"] : ["PUBLISH"];

export async function getBlogPostFromApi( {slug} : {slug: string} ): Promise<any> {

    const document = gql`
        query {
            post(id: "${slug}", idType: SLUG) {
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
    `;

    return await request( BLOG_GRAPHQL, document);

}

export async function getBlogPostsFromApi(): Promise<any> {

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

    return await request( BLOG_GRAPHQL, document)
}

