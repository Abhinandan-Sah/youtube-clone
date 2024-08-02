import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard.js';
import { Link } from 'react-router-dom';

import { YOUTUBE_VIDEO_API } from '../utils/constants';

const VideoContainer = () => {

  const [videos, setVideos] = useState(null);



  useEffect(()=>{
    getVideos();
  },[]);

  const getVideos = async()=>{
     const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json);
    setVideos(json.items);
    // console.log(json.items)
  }

  if(videos===null){ return (<h1>Loading...</h1>)};


  return (
    <div className='flex flex-wrap justify-center'>
      {videos.map((video) => 
       <Link key={video.id} to={"/watch?v="+video.id}> <VideoCard key={video.id} videoInfo={video}/></Link>
      )};
        
    </div>
  )
}

export default VideoContainer;
