import React, { Component }  from 'react'
import { connect } from 'react-redux'
import actions from 'actions'

export class ToDoSearch extends Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {dispatch, showCompleted, query} = this.props
    return (
      <div>
        <div className="input-group align-justify">
          <span className="input-group-label show-for-sr">Search ToDos</span>
          <input type="text" className="input-group-field" ref="query" value={query} placeholder="Search ToDos" onChange={(query) => {
            query = this.refs.query.value
            dispatch(actions.setQuery(query))
          }}/>
        </div>
        <div className="switch tiny align-justify">
          <input className="switch-input" id="show-completed" name="show-completed" type="checkbox" checked={showCompleted} ref="showCompleted" onChange={() => {
            dispatch(actions.toggleShowCompleted())
          }} />
          <label className="switch-paddle" htmlFor="show-completed" >
            <span className="label">Show completed?</span>
            <span className="switch-active" aria-hidden="true">Ya</span>
            <span className="switch-inactive" aria-hidden="true">Na</span>
          </label>
        </div>
      </div>
    )
  }
}

export default connect((state) => {
  return {
    showCompleted: state.showCompleted,
    query: state.query
  }
})(ToDoSearch)
