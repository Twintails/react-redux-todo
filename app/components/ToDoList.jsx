import React, { Component } from 'react'
import ToDo from 'ToDo'


class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.renderToDos = this.renderToDos.bind(this)
  }

  renderToDos(todos) {
    return todos.map((todo) => {
      return (
        <div className="card" key={(todo.id + "-card")} {...todo.completed} >
          <ToDo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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
