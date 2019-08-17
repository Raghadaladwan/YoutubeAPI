import React from 'react';
import SearchBar from './components/SearchBar';
import youtube from './components/youtube';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail'
import './App.css';

class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }
    handleSubmit = async (term) => {
        const response = await youtube.get('search', {
          params: {
            part: 'snippet',
            maxResults: 5,
            key:'AIzaSyACuXk2-OmNNXFbPbx4rm2e02yY3BCg3N0',
            q:term,
        }
        })
        this.setState({
            videos: response.data.items
        })
    };
    handleVideoSelect = (video) => {
        this.setState({selectedVideo: video})
    }

render() {
    return (
        <div className='container' style={{marginTop: '1em'}}>
            <SearchBar 
            className='search-bar'
            handleFormSubmit={this.handleSubmit}/>

                <div className="main">
                    <div className="show">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="list">
                        <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                    </div>
                </div>
            </div>
        
    )
}
}

export default App;