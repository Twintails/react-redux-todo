import React, { Component } from 'react'

class ToDo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let {id, text} = this.props
    return (
      <div className="card">
        <div className="card-section">
          <strong>{id}.</strong> {text}
        </div>
      </div>
    )
  }
}

export default ToDo
