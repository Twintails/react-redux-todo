import React, { Component } from 'react'
import { connect } from 'react-redux'

import Nav from 'Nav'
import uuid from 'node-uuid'
import moment from 'moment'

import ToDoSearch from 'ToDoSearch'
import ToDoList from 'ToDoList'
import ToDoInputForm from 'ToDoInputForm'


export class ToDoApp extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="main-content">
        <Nav/>
        <div className="small-12 medium-6 medium-offset-3">
          <ToDoSearch/>
          <ToDoList/>
          <ToDoInputForm/>
        </div>
      </div>
    )
  }
}

export default connect()(ToDoApp)
