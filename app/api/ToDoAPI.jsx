module.exports = {
  setToDos: function (todos) {
    if(Array.isArray(todos)) {
      localStorage.setItem('todos', JSON.stringify(todos))
      return todos
    }
  },
  getToDos: function () {
    const stringToDos = localStorage.getItem('todos')
    let todos = []
    try {
      todos = JSON.parse(stringToDos)
    } catch (e) {
      console.log('Bummer: There was a problem with the todos array stored in Local Storage');
    }
    return Array.isArray(todos) ? todos : []
  },
  filterToDos: function(todos, showCompleted, query) {
    let filteredToDos = todos
    query = query.toLowerCase()
    // Filter by showCompleted
    filteredToDos = filteredToDos.filter((todo) => {
      return !todo.completed || showCompleted
    })

    // Filter by query 'something'.indexOf('thing') -> true
    filteredToDos = filteredToDos.filter((todo) => {
      const text = todo.text.toLowerCase()
      return query.length === 0 || text.indexOf(query) > -1
    })

    // Sort todos with non-completed first
    filteredToDos.sort((a, b) => {
      if (!a.completed && b.completed) {
        return -1
      } else if ( a.completed && !b.completed) {
        return 1
      } else {
        return 0
      }
    })

    return filteredToDos
  }
}
