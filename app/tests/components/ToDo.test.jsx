import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'

import { startToggleToDo } from 'actions'
import ConnectedToDo, { ToDo } from 'ToDo'


describe('ToDo', () => {
  it('Should exist', () => {
    expect(ToDo).toExist()
  })

  it('Should dispatch TOGGLE_TODO on Click', () => {
    const todoData = { id: 199, text: 'Test ToDo.jsx features', completed: true }
    const action = startToggleToDo(todoData.id, !todoData.completed)

    let spy = expect.createSpy()
    let todo = ReactTestUtils.renderIntoDocument(<ToDo {...todoData} dispatch={spy}/>)
    let el = ReactDOM.findDOMNode(todo)
    ReactTestUtils.Simulate.change(el.children[0])

    expect(spy).toHaveBeenCalledWith(action)

  })
})
