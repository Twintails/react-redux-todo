import React, { Component } from 'react'
import Nav from 'Nav'

import ToDoSearch from 'ToDoSearch'
import ToDoList from 'ToDoList'
import ToDoInputForm from 'ToDoInputForm'


class ToDoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showCompleted: false,
      query: '',
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
    this.handleAddToDo = this.handleAddToDo.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleAddToDo(text) {
    console.log("New ToDo: " + text);
  }

  handleSearch(showCompleted, query){
    this.setState({
      showCompleted: showCompleted,
      query: query.toLowerCase()
    })
  }

  render() {
    let {todos} = this.state
    return (
      <div className="main-content">
        <Nav/>
        <div className="small-12 medium-6 medium-offset-3">
          <ToDoSearch onSearch={this.handleSearch}/>
          <ToDoList todos={todos} />
          <ToDoInputForm onSetNewToDo={this.handleAddToDo}/>
        </div>
      </div>
    )
  }
}

export default ToDoApp
