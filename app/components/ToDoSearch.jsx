import React, { Component }  from 'react'

class ToDoSearch extends React.Component{
  constructor(props) {
    super(props)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    e.preventDefault()
    const query = this.refs.search.value
    const showCompleted = this.refs.showCompleted.checked

    this.props.onSearch(showCompleted, query)
  }

  render() {
    return (
      <div >
        <form >
          <div className="input-group align-justify">
            <span className="input-group-label show-for-sr">Search ToDos</span>
            <input type="text" className="input-group-field" ref="search" placeholder="Search ToDos" onChange={this.handleSearch}/>
            <div className="input-group-button">
              <input type="submit" className="button" value="Search ToDos"/>
            </div>
          </div>
          <div className="switch tiny align-justify">
            <input className="switch-input" id="show-completed" type="checkbox" ref="showCompleted" onChange={this.handleSearch} name="show-completed"/>
            <label className="switch-paddle" htmlFor="show-completed">
              <span className="label">Show completed?</span>
              <span className="switch-active" aria-hidden="true">Ya</span>
              <span className="switch-inactive" aria-hidden="true">Na</span>
            </label>
          </div>
        </form>
      </div>
    )
  }
}

export default ToDoSearch
