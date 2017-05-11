module.exports = {
  setQuery: function (query) {
    return {
      type: 'SET_QUERY_TEXT',
      query
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
  addToDos: function (todos) {
    return {
      type: 'ADD_TODOS',
      todos
    }
  },
  toggleToDo: function (id) {
    return {
      type: 'TOGGLE_TODO',
      id
    }
  }
}
