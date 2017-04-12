import React, { Component } from 'react'
import Nav from 'Nav'
import uuid from 'node-uuid'

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
          id: uuid(),
          text: 'Walk the dog'
        },{
          id: uuid(),
          text: 'Build a cow house'
        },{
          id: uuid(),
          text: 'Paint the cow house'
        },{
          id: uuid(),
          text: 'Build a cow house fence'
        },{
          id: uuid(),
          text: 'Water a cow'
        }
      ]
    }
    this.handleAddToDo = this.handleAddToDo.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleAddToDo(text) {
    this.setState({
      todos: [
        ...this.state.todos, {
          id: uuid(),
          text: text
        }
      ]
    })
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
