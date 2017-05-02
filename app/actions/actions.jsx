module.exports = {
  setSearchText: function (searchText) {
    return {
      type: 'SET_SEARCH_TEXT',
      searchText
    }
  },
  toggleShowCompleted: function () {
    return {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
  },
  addToDo: function (text) {
    return {
      type: 'ADD_TODO',
      text
    }
  },
  toggleToDo: function (id) {
    return {
      type: 'TOGGLE_TODO',
      id
    }
  }
}
