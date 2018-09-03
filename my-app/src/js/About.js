import React, { Component } from 'react';
import Contact from './Contact'
import '../css/About.css'


const aboutMe = "Hello, I'm a senior at the University of Pennsylvania studying History and Computer Science. Currently, I am Web Developer for the Penn History Department and a TA for CIS 110 (Intro to Computer Science). This year, I am actively looking for full-time employment.";

const statement = "I'm a jack of all trades. I have technical expertise, excellent writing skills and a knack for getting along with everyone. I've worked in teams my entire life, but I'm not afraid to take on solo projects. In addition, I'm a history buff and public policy wonk. In my free time, I enjoy biking the city of Philadelphia, listening to podcasts and updating my written journal."
class About extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
    <div className="About">
      <div className="About-header">
        <h2>About</h2>
      </div>
      <hr className="About-line"></hr>
      <div className="About-content">
      {aboutMe}
      <br></br>
      <br></br>
      {statement}
      </div>
      <div className="About-contact">
      <Contact header={false}/>
      </div>
    </div>
    );
  }
}

export default About;