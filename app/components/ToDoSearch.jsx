import React, { Component }  from 'react'

class ToDoSearch extends Component{
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    let query = this.refs.search.value
    let showCompleted = this.refs.showCompleted.checked
    this.props.onSearch(showCompleted, query)
  }

  render() {
    return (
      <div>
        <div className="input-group align-justify">
          <span className="input-group-label show-for-sr">Search ToDos</span>
          <input type="text" className="input-group-field" ref="search" placeholder="Search ToDos" onChange={this.handleSearch}/>
        </div>
        <div className="switch tiny align-justify">
          <input className="switch-input" id="show-completed" type="checkbox" ref="showCompleted" onChange={this.handleSearch} name="show-completed"/>
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

export default ToDoSearch
