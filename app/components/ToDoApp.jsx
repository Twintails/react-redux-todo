import React, { Component } from 'react'
import Nav from 'Nav'

import SearchForm from 'SearchForm'
import ToDoList from 'ToDoList'
import ToDoInputForm from 'ToDoInputForm'


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

  handleAddToDo(text) {
    console.log("New ToDo: " + text);
  }

  render() {
    let {todos} = this.state
    return (
      <div className="main-content">
        <Nav/>
        <div className="small-12 medium-6 medium-offset-3">
          <SearchForm/>
          <ToDoList todos={todos} />
          <ToDoInputForm onSetNewToDo={this.handleAddToDo}/>
        </div>
      </div>
    )
  }
}

export default ToDoApp
