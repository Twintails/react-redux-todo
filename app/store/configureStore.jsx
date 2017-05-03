import { combineReducers, createStore, compose } from 'redux'
import {
  searchTextReducer,
  showCompletedReducer,
  toDosReducer
} from 'reducers'


const configure = () => {
  const reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: toDosReducer
  })
  const store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))
  return (reducer, store)
}

export default configure
