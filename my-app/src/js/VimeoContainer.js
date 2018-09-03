import React, { Component } from 'react';
//import '../css/ProjectsItem.css';
import Vimeo from 'react-vimeo'

class VimeoContainer extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div >
        <Vimeo
            video={268284537}
            width={640}
            height={480}
            autoplay
            volume={1}
            paused={false}
            //onPause={this.handlePlayerPause}
            //onPlay={this.handlePlayerPlay}
          />
      </div>
    )
  }
}

export default VimeoContainer;