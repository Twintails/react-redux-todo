import React, { Component } from 'react'
import Nav from 'Nav'

import ToDoList from 'ToDoList'


class ToDoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },{
          id: 2,
          text: 'Build a cow house'
        },{
          id: 3,
          text: 'Paint the cow house'
        },{
          id: 4,
          text: 'Build a cow house fence'
        },{
          id: 5,
          text: 'Water a cow'
        }
      ]
    }
  }

  render() {
    let {todos} = this.state
    return (
      <div className="main-content">
        <Nav/>
        <ToDoList todos={todos} />
      </div>
    )
  }
}

export default ToDoApp
