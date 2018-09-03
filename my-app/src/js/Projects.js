import React, { Component } from 'react';
import '../css/Projects.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectsItem from './ProjectsItem'

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.renderProjectItems = this.renderProjectItems.bind(this);
  }

  renderProjectItems() {
    return (
      <div className="Projects-container">
        <div className="Projects-row">
          <ProjectsItem data={pathwaysInformation}/>
          <ProjectsItem data={casinoInformation}/>
        </div>
        <div className="Projects-row">
          <ProjectsItem data={dailyPoemInformation}/>
          <ProjectsItem data={whenToDanceInformation}/>
        </div>
        <div className="Projects-row">
          <ProjectsItem data={featuredUndergradInformation}/>
          <ProjectsItem data={personalWebsiteInformation}/>
        </div>
        <div className="Projects-row">
          <ProjectsItem data={zionInformation}/>
        </div> 
      </div>
    )
  }
  
  render() {
    return (<div className="Projects">
      <div className="Projects-header"><h2>Projects</h2></div>
      <hr className="Projects-line"></hr>
      {this.renderProjectItems()}

    </div>)
  }
}

const pathwaysInformation = {
  title: "Pathways",
  points: [],
  link: '',
};
const casinoInformation = {
  title: "Casino",
  points: [],
  link: '',
};
const dailyPoemInformation = {
  title: "DailyPoemProject",
  points: ['Web page that allows users to sign up to receive a poem every morning.'],
  link: '',
};
const featuredUndergradInformation = {
  title: "Featured Undergraduates",
  points: [],
  link: '',
};
const whenToDanceInformation = {
  title: "WhenToDance",
  points: [],
  link: '',
};
const personalWebsiteInformation = {
  title: "Personal Website",
  points: [],
  link: '',
};

const zionInformation = {
  title: "Zion Video",
  points: [],
  link: 'https://vimeo.com/268284537',
};

export default Projects;