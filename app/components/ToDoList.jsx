import React, { Component } from 'react'
import ToDo from 'ToDo'


class ToDoList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {todos} = this.props

    let renderToDos = () => {
      return todos.map((todo) => {
        return (
          <ToDo key={todo.id} {...todo}/>
        )
      })
    }

    return (
      <div className="row">
        <div className="small-10 small-offset-1 columns">
          {renderToDos()}
        </div>
      </div>
    )
  }
}

export default ToDoList
