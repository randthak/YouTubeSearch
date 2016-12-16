import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDesc from './components/video_description';
import YTSearch from 'youtube-api-search';

const API_KEY='AIzaSyCbNuTFSQcdedZz6h4wfVS-l-hY6S1yrfE';

class App extends Component{
	constructor(props){
		super(props);
		this.state={
			videos:[],
			selectedVideo:null
		};
		this.videoSearch('Modi');
	}
	videoSearch(term){
        YTSearch({key:API_KEY,term:term},videos=>{
        	this.setState({
			videos,selectedVideo:videos[0]
		})});
	};
	render(){
		return(
		 <div>
			<SearchBar onSearchTermChange={term=>this.videoSearch(term)}/>
			 <VideoList videos={this.state.videos} onVideoSelect={selectedVideo=>{this.setState({selectedVideo})}}/>
             <VideoDesc video={this.state.selectedVideo}/>
		 </div>
		);
	 }
}

ReactDOM.render( <App />, document.querySelector('.container'));