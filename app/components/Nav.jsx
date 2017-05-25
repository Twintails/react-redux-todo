import React, { Component } from 'react'
import { Link, IndexLink } from 'react-router'
import { connect } from 'react-redux'
import { startLogout } from 'actions'

import NavLink from 'NavLinks'

export class Nav extends Component {
  constructor(props) {
    super(props)
    this.onLogout = this.onLogout.bind(this)
  }

  onLogout(e) {
    const {dispatch} = this.props

    e.preventDefault()

    dispatch(startLogout())
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text"><IndexLink to="/" >Home</IndexLink></li>
            <li><NavLink to="/about" >About</NavLink></li>
            <li><NavLink to="/ToDo" >ToDo</NavLink></li>
            <li><NavLink to="/ToDo/it" >App</NavLink></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text"><span>Created By <a href="//twintails.com" target="_blank">Twintails</a></span></li>
            <li><a href="#" className="button" onClick={this.onLogout}>Logout</a></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default connect()(Nav)
