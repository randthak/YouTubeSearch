import React,{Component} from 'react';
import ReactDOM from 'react-dom';
const VideoListItem= ({video})=>{
const imageUrl = video.snippet.thumbnails.default.url;
return (
	<li>
		<img src={imageUrl}/>
	</li>
);
};

export default VideoListItem;