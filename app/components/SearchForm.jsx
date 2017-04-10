import React, { Component }  from 'react'

class SearchForm extends React.Component{
  constructor(props) {
    super(props)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit(e) {
    e.preventDefault()
    const query = this.refs.search.value
    if (location.length > 0) {
      this.refs.search.value = '';
      this.props.onSearch(query);
    }
  }

  render() {
    return (
      <div >
        <form onSubmit={this.onFormSubmit}>
          <div className="input-group align-justify">
            <span className="input-group-label show-for-sr">Search ToDos</span>
            <input type="text" className="input-group-field" ref="search" placeholder="Search ToDos"/>
            <div className="input-group-button">
              <input type="submit" className="button" value="Search ToDos"/>
            </div>
          </div>
          <div className="switch tiny align-justify">
            <input className="switch-input" id="show-completed" type="checkbox" name="show-completed"/>
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

export default SearchForm
