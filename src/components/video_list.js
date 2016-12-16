import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import VideoListItem from './video_list_item';
const VideoList=({videos})=>{
    const videoItems=videos.map((video)=>{
       return <VideoListItem key={video.id.videoId} video={video}/>
    });
	return(
		<div>
			<ul>{videoItems}
			</ul>
		</div>
	);
};

export default VideoList;