import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as actions from 'actions'

const createMockStore = configureMockStore([thunk])

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

  it('Should generate addToDo action', () => {
    const action = {
      type: 'ADD_TODO',
      todo: {
        id: '123abc',
        text: 'words',
        completed: false,
        createdAt: 33000
      }
    }
    const res = actions.addToDo(action.todo)

    expect(res).toEqual(action)
  })

  it('Should generate startAddToDo Action and dispatch ADD_TODO', (done) => {
    const store = createMockStore({})
    const toDoText = 'Build cow houses'

    store.dispatch(actions.startAddToDo(toDoText)).then(() => {
      const storeActions = store.getActions()
      expect(storeActions[0]).toInclude({
        type: 'ADD_TODO'
      })
      expect(storeActions[0].todo).toInclude({
        text: toDoText
      })
      done()
    }).catch(done)
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
