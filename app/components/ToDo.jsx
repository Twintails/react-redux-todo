import React, { Component } from 'react'

class ToDo extends Component {
  constructor(props) {
    super(props)
    this.setCompletd = this.setCompletd.bind(this)
  }

  setCompletd() {
    this.setState({
      completed: true
    })
  }

  render() {
    const {id, text, completed} = this.props
    return (
      <div className="switch tiny align-justify"  >
        <input className="switch-input" id={id} name={id} checked={completed} type="checkbox" ref={id} onChange={()=>{this.props.onToggle(id)}}/>
        <label className="switch-paddle" htmlFor={id} >
          <span className="label">{text}</span>
          <span className="switch-active" aria-hidden="true">Did</span>
          <span className="switch-inactive" aria-hidden="true">Do</span>
        </label>
      </div>
    )
  }
}

export default ToDo
