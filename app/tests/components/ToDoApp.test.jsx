import React from 'react'
import ReactDOM from 'react-dom'
import ReactTestUtils from 'react-addons-test-utils'

import expect from 'expect'

import ToDoApp from 'ToDoApp'


describe('ToDoApp', () => {
  it('Should exist', () => {
    expect(ToDoApp).toExist()
  })
})
