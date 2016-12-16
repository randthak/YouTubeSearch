import React, {Component} from 'react';

const VideoDesc = ({video}) =>{
    if(video){
        const vidDescr = video.snippet.description;
        const videoId = video.id.videoId;
        const videoUrl = `https://www.youtube.com/embed/${videoId}`;

        return(
            <div>
                <iframe src={videoUrl}/>
                <div>{vidDescr}</div>

            </div>
        );
    }else{
        return(
            <div>Loading...</div>
        );
    }

};

export default VideoDesc;