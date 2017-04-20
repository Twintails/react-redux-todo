import React, { Component } from 'react'

class ToDoInputForm extends Component{
    constructor(props) {
      super(props)
      this.onSubmit = this.onSubmit.bind(this)
    }

    onSubmit(e) {
      e.preventDefault()
      const strNewToDo = this.refs.newToDo.value

      if ( typeof strNewToDo === 'string' && strNewToDo.length > 0 ) {
        this.refs.newToDo.value = ''
        this.props.onSetNewToDo(strNewToDo)
      } else {
        this.refs.newToDo.focus()
      }
    }

    render() {
        return (
          <div ref={node => this.node = node}>
            <form ref="form" onSubmit={this.onSubmit} className="toDoInput-form">
              <input type="text" ref="newToDo" placeholder="Whatcha'need now?" required="required"/>
              <button className="button expanded">Honeydo</button>
            </form>
          </div>
        )
    }
}
export default ToDoInputForm
