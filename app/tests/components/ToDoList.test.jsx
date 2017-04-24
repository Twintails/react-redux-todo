import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import expect from 'expect'

import ToDoList from 'ToDoList'
import ToDo from 'ToDo'


describe('ToDoList', () => {
  it('Should exist', () => {
    expect(ToDoList).toExist()
  })

  it('Should render one ToDo Component for each todo item', () => {
    const todos = [{
      id: 1,
      text: 'Walk the dog'
    },{
      id: 2,
      text: 'Build a cow house'
    }]
    let toDoList = ReactTestUtils.renderIntoDocument(<ToDoList todos={todos}/>)
    let toDoComponents = ReactTestUtils.scryRenderedComponentsWithType(toDoList, ToDo)

    expect(toDoComponents.length).toBe(todos.length)
  })

  it('Should render Nothing to do message if no todos', () => {
    const todos = []
    let toDoList = ReactTestUtils.renderIntoDocument(<ToDoList todos={todos}/>)
    expect(ReactDOM.findDOMNode(toDoList).children[0].children[0].innerText).toBe('Nothing to do')
  })
})
