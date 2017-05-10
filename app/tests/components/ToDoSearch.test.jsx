import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'
import { Provider } from 'react-redux'

import expect from 'expect'

import {ToDoSearch} from 'ToDoSearch'


describe('ToDoSearch', () => {
  it('Should exist', () => {
    expect(ToDoSearch).toExist()
  })

  it('Should dispatch SET_QUERY_TEXT on input change', () => {
    const query = 'Dog'
    const action = {
      type: 'SET_QUERY_TEXT',
      query
    }
    const spy = expect.createSpy()
    const todoSearch = ReactTestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>)

    todoSearch.refs.query.value = query
    ReactTestUtils.Simulate.change(todoSearch.refs.query)

    expect(spy).toHaveBeenCalledWith(action)
  })

  it('Should dispatch TOGGLE_SHOW_COMPLETED when checkbox is checked', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    const spy = expect.createSpy()
    const todoSearch = ReactTestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>)

    todoSearch.refs.showCompleted.checked = true
    ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith(action)
  })

  it('Should dispatch TOGGLE_SHOW_COMPLETED when checkbox is un-checked', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    let spy = expect.createSpy()
    let todoSearch = ReactTestUtils.renderIntoDocument(<ToDoSearch dispatch={spy}/>)

    todoSearch.refs.showCompleted.checked = false
    ReactTestUtils.Simulate.change(todoSearch.refs.showCompleted)

    expect(spy).toHaveBeenCalledWith(action)
  })
})
