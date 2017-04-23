import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import expect from 'expect'

import ToDoApp from 'ToDoApp'


describe('ToDoApp', () => {
  it('Should exist', () => {
    expect(ToDoApp).toExist()
  })
  it('Should add an item to the todos state on handleAddToDo', () => {
    const testText = 'Make a fish blue'
    let toDoApp = ReactTestUtils.renderIntoDocument(<ToDoApp/>)

    toDoApp.setState({todos:[]})
    toDoApp.handleAddToDo(testText)

    expect(toDoApp.state.todos[0].text).toBe(testText)
  })

  it('Should toggle completed value when handleToggle called', () => {
    const todoData = {
      id: 11,
      text: 'Test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
    const todoApp = ReactTestUtils.renderIntoDocument(<ToDoApp/>)
    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(false)
    todoApp.handleToggle(11)
    expect(todoApp.state.todos[0].completed).toBe(true)
    expect(todoApp.state.todos[0].completedAt).toBeA('number')
  })

  it('Should toggle to from completed to incomplete', () => {
    const todoData = {
      id: 11,
      text: 'Test features',
      completed: true,
      createdAt: 0,
      completedAt: 123
    }
    const todoApp = ReactTestUtils.renderIntoDocument(<ToDoApp/>)
    todoApp.setState({todos: [todoData]})

    expect(todoApp.state.todos[0].completed).toBe(true)
    todoApp.handleToggle(11)
    expect(todoApp.state.todos[0].completed).toBe(false)
    expect(todoApp.state.todos[0].completedAt).toNotExist()
  })
})
