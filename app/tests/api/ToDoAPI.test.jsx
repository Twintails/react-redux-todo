import expect from 'expect'

import ToDoAPI from 'ToDoAPI'


describe('ToDoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos')
  })

  it('Should exist', () => {
    expect(ToDoAPI).toExist()
  })

  describe('setTodos', () => {
    it('Should set valid todos array', () => {
      const todos = [{it:23, test: 'test words', completed: false}]
      ToDoAPI.setToDos(todos)
      const actualToDos = JSON.parse(localStorage.getItem('todos'))

      expect(actualToDos).toEqual(todos)
    })

    it('Should not set invalid todos array', () => {
      const badToDos = {a :'b'}
      ToDoAPI.setToDos(badToDos)

      expect(localStorage.getItem('todos')).toBe(null)
    })
  })

  describe('getTodos', () => {
    it('Should return an empty array for bad localStorage data', () => {
      const actualToDos = ToDoAPI.getToDos()

      expect(actualToDos).toEqual([])
    })

    it('Should return todos if valid array is in the localStorage', () => {
      const todos = [{it:23, test: 'test words', completed: false}]
      localStorage.setItem('todos', JSON.stringify(todos))
      const actualToDos = ToDoAPI.getToDos()

      expect(actualToDos).toEqual(todos)
    })
  })

  describe('filterToDos', () => {
    const todos = [{
      id: 1,
      text: 'Walk the dog',
      completed: false
    },{
      id: 2,
      text: 'Build a cow house',
      completed: true
    },{
      id: 3,
      text: 'Paint the cow house',
      completed: false
    }]

    it('Should return all if showCompleted is true', () => {
      const filteredToDos = ToDoAPI.filterToDos(todos, true, '')
      expect(filteredToDos.length).toBe(3)
    })

    it('Should return only incompletes if showCompleted is false', () => {
      const filteredToDos = ToDoAPI.filterToDos(todos, false, '')
      expect(filteredToDos.length).toBe(2)
    })

    it('Should sort by incomplete > completed state', () => {
      const filteredToDos = ToDoAPI.filterToDos(todos, true, '')
      expect(filteredToDos[0].completed).toBe(false)
      expect(filteredToDos[1].completed).toBe(false)
      expect(filteredToDos[2].completed).toBe(true)
    })

    it('Should filter todos by query text query', () => {
      const filteredToDos = ToDoAPI.filterToDos(todos, true, 'House')
      expect(filteredToDos.length).toBe(2)
    })

    it('Should return all todos if query is empty', () => {
      const filteredToDos = ToDoAPI.filterToDos(todos, true, '')
      expect(filteredToDos.length).toBe(3)
    })

  })
})
