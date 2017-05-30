import uuid from 'node-uuid'
import moment from 'moment'

module.exports = {
  authReducer: function(state = {}, action) {
    switch (action.type) {
      case 'LOGIN':
        return {
          uid: action.uid
        }
      case 'LOGOUT':
        return {}
      default:
        return state
    }
  },
  queryReducer: function(state = '', action) {
    switch (action.type) {
      case 'SET_QUERY_TEXT':
        return action.query
      default:
        return state
    }
  },
  showCompletedReducer: function(state = false, action) {
    switch (action.type) {
      case 'TOGGLE_SHOW_COMPLETED':
        return !state
      default:
        return state
    }
  },
  toDosReducer: function(state = [], action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [
          ...state,
          action.todo
        ]
      case 'UPDATE_TODO':
        return state.map((todo) => {
          if (todo.id === action.id) {
            return {
              ...todo,
              ...action.updates
            }
          } else {
            return todo
          }
        })
      case 'ADD_TODOS':
        return [
          ...state,
          ...action.todos
        ]
      default:
        return state
    }
  }

}
