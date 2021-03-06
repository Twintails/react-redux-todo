import React, { Component } from 'react'
import { connect } from 'react-redux'
import ToDo from 'ToDo'
import moment from 'moment'
import ToDoAPI from 'ToDoAPI'


export class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.renderToDos = this.renderToDos.bind(this)
    this.renderDate = this.renderDate.bind(this)
    this.dateLabelClass = this.dateLabelClass.bind(this)
  }

  renderDate(todo) {
    return !todo.completed ?
      'Created ' + moment.unix(todo.createdAt).format('YYYY.MM.DD @ HH:mm') :
      'Completed ' + moment.unix(todo.completedAt).format('YYYY.MM.DD @ HH:mm')
  }

  dateLabelClass(completed) {
    return completed ? 'label completed' : 'label incomplete'
  }

  renderToDos() {
    const {todos, showCompleted, query} = this.props
    if (todos.length === 0 && ToDoAPI.filterToDos(todos, showCompleted, query).length === 0) {
      return (<p className="container__message">Nothing to do</p>)
    } else if (todos.length > 0 && ToDoAPI.filterToDos(todos, showCompleted, query).length === 0) {
      return (<p className="container__message">Everything is done, show completed Todos or go have a beer!</p>)
    }
    return ToDoAPI.filterToDos(todos, showCompleted, query).map((todo) => {
      return (
        <div className="card" key={(todo.id + "-card")} {...todo.completed} >
          <ToDo key={todo.id} {...todo}/>
          <p className={this.dateLabelClass(todo.completed)}>{this.renderDate(todo)}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="row">
        <div className="small-10 small-offset-1 columns">
          {this.renderToDos()}
        </div>
      </div>
    )
  }
}


const ConnectedToDoList = connect(state=>state)(ToDoList)
export default ConnectedToDoList
