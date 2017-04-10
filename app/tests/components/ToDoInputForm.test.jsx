import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import expect from 'expect'

import ToDoInputForm from 'ToDoInputForm'


describe('ToDoInputForm', () => {
  it('Should exist', () => {
    expect(ToDoInputForm).toExist()
  })

  it('Should call onSetNewToDo with valid data', () => {
    const newEntry = "You've got mail!"
    const spy = expect.createSpy()
    let toDoInputForm = ReactTestUtils.renderIntoDocument(<ToDoInputForm onSetNewToDo={spy}/>)
    let el = toDoInputForm.node

    toDoInputForm.refs.newToDo.value = newEntry
    ReactTestUtils.Simulate.submit(el.children[0])
    expect(spy).toHaveBeenCalledWith(newEntry)
  })

  it('Should not call onSetNewToDo with inalid data', () => {
    const newEntry = ""
    const spy = expect.createSpy()
    let toDoInputForm = ReactTestUtils.renderIntoDocument(<ToDoInputForm onSetNewToDo={spy}/>)
    let el = toDoInputForm.node

    toDoInputForm.refs.newToDo.value = newEntry
    ReactTestUtils.Simulate.submit(el.children[0])
    expect(spy).toNotHaveBeenCalled()
  })
})
