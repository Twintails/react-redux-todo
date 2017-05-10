import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import expect from 'expect'

import {ToDoInputForm} from 'ToDoInputForm'


describe('ToDoInputForm', () => {
  it('Should exist', () => {
    expect(ToDoInputForm).toExist()
  })

  it('Should dispatch ADD_TODO when valid todo text', () => {
    const newEntry = "You've got mail!"
    const action = {
      type: 'ADD_TODO',
      text: newEntry
    }

    const spy = expect.createSpy()
    let toDoInputForm = ReactTestUtils.renderIntoDocument(<ToDoInputForm dispatch={spy}/>)
    let el = toDoInputForm.node

    toDoInputForm.refs.newToDo.value = newEntry
    ReactTestUtils.Simulate.submit(el.children[0])
    expect(spy).toHaveBeenCalledWith(action)
  })

  it('Should not dispatch ADD_TODO with invalid data', () => {
    const newEntry = ""
    const spy = expect.createSpy()
    let toDoInputForm = ReactTestUtils.renderIntoDocument(<ToDoInputForm dispatch={spy}/>)
    let el = toDoInputForm.node

    toDoInputForm.refs.newToDo.value = newEntry
    ReactTestUtils.Simulate.submit(el.children[0])
    expect(spy).toNotHaveBeenCalled()
  })
})
