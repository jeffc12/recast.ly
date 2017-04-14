
class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
      current:window.exampleVideoData[0],
      list:window.exampleVideoData
    }
  }

  componentDidMount() {
    //add in words from search youtube
    this.findYoutubeVideos('Shiba');
  }

  findYoutubeVideos(find) {
    this.props.searchYouTube(
      {key:this.props.API_KEY, query:find, max: 10}, (videos) =>
      this.setState({
          current: videos[0],
          list: videos
        })
    )
  }

    viewVideo(video) {
      this.setState({
        current: video
      });
    }

    render() {

      return (
        <div>
          <Nav currentChange={this.findYoutubeVideos.bind(this)}/>
          <div className="col-md-7">
            <VideoPlayer video={this.state.current}/>
          </div>
          <div className="col-md-5">
            <VideoList
            viewVideo={this.viewVideo.bind(this)}
            videos={this.state.list}
            />
          </div>
        </div>
      )
    }
}


window.App = App;
