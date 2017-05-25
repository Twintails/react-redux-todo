import firebase, { firebaseRef, twitterProvider } from 'app/firebase/'
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

  export const startAddToDos = function() {
    return (dispatch, getState) => {
      let todos = []
      const toDosRef = firebaseRef.child('todos').once('value').then((snapshot) => {
        let storedTodos = snapshot.val() || {}
        Object.keys(storedTodos).forEach( function buildToDosArray(toDoID) {
          todos.push({
            id: toDoID,
            ...storedTodos[toDoID]
          })
        })
      }, (e) => {
        console.log('Unable to fetch data');
      })
      return toDosRef.then(function StartAddToDosDispatch() {
        dispatch(addToDos(todos))
      })
    }
  }


  export const updateToDo = function (id, updates) {
    return {
      type: 'UPDATE_TODO',
      id,
      updates
    }
  }

  export const startToggleToDo = function (id, completed) {
    return (dispatch, getState) => {
      const todoRef = firebaseRef.child(`todos/${id}`)
      const updates = {
        completed,
        completedAt: completed ? moment().unix() : null
      }

      return todoRef.update(updates).then(() => {
        dispatch(updateToDo(id, updates))
      })
    }
  }

  export const startLogin = function () {
    return ((dispatch, getState) => {
      return firebase.auth().signInWithPopup(twitterProvider).then( (result) => {
        console.log("Boom baby, You're In!", result);
      }, (error) => {
        console.log("No Dice; auth failure", error);
      })
    })
  }

  export const startLogout = function () {
    return ((dispatch, getState) => {
      return firebase.auth().signOut().then(() => {
        console.log("You're Out!");
      })
    })
  }
