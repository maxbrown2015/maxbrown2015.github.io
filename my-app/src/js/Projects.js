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
  points: ['Spring/Summer 2018', 'A full-stack JS web that visualizes the Penn History Department\'s course offerings', 'Responsibilities included handling user interaction, front-end design, and integrating the Vis.js data visualization library', 'Integrated a MongoDB back-end which stores course data', 'Created a user-friendly tool in ReactJS that allows clients to modify the MongoDB data set', 'Ongoing',  'Technologies used: JS, Bootstrap, JQuery, ReactJS, Vis.js, ScrollReveal.js, MongoDB, Mongoose'],
  link: '',
  git: 'https://github.com/slilan96/finalPathways/tree/master/server'
};
const casinoInformation = {
  title: "Casino Smart Contract",
  points: ['Spring 2018', 'A personal project with the goal to learn about Smart Contract and Blockchain development', 'Developed a cryptocurrency (MaxCoin) smart contract on the Ethereum blockchain in Solidity', 'Created a JQuery and Bootstrap UI that allowed users to register and gamble their MaxCoins on a pseudo-random coin flip', 'Technologies used: Solidity, JS, JQuery, Bootstrap'],
  link: '',
  git: 'https://github.com/maxbrown2015/CryptoCoinFlip'
};
const dailyPoemInformation = {
  title: "DailyPoemProject",
  points: ['Fall 2017', 'Created during Penn Apps Hackathon and maintained the project for three months', 'A web page that allows users to sign up to receive a poem every morning.', 'Integrated the MailChimp API into a HTML/CSS front-end', 'Emphasized community content by reaching out to Penn\'s Kelly Writers House and my network for submissions and subscribers', 'Technologies used: HTML, CSS, MailChimp Sign-up (PHP)'],
  link: 'http://dailypoemproject.com/',
  git: 'https://github.com/maxbrown2015/poetryproject.github.io'
};
const featuredUndergradInformation = {
  title: "Featured Undergraduates",
  points: ['Fall 2017', 'Commissioned by the Penn History Department to create a web page featuring undergradute achievements over the summer', 'Developed using the Drupal 6 CMS', 'Discovered the limitations of non-developer access, which had prevented the Department from styling their page', 'Technologies used: Drupal 6, HTML, CSS'],
  link: 'https://www.history.upenn.edu/undergraduate/featured-undergraduates',
  git: ''
};
const whenToDanceInformation = {
  title: "WhenToDance",
  points: ['Spring 2018', 'CIS350 Group Project (4)', 'Created a full-stack Android application that allows student dance groups to scheudle practice times', 'Implemented user registration, the scheduling algorithm, the asynchronous Google Firebase back-end, and took a leading roll in conceptualizing the project architecture', 'Practiced Agile, with consistent status updates and frequent meetings with a PM', 'Technologies used: Android, Java, Firebase, XML'],
  link: '',
  git: '',
};
const personalWebsiteInformation = {
  title: "Personal Website",
  points: ['Summer 2017, Winter 2017, Fall 2018', 'Created a personal website in raw HTML and CSS as my first personal project (Summer 2017)', 'Re-designed website using Bootstrap and added JS interactivity (Winter 2017)', 'Re-designed again using ReactJS and other JS modules (Fall 2018)', 'Technologies used: HTML5, CSS, Bootstrap, JQuery, ReactJS'],
  link: '',
};

const zionInformation = {
  title: "Zion Video",
  points: ['Spring 2018', 'Created a video using IMovie with footage taken during my Spring Break trip to Zion National Park', 'No prior video editing experience', 'More to come!  '],
  link: 'https://vimeo.com/268284537',
  git: ''
};

export default Projects;