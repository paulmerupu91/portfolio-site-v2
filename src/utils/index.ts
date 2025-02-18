// import gqlClient from './gqlClient';

export function formatWpDateString( dateString : string ) {
  const date = new Date( dateString );

    // To local date string
  return date.toLocaleDateString( 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    // timeZone: "EST",
    // timeZoneName: 'short',
  } );
}



export function getBlogPostsFromApi() {
    return fetch('https://blog-cms.paulmerupu.com/wp-json/wp/v2/posts', {
            method: 'GET',
            headers: {
                'Cache-Control': 'no-store', // Prevents caching
                Pragma: 'no-cache',          // HTTP/1.0 compatibility
            }
        })
        .then(async response => await response.json())
}

