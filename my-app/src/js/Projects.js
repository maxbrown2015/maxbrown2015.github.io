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
      <div Projects-container>
        <div className="Projects-row">
          <ProjectsItem data={pathwaysInformation}/>
          <ProjectsItem data={casinoInformation}/>
          <ProjectsItem data={whenToDanceInformation}/>
        </div>
        <div className="Projects-row">
          <ProjectsItem data={dailyPoemInformation}/>
          <ProjectsItem data={featuredUndergradInformation}/>
          <ProjectsItem data={personalWebsiteInformation}/>
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
  points: []
};
const casinoInformation = {
  title: "Casino",
  points: []
};
const dailyPoemInformation = {
  title: "DailyPoemProject",
  points: []
};
const featuredUndergradInformation = {
  title: "Featured Undergraduates",
  points: []
};
const whenToDanceInformation = {
  title: "WhenToDance",
  points: []
};
const personalWebsiteInformation = {
  title: "Personal Website",
  points: []
};

export default Projects;