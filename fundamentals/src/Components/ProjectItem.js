import React, { Component } from 'react';

class ProjectItem extends Component {
	deleteProject = (id) => {
		this.props.onDelete(id)
		// console.log('test');
	}
  render() {

    return (
      <li className="Project">
      		{this.props.project.title} | {this.props.project.category} <a href='#' onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
      </li>
    );
  }
}

export default ProjectItem;
