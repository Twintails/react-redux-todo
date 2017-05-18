import { applyMiddleware, combineReducers, createStore, compose } from 'redux'
import { queryReducer, showCompletedReducer, toDosReducer } from 'reducers'
import thunk from 'redux-thunk'

const configure = (initialState = {}) => {
  const reducer = combineReducers({
    query: queryReducer,
    showCompleted: showCompletedReducer,
    todos: toDosReducer
  })
  const store = createStore(reducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return (store)
}

export default configure
