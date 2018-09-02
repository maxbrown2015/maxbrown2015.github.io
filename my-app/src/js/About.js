import React, { Component } from 'react';
import Contact from './Contact'
import '../css/About.css'


const aboutMe = "Hello, I'm a senior at the University of Pennsylvania" +
" studying History and Computer Science. Currently, I am Web Developer for the Penn History Department and a TA for CIS110 (Intro to Computer Science). This year, I am actively looking for full-time employment at a tech firm, big or small.";

const statement = "Learning is my passion. I've been reading since I was four and have not slowed down since. I actively learn outside of the classroom, teaching myself ReactJS, Smart Contract (Blockchain) development, and the more complex aspects of Android. I'm an explorer at heart, and I love to try new things and meet new people. In my free time, I enjoy biking the city of Philadelphia and updating my written journal."
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