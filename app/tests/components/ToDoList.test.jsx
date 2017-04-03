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
    let todos = [{
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
})
