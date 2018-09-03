import React, { Component } from 'react';
import '../css/Work.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import '../css/Fade.css'
import ScrollReveal from 'scrollreveal'
import Fade from '@material-ui/core/Fade'
import AnimateHeight from 'react-animate-height'

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayFullWork: false,
      totalHeight: '100%',
    }
    this.renderFullWork = this.renderFullWork.bind(this);
    this.renderToggleWorkButton = this.renderToggleWorkButton.bind(this);
    this.toggleFullWork = this.toggleFullWork.bind(this);
  }

  componentDidMount() {
    const config = {
      origin: 'right',
      reset: false,
      delay: 300,
      duration: 800
    }

    ScrollReveal().reveal(this.refs.item1, config);
    ScrollReveal().reveal(this.refs.item2, config);
    ScrollReveal().reveal(this.refs.item3, config);
  }

  renderFullWork() {

    const fullWork = (<div>
      <div className="Work-item">
      <div className="Work-item-header" >Event Official</div>
            <div className="Work-item-details">Penn Recreation, March 2016 - June 2016</div>
            <ul className="Work-item-list">
              <li>Responsibilities included setting up events, handling registrations, and monitering player behavior</li>
              <li>Helped introduce an intramural futsal league to Penn Recreation</li>
            </ul>          
      </div>
      <div className="Work-item">
      <div className="Work-item-header">Landscaper and Manual Laborer</div>
            <div className="Work-item-details">JSCG Holdings, May 2016 - August 2016</div>
            <ul className="Work-item-list">
              <li>Responsibilities included mowing lawns, demolishing and refurbishing apartments, and general labor</li>
              <li>Worked in teams of 3 - 4 in various sites during the day</li>
            </ul>          
      </div>
      <div className="Work-item">
      <div className="Work-item-header">Soccer Referee</div>
            <div className="Work-item-details">United States Soccer Federation, March 2011 - December 2017</div>
            <ul className="Work-item-list">
              <li>Started refereeing soccer at age 13</li>
              <li>Responsibilities included managing players, parents and coaches, working in teams of three and four, and understanding and applying the rules of the game</li>
              <li>Received Ohio North's Young Referee of the Year award (2016) and was invited to tournaments in Ohio, Pennsylvania, Indiana, and Illinois</li>
            </ul>          
      </div>
    </div>);
    
    return (<Fade in={this.state.displayFullWork} timeout={2000}>
    {fullWork}
      </Fade>)
    
  }

  toggleFullWork() {
    this.setState((prevState) => {
      const newHeight = !prevState.displayFullWork ? '500' : '250'
      return {displayFullWork: !prevState.displayFullWork, totalHeight: newHeight}
    })
  }

  renderToggleWorkButton() {
    if (this.state.displayFullWork) {
      return (
        <div className="toggleFullWorkButton" onClick={this.toggleFullWork}>
        Hide 
        </div>
      )
    } else {
      return (
        <div className="toggleFullWorkButton" onClick={this.toggleFullWork}>
        See Full Experience
        </div>
      )
    }
  }


  render() {
    const fullWork =  this.state.displayFullWork ? this.renderFullWork() : <div></div>;
    return (
      <AnimateHeight height={this.state.totalHeight} duration={1000} >
      <div className="Work">
        <div className="Work-header"><h2>Work Experience</h2></div>
        <hr className="Work-line"></hr>
        <div className="Work-content">
          <div className="Work-item" ref={'item1'}>
            <div className="Work-item-header">Web Developer</div>
            <div className="Work-item-details">Penn History Department, Fall 2017 - Present</div>
            <ul className="Work-item-list">
              <li>Primary position is developing maintainable and interactive web projects for the Department</li>
              <li>Other roles include acting as a liason to Penn Computing, being a student consultant during the Department's re-design process, and finding content for the website</li>
              <li>Worked over the summer on Pathways, a full-stack JS course visualization tool</li>
            </ul>
          </div>
          <div className="Work-item" ref={'item2'}>
          <div className="Work-item-header">CIS 110 Teaching Assistant</div>
            <div className="Work-item-details">University of Pennsylvania, December 2017 - Present</div>
            <ul className="Work-item-list">
              <li>Teach a two hour recitation, develop course materials, grade assignments, and hold open Office Hours for struggling students</li>
              <li>Hired after passing a technical interview and promoted to full TA after good performance</li>
            </ul>          
          </div>
          <div className="Work-item" ref={'item3'}>
          <div className="Work-item-header">Library Assistant</div>
            <div className="Work-item-details">University of Pennsylvania, September 2016 - Present</div>
            <ul className="Work-item-list">
              <li>Front desk librarian at the Math-Physics library (Work Study)</li>
              <li>Responsibilities include processing books, assisting patrons, and IT support</li>
            </ul>          
          </div>
          {fullWork}
        </div>
        <div>{this.renderToggleWorkButton()}</div>
      </div>
      </AnimateHeight>
    )
  }
}

export default Work;