import expect from 'expect'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import firebase, {firebaseRef} from 'app/firebase/'
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

  it('Should generate an UPDATE_TODO action', () => {
    const action = {
      type: 'UPDATE_TODO',
      id: '134',
      updates: {completed: false}
    }
    const res = actions.updateToDo(action.id, action.updates)

    expect(res).toEqual(action)
  })

  it('Should generate Login action Object', () => {
    const action = {
      type: 'LOGIN',
      uid: 'abc123'
    }
    const res = actions.login(action.uid)
    expect(res).toEqual(action)
  })

  it('Should generate logout action Object', () => {
    const action = {
      type: 'LOGOUT'
    }
    const res = actions.logout()
    expect(res).toEqual(action)
  })

  describe('Tests with firebase todos', () => {
    let testToDoRef
    let uid
    let toDosRef

    beforeEach((done) => {
      firebase.auth().signInAnonymously().then((user) => {
        uid = user.uid
        toDosRef = firebaseRef.child(`users/${uid}/todos`)

        return toDosRef.remove()
      }).then(() => {
        testToDoRef = toDosRef.push()

        return testToDoRef.set({
          text: 'Walk the armadillo',
          completed: false,
          createdAt: 5256452
        })
      })
      .then(() => done())
      .catch(done)
    })

    afterEach((done) => {
      toDosRef.remove().then(() => done())
    })

    it('Should toggle a todo and dispatch UPDATE_TODO action', (done) => {
      const mockStore = createMockStore({auth: {uid}})
      const mockAction = actions.startToggleToDo(testToDoRef.key, true)

      mockStore.dispatch(mockAction).then(() => {
        const mockActions = mockStore.getActions()

        expect(mockActions[0]).toInclude({
          type: 'UPDATE_TODO',
          id: testToDoRef.key
        })
        expect(mockActions[0].updates).toInclude({
          completed: true
        })
        expect(mockActions[0].updates.completedAt).toExist()

        done()
      }).catch(done)
    })

    it('Should populate todos and dispatch ADD_TODOS', (done) => {
      const mockStore = createMockStore({auth: {uid}})
      const mockAction = actions.startAddToDos()

      mockStore.dispatch(mockAction).then(() => {
        const mockActions = mockStore.getActions()

        expect(mockActions[0].type).toEqual('ADD_TODOS')
        expect(mockActions[0].todos.length).toEqual(1)
        expect(mockActions[0].todos[0].text).toEqual('Walk the armadillo')

        done()
      }).catch(done)
    })

    it('Should generate startAddToDo Action and dispatch ADD_TODO', (done) => {
      const store = createMockStore({auth: {uid}})
      const toDoText = 'Build cow houses!'

      store.dispatch(actions.startAddToDo(toDoText)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toInclude({
          type: 'ADD_TODO'
        })
        expect(actions[0].todo).toInclude({
          text: toDoText
        })

        done()
      }).catch(done)
    })
  })
})
