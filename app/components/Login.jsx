import React, { Component } from 'react'
import { connect } from 'react-redux'
import { startLogin } from 'actions'

import Nav from 'Nav'
import uuid from 'node-uuid'
import moment from 'moment'


export class Login extends Component {
  constructor(props) {
    super(props)
    this.onLogin = this.onLogin.bind(this)
  }

  onLogin() {
    const {dispatch} = this.props

    dispatch(startLogin())
  }

  render() {
    return (
      <div className="main-content">
        <Nav/>
        <div className="small-12 medium-6 medium-offset-3">
          <div className="callout callout-auth">
            {/* <label>Your Email
            <input type="email" placeholder="monkier@domain.tld"/></label> */}
            <h3>Login</h3>
            <p>Login with whatever below</p>
            <button className="button" onClick={this.onLogin}>Login with Twitter</button>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(Login)
