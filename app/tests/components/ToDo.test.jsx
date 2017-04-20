import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import expect from 'expect'

import ToDo from 'ToDo'


describe('ToDo', () => {
  it('Should exist', () => {
    expect(ToDo).toExist()
  })

  it('Should call onToggle prop with id on Click', () => {
    const todoData = { id: 199, text: 'Test ToDo.jsx features', completed: true }
    let spy = expect.createSpy()
    let todo = ReactTestUtils.renderIntoDocument(<ToDo {...todoData} onToggle={spy}/>)
    let el = ReactDOM.findDOMNode(todo)
    
    ReactTestUtils.Simulate.change(el.children[0])

    expect(spy).toHaveBeenCalledWith(199)

  })
})
