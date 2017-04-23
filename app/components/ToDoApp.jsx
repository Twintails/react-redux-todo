import React, { Component } from 'react'
import Nav from 'Nav'
import uuid from 'node-uuid'
import moment from 'moment'

import ToDoSearch from 'ToDoSearch'
import ToDoList from 'ToDoList'
import ToDoInputForm from 'ToDoInputForm'
import ToDoAPI from 'ToDoAPI'

const TESTtoDos = [
  {
    id: uuid(),
    text: 'Walk the dog',
    completed: false
  },{
    id: uuid(),
    text: 'Build a cow house',
    completed: true
  },{
    id: uuid(),
    text: 'Paint the cow house',
    completed: false
  },{
    id: uuid(),
    text: 'Build a cow house fence',
    completed: false
  },{
    id: uuid(),
    text: 'Water a cow',
    completed: false
  },{
    id: uuid(),
    text: 'sjsyjjhaebqehlrbglkeajr gpiueh5ijsdnfgkdjrnoaehr aeiojodig aopeir poean oaerhgakjn ;kfnsoprthaoethnkdsfn ;ksdjnoshoaetj;ksdjfng;kfjno[rita0[8ergosireng;kjxnfb;lsntoaeirghjoaeirn;kanrgiuaehoiaen kjndgignds[0rjgha eorgnaekjnrgo[auhjfg[0ajer;kjngdnf[9zjhrhjg;akejngipdhf8jhsdponergiuhz[d8fhjkjnr pieauhr9aerjhgoaerngkdnfv djhf0a8ejrhgaenrgoerjhgoaergnkd jnfaeurhgoiaudnrg dfg',
    completed: false
  }
]

class ToDoApp extends Component {
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
    this.handleToggle = this.handleToggle.bind(this)
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

  handleToggle(id) {
    let updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed
        todo.completedAt = todo.completed ? moment().unix() : undefined
      }
      return todo
    })
    this.setState({todos: updatedTodos})
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
          <ToDoList todos={filteredToDos} onToggle={this.handleToggle}/>
          <ToDoInputForm onSetNewToDo={this.handleAddToDo}/>
        </div>
      </div>
    )
  }
}

export default ToDoApp
