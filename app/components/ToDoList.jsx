import React, { Component } from 'react'
import ToDo from 'ToDo'
import moment from 'moment'


class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.renderToDos = this.renderToDos.bind(this)
    this.renderDate = this.renderDate.bind(this)
  }

  renderDate(todo) {
    return !todo.completed ?
      'Created ' + moment.unix(todo.createdAt).format('YYYY.MM.DD @ HH:mm') :
      'Completed ' + moment.unix(todo.completedAt).format('YYYY.MM.DD @ HH:mm')
  }

  renderToDos(todos) {
    return todos.map((todo) => {
      return (
        <div className="card" key={(todo.id + "-card")} {...todo.completed} >
          <ToDo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
          <p className="label">{this.renderDate(todo)}</p>
        </div>
      )
    })
  }

  render() {
    let {todos} = this.props
    return (
      <div className="row">
        <div className="small-10 small-offset-1 columns">
          {this.renderToDos(todos)}
        </div>
      </div>
    )
  }
}

export default ToDoList
