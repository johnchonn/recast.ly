import exampleVideoData from '../data/exampleVideoData.js';
// console.log(exampleVideoData);
import VideoList from './VideoList.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //access things in here for event handler
      videoList: [],
      done: false
    };
  }
  //make relevant functions here
  // someFunc() {
  //   this.setState({

  //   });
  // }

  //render function
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><h5><em>videoPlayer</em> view goes here</h5></div>
          </div>
          <div className="col-md-5">
            <VideoList videos={exampleVideoData}/>
          </div>
        </div>
      </div>
    );
  }


}
// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <div><h5><em>videoPlayer</em> view goes here</h5></div>
//       </div>
//       <div className="col-md-5">
//         <VideoList items={exampleVideoData}/>
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;


