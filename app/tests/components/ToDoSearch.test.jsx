import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import expect from 'expect'

import ToDoSearch from 'ToDoSearch'


describe('ToDoSearch', () => {
  it('Should exist', () => {
    expect(ToDoSearch).toExist()
  })

  it('Should call onSearch with enterend input text', () => {
    let searchQuery = 'Dog'
    let spy = expect.createSpy()
    let todoSearch = ReactTestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>)

    todoSearch.refs.search.value = searchQuery
    ReactTestUtils.Simulate.change(todoSearch.refs.search)

    expect(spy).toHaveBeenCalledWith(false, 'Dog')
  })

  it('Should call onSearch with proper true value', () => {
    let spy = expect.createSpy()
    let todoSearch = ReactTestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>)

    todoSearch.refs.showCompleted.checked = true
    ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith(true, '')
  })

  it('Should call onSearch with proper false value', () => {
    let spy = expect.createSpy()
    let todoSearch = ReactTestUtils.renderIntoDocument(<ToDoSearch onSearch={spy}/>)

    todoSearch.refs.showCompleted.checked = false
    ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith(false, '')
  })
})
