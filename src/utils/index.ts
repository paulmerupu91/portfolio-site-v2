import { gql, request } from 'graphql-request';
const environment = process.env.NODE_ENV as string;
// env for blog graphql
const BLOG_GRAPHQL = process.env.BLOG_CMS_GRAPHQL_URL as string;

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

const statusFilter = (environment === "development" || environment === "local") ? ["DRAFT", "PUBLISH"] : ["PUBLISH"];

const WP_APP_PASSWORD = process.env.WP_APPLICATION_PASSWORD_BASIC_TOKEN as string;
const WP_USERNAME = process.env.WP_USERNAME as string;

function getRequestHeaders() {
    if ((environment === 'development' || environment === 'local') && WP_APP_PASSWORD && WP_USERNAME) {
        const token = Buffer.from(`${WP_USERNAME}:${WP_APP_PASSWORD}`).toString('base64');
        return {
            Authorization: `Basic ${token}`
        };
    }
    return undefined;
}

export async function getBlogPostFromApi({ slug }: { slug: string }): Promise<any> {

    const isId = !isNaN(Number(slug));
    const idType = isId ? 'DATABASE_ID' : 'SLUG';

    const document = gql`
        query GetPost($id: ID!, $idType: PostIdType) {
            post(id: $id, idType: $idType) {
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
                status
            }
        }
    `;

    return await request(BLOG_GRAPHQL, document, { id: slug, idType }, getRequestHeaders());

}

export async function getBlogPostsFromApi(after?: string, count: number = 9): Promise<any> {

    const document = gql`
        query GetPosts($stati: [PostStatusEnum], $after: String, $first: Int) {
            posts(where: { stati: $stati }, first: $first, after: $after) {
                pageInfo {
                    endCursor
                    hasNextPage
                    hasPreviousPage
                    startCursor
                }
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

    return await request(BLOG_GRAPHQL, document, { stati: statusFilter, after, first: count }, getRequestHeaders());
}
export const getSiteTitleAndDescriptionFromCMS = async () => {
    const document = gql`
        query NewQuery {
            allSettings {
                generalSettingsTitle
                generalSettingsDescription
            }
        }
    `;
    return await request(BLOG_GRAPHQL, document, {}, getRequestHeaders());
}

export async function getProjectsFromApi(after?: string, count: number = 9): Promise<any> {
    const document = gql`
        query GetProjects($stati: [PostStatusEnum], $after: String, $first: Int) {
            projects(where: { stati: $stati }, first: $first, after: $after) {
                pageInfo {
                    endCursor
                    hasNextPage
                    hasPreviousPage
                    startCursor
                }
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

    return await request(BLOG_GRAPHQL, document, { stati: statusFilter, after, first: count }, getRequestHeaders());
}
