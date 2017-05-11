import expect from 'expect'
import actions from 'actions'

describe('Actions', () => {
  it('Should exist', () => {
    expect(actions).toExist()
  })

  it('Should generate query text action', () => {
    const action = {
      type: 'SET_QUERY_TEXT',
      query: 'Cow Houses'
    }
    const res = actions.setQuery(action.query)

    expect(res).toEqual(action)
  })

  it('Should toggle the show completed', () => {
    const action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    }
    const res = actions.toggleShowCompleted()

    expect(res).toEqual(action)
  })

  it('Should generate add todo action', () => {
    const action = {
      type: 'ADD_TODO',
      text: 'Build Cow Houses'
    }
    const res = actions.addToDo(action.text)

    expect(res).toEqual(action)
  })

  it('Should generate add todos action object', () => {
    const todos = [{
      id: '111',
      text: 'words',
      completed: false,
      completedAt: undefined,
      createdAt: 33000
    }]
    const action = {
      type: 'ADD_TODOS',
      todos
    }
    const res = actions.addToDos(todos)

    expect(res).toEqual(action)
  })

  it('Should toggle a todo', () => {
    const action = {
      type: 'TOGGLE_TODO',
      id: 1
    }
    const res = actions.toggleToDo(action.id)

    expect(res).toEqual(action)
  })
})
