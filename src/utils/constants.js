
const YOUTUBE_VIDEO_API_KEY = process.env.REACT_APP_YOUTUBE_VIDEO_API_KEY;

// if (!YOUTUBE_VIDEO_API_KEY) {
//   throw new Error('YOUTUBE_VIDEO_API_KEY environment variable is not set');
// }

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+YOUTUBE_VIDEO_API_KEY;
 
export const YOUTUBE_SEARCH_API= "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";