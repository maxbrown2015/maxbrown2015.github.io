import React, { Component } from 'react';
import '../css/Work.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/Fade.css'

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFullWork: false
    }
    this.renderFullWork = this.renderFullWork.bind(this);
    this.renderToggleWorkButton = this.renderToggleWorkButton.bind(this);
    this.toggleFullWork = this.toggleFullWork.bind(this);
  }

  renderFullWork() {

    const fullWork = (<div>
      <div className="Work-item">
      <div className="Work-item-header">Event Official</div>
            <div className="Work-item-details">Penn Recreation, March 2016 - June 2016</div>
            <ul className="Work-item-list">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>          
      </div>
      <div className="Work-item">
      <div className="Work-item-header">Landscaper and Manual Laborer</div>
            <div className="Work-item-details">JSCG Holdings, May 2016 - August 2016</div>
            <ul className="Work-item-list">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>          
      </div>
      <div className="Work-item">
      <div className="Work-item-header">Soccer Referee</div>
            <div className="Work-item-details">United States Soccer Federation, March 2011 - December 2017</div>
            <ul className="Work-item-list">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>          
      </div>
    </div>);

    return (<ReactCSSTransitionGroup
      transitionName="fade"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={300}>
      {fullWork}
    </ReactCSSTransitionGroup>)
  }

  toggleFullWork() {
    this.setState((prevState) => {
      return {displayFullWork: !prevState.displayFullWork}
    })
  }

  renderToggleWorkButton() {
    if (this.state.displayFullWork) {
      return (
        <div className="" onClick={this.toggleFullWork}>
        Collapse
        </div>
      )
    } else {
      return (
        <div className="" onClick={this.toggleFullWork}>
        Show Full Work Experience
        </div>
      )
    }
  }


  render() {
    const fullWork = this.state.displayFullWork ? this.renderFullWork() : <div></div>    

    return (
      <div className="Work">
        <div className="Work-header"><h2>Work Experience</h2></div>
        <hr className="Work-line"></hr>
        <div className="Work-content">
          <div className="Work-item">
            <div className="Work-item-header">Web Developer</div>
            <div className="Work-item-details">Penn History Department, Fall 2017 - Present</div>
            <ul className="Work-item-list">
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>
          </div>
          <div className="Work-item">
          <div className="Work-item-header">CIS 110 Teaching Assistant</div>
            <div className="Work-item-details">University of Pennsylvania, December 2017 - Present</div>
            <ul className="Work-item-list">
              <li>Point 1</li>
              <li>Point 2</li>
              <li>Point 3</li>
            </ul>          
          </div>
          <div className="Work-item">
          <div className="Work-item-header">Library Assistant</div>
            <div className="Work-item-details">University of Pennsylvania, September 2016 - Present</div>
            <ul className="Work-item-list">
              <li>Point 1</li>
              <li>Point 2</li>
            </ul>          
          </div>
          {fullWork}
        </div>
        <div>{this.renderToggleWorkButton()}</div>
      </div>
    )
  }
}

export default Work;