import React, { Component } from 'react'
import Nav from 'Nav'

export class Welcome extends Component {
  constructor(props) {
    super(props)
  }
  render(){
    return (
      <div>
        <Nav/>
        <div className="row align-center">
          <div className="columns small-10 medium-8 large-6">
            <h1>Welcome!</h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
