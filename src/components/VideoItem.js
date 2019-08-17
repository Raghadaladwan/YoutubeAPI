
import React from 'react';
import '../style/video.css';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <div onClick={ () => handleVideoSelect(video)} className=' video-item item'>
            <img 
            className='image' src={video.snippet.thumbnails.medium.url} 
            alt={video.snippet.description}/>
            
            <div className='content'>
                <div>{video.snippet.title}</div>
            </div>
        </div>
    )
};
export default VideoItem;
