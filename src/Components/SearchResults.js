import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ButtonList from './ButtonList';
import { YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constants';
import VideoResultCard from './VideoResultCard';
import { Link } from 'react-router-dom';

const SearchResults = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  const [videos, setVideos] = useState(null);
  
  const searchQuery = useSelector(store=> store.search.searchQuery);

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async ()=>{
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchQuery+"&type=video&maxResults=40");
    const json = await data.json();
    setVideos(json?.items);
  }
  if(videos===null) return (<div className='text-center text-3xl'>Loading...</div>)
  return (
    <div className={`p-4 ${isMenuOpen? 'w-10/12 ml-auto': 'w-12/12 mx-auto'}`} >
      <ButtonList />
      {videos.map((video)=> <Link key={video?.id?.videoId} to={"/watch?v="+video?.id?.videoId}> <VideoResultCard  videoInfo={video} /></Link>)}
    </div>
  );
};

export default SearchResults;
