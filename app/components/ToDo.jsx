import React, { Component } from 'react'
import { connect } from 'react-redux'

import moment from 'moment'
import actions from 'actions'

export class ToDo extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {id, text, completed, dispatch} = this.props
    return (
      <div className="switch tiny align-justify"  >
        <input className="switch-input" id={id} name={id} checked={completed} type="checkbox" ref={id} onChange={() => {dispatch(actions.toggleToDo(id))}}/>
        <label className="switch-paddle" htmlFor={id} >
          <span className="label">{text}</span>
          <span className="switch-active" aria-hidden="true">Did</span>
          <span className="switch-inactive" aria-hidden="true">Do</span>
        </label>
      </div>
    )
  }
}

export default connect()(ToDo)
