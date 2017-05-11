import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'

import configure from 'configureStore'
import ConnectedToDoList, { ToDoList } from 'ToDoList'
import ConnectedToDo, { ToDo } from 'ToDo'


describe('ToDoList', () => {
  it('Should exist', () => {
    expect(ToDoList).toExist()
  })

  it('Should render one ToDo Component for each todo item', () => {
    const todos = [{
      id: 1,
      text: 'Walk the dog',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    },{
      id: 2,
      text: 'Build a cow house',
      completed: false,
      completedAt: undefined,
      createdAt: 500
    }]
    const store = configure({
      todos
    })
    const provider = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedToDoList/>
      </Provider>
    )
    const toDoList = ReactTestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0]
    const toDoComponents = ReactTestUtils.scryRenderedComponentsWithType(toDoList, ConnectedToDo)

    expect(toDoComponents.length).toBe(todos.length)
  })

  it('Should render a "Nothing to do message" if there are no todos', () => {
    const todos = []
    const store = configure({
      todos
    })
    const provider = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedToDoList/>
      </Provider>
    )
    const toDoList = ReactTestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0]
    const toDoComponents = ReactTestUtils.scryRenderedComponentsWithType(toDoList, ConnectedToDo)

    expect(ReactDOM.findDOMNode(toDoList).children[0].children[0].innerText).toBe('Nothing to do')
  })

  it('Should render "Everything is done, show completed Todos or go have a beer!" if all todos are completed', () => {
    const todos = [{
      id: 1,
      text: 'Walk the dog',
      completed: true,
      completedAt: 502,
      createdAt: 500
    },{
      id: 2,
      text: 'Build a cow house',
      completed: true,
      completedAt: 502,
      createdAt: 500
    }]
    const store = configure({
      todos
    })
    const provider = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedToDoList/>
      </Provider>
    )
    const toDoList = ReactTestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoList)[0]
    const toDoComponents = ReactTestUtils.scryRenderedComponentsWithType(toDoList, ConnectedToDo)

    expect(ReactDOM.findDOMNode(toDoList).children[0].children[0].innerText).toBe('Everything is done, show completed Todos or go have a beer!')
  })
})
