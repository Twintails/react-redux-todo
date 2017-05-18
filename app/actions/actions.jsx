import firebase, { firebaseRef } from 'app/firebase/'
import moment from 'moment'


  export const setQuery = function (query) {
    return {
      type: 'SET_QUERY_TEXT',
      query
    }
  }

  export const toggleShowCompleted = function () {
    return {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
  }

  export const addToDo = function (todo) {
    return {
      type: 'ADD_TODO',
      todo
    }
  }

  export const startAddToDo = function(text) {
    return (dispatch, getState) => {
      const todo = {
        text,
        completed: false,
        createdAt: moment().unix(),
        completedAt: null,
      }
      const toDoRef = firebaseRef.child('todos').push(todo)
      return toDoRef.then(function StartAddToDoDispatch() {
        dispatch(addToDo({
            ...todo,
            id: toDoRef.key
          }
        ))
      })
    }
  }

  export const addToDos = function (todos) {
    return {
      type: 'ADD_TODOS',
      todos
    }
  }

  export const toggleToDo = function (id) {
    return {
      type: 'TOGGLE_TODO',
      id
    }
  }
