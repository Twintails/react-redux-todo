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
  }
}
