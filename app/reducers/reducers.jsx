import uuid from 'node-uuid'
import moment from 'moment'

module.exports = {
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
          {
            id: uuid(),
            text: action.text,
            completed: false,
            createdAt: moment().unix(),
            completedAt: undefined
          }
        ]
      case 'TOGGLE_TODO':
        return state.map((todo) => {
          if (todo.id === action.id) {
            const nextCompleted = !todo.completed
            return Object.assign({}, todo, {
              completed: nextCompleted,
              completedAt: nextCompleted ? moment().unix() : undefined
            })
          } else {
            return todo
          }
        })
        break
      default:
        return state
    }
  }

}
