import { combineReducers, createStore, compose } from 'redux'
import {
  queryReducer,
  showCompletedReducer,
  toDosReducer
} from 'reducers'


const configure = (initialState = {}) => {
  const reducer = combineReducers({
    query: queryReducer,
    showCompleted: showCompletedReducer,
    todos: toDosReducer
  })
  const store = createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return (store)
}

export default configure
