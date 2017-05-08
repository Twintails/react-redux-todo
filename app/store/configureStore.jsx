import { combineReducers, createStore, compose } from 'redux'
import {
  searchTextReducer,
  showCompletedReducer,
  toDosReducer
} from 'reducers'


const configure = (initialState = {}) => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: toDosReducer
  })
  const store = createStore(reducer, initialState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return (store)
}

export default configure
