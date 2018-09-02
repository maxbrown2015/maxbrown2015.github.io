import React, { Component } from 'react';
import '../css/ProjectsItem.css';

class ProjectsItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("rendered");
    return (<div className="ProjectsItem">{this.props.data.title}</div>)
  }
}

export default ProjectsItem;