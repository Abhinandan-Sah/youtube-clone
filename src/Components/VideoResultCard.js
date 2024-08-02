import React from 'react'

const VideoResultCard = ({videoInfo}) => {
    const {snippet, statistics} = videoInfo;
    const{channelTitle, title, thumbnails} = snippet;
    return (
      <div className='flex gap-5 p-2 m-2 shadow-lg rounded-lg'>
        <img className='rounded-lg' src={thumbnails.medium.url} alt='thumbnail'/>
        <ul className='w-full'>
          <li className='w-full font-bold py-2'>{title}</li>
          <li>{channelTitle}</li>
          {/* <li>{statistics.viewCount} views</li> */}
        </ul>
      </div>
    )
}

export default VideoResultCard