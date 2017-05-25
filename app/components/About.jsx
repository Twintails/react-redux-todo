import React, { Component } from 'react'
import Nav from 'Nav'

export class About extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>
        <Nav/>
        <div className="row align-center">
          <div className="columns small-10 medium-8 large-6">
            <h1>About</h1>
            <p>A ToDo App for tasking oneself; based on the Udemy Course: "The Complete React Web app developer".</p>
            <h2>Dev Tooling</h2>
            <ul>
              <li><a href="//facebook.github.io/react">React</a> - React Library</li>
              <li><a href="//redux.js.org/">Redux</a> - For managing state of components</li>
              <li><a href="//webpack.github.io/">Webpack</a> - Build and Bundle tooling + Dev Server</li>
              <li><a href="//heroku.com">Heroku</a> - Heroku CLI and Git for Bundle hosting</li>
              <li><a href="//firebase.google.com">Firebase</a> - For the database </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default About
