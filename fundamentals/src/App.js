import React, { Component } from 'react';
import uuid from 'uuid'
import Projects from './Components/Projects'
import AddProject from './Components/AddProject'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      projects: []
    }
  }
  // everytime component is rerendered
  componentWillMount(){
    this.setState({projects: [
        {
          id: uuid.v4(),
          title: "Business Website",
          category: "Web Design"
        },
        {
          id: uuid.v4(),
          title: "Social App",
          category: "Mobile Developemnt"
        },
        {
          id: uuid.v4(),
          title: "Ecommerce Shopping Cart",
          category: "Web Developemnt"
        }
      ]
    })
  }

  handleAddProject = (project) => {
    // console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects})
  }
  handleDeleteProject = (id) => {
     let projects = this.state.projects;
     let index = projects.findIndex(x => x.id === id)
     projects.splice(index)
     this.setState({projects:projects})
  }

  render() {
    return (
      <div className="App">
          <AddProject addProject={this.handleAddProject.bind(this)}/>
          <Projects onDelete={this.handleDeleteProject.bind(this)}projects={this.state.projects} />
      </div>
    );
  }
}

export default App;
