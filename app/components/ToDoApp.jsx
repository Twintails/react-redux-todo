import React, { Component } from 'react'
import { connect } from 'react-redux'

import Nav from 'Nav'
import uuid from 'node-uuid'
import moment from 'moment'

import ToDoSearch from 'ToDoSearch'
import ToDoList from 'ToDoList'
import ToDoInputForm from 'ToDoInputForm'
import ToDoAPI from 'ToDoAPI'

export class ToDoApp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCompleted: false,
      query: '',
      todos: ToDoAPI.getToDos()
    }
    this.componentDidUpdate = this.componentDidUpdate.bind(this)
    this.handleAddToDo = this.handleAddToDo.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidUpdate() {
    ToDoAPI.setToDos(this.state.todos)
  }

  handleAddToDo(text) {
    this.setState({
      todos: [
        ...this.state.todos, {
          id: uuid(),
          text: text,
          completed: false,
          createdAt: moment().unix(),
          completedAt: undefined
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
    let {todos, showCompleted, query} = this.state
    let filteredToDos = ToDoAPI.filterToDos(todos, showCompleted, query)
    return (
      <div className="main-content">
        <Nav/>
        <div className="small-12 medium-6 medium-offset-3">
          <ToDoSearch onSearch={this.handleSearch}/>
          <ToDoList/>
          <ToDoInputForm onSetNewToDo={this.handleAddToDo}/>
        </div>
      </div>
    )
  }
}

export default connect()(ToDoApp)
