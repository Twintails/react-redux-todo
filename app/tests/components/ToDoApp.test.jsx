import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import ReactTestUtils from 'react-addons-test-utils'
import expect from 'expect'

import configure from 'configureStore'
import ConnectedToDoApp, { ToDoApp } from 'ToDoApp'
import ConnectedToDoList, { ToDoList } from 'ToDoList'

describe('ToDoApp', () => {
  it('Should exist', () => {
    expect(ToDoApp).toExist()
  })

  it('Should Render the ToDoList', () => {
    const store = configure()
    const provider = ReactTestUtils.renderIntoDocument(
      <Provider store={store}>
        <ConnectedToDoApp/>
      </Provider>
    )
    const todoApp = ReactTestUtils.scryRenderedComponentsWithType(provider, ConnectedToDoApp)[0]
    const todoList = ReactTestUtils.scryRenderedComponentsWithType(todoApp, ConnectedToDoList)

    expect(todoList.length).toEqual(1)
  })
})
