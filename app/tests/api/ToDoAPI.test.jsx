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
})
