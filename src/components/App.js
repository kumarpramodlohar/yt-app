import React,{useEffect, useState} from 'react';
import SearchBar from './SearchBar';

import VideoList from '../components/VideoList';
import VideoDetails from '../components/VideoDetails';
import useVideos from '../hooks/useVideos';


const App=() => {

const [selectedVideo, setSelectedVideo]=useState(null);
const [videos, search]=useVideos('buildings');
// setSelectedVideo(response.data.items[0]);

useEffect(() => {
setSelectedVideo(videos[0]);
}, [videos]);

   return (
    <div className="ui container">
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
     <VideoDetails video={selectedVideo} />
     </div>
     <div className="five wide column">
     <VideoList 
     onVideoSelect={(video)=>setSelectedVideo(video)} 
     videos={videos} 
     />
    </div>
    </div>
    </div>
    </div>
  );

};

export default App;
