import React, { Component } from 'react';
import '../css/ProjectsItem.css';
import ScrollReveal from 'scrollreveal'


class ProjectsItem extends React.Component {
  constructor(props) {
    super(props);

    this.renderBulletPoints = this.renderBulletPoints.bind(this);
    this.renderIcons = this.renderIcons.bind(this);

    //this.itemRef = React.createRef();
  }

  componentDidMount() {
    const config = {
      reset: true,
      duration: 500,
      delay: 500,
    }
    console.log(this.itemRef)
    ScrollReveal().reveal(this.refs.itemRef, config);
  }

  renderBulletPoints() {
    const listItems = this.props.data.points.map((point) => <li key={point}>{point}</li>)
    return (<div className="ProjectsItem-list-container">
      <ul>
        {listItems}
      </ul>
    </div>)
  }

  renderIcons() {
    const withLink = (<div className="ProjectsItem-icons">
    <a className="ProjectsItem-icon" href="https://github.com/maxbrown2015"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
    <a className="ProjectsItem-icon" href={this.props.data.link}><i className="fa fa-link"></i></a>
    </div>);

    const withoutLink = (<div className="ProjectsItem-icons">
    <a href="https://github.com/maxbrown2015"><i className="fa fa-github fa-2x" aria-hidden="true"></i></a>
    </div>);

    return (this.props.data.link === '' ? withoutLink : withLink)
  }


  render() {
    return (
    <div className="ProjectsItem col-md-12" ref={'itemRef'}>
      <div className="ProjectsItem-header">{this.props.data.title}</div>
      {this.renderBulletPoints()}
      <hr className="ProjectsItem-line"></hr>
      {this.renderIcons()}
    </div>
    )
  }
}

export default ProjectsItem;