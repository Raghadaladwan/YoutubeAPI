import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos , handleVideoSelect}) => {
    
    const renderedVideos =  videos.map((video) => {
        console.log(video.id);
        return <VideoItem 
        key={video.id.videoId} 
        video={video} 
        handleVideoSelect={handleVideoSelect} 
        />
       
    });
    
    return <div>{renderedVideos}</div>;
};
export default VideoList;
