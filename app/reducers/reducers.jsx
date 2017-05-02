module.exports = {
  searchTextReducer: function(state = '', action) {
    switch (action.type) {
      case 'SET_SEARCH_TEXT':
        return action.searchText
      default:
        return state
    }
  },
  // state default and action , action type = TOGGLE_SHOW_COMPLETED return the inverse state
  showCompletedReducer: function(state = false, action) {
    switch (action.type) {
      case 'TOGGLE_SHOW_COMPLETED':
        return !state
      default:
        return state
    }
  }
}
