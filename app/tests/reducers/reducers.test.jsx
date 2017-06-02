import expect from 'expect'
import reducers from 'reducers'
import df from 'deep-freeze-strict'

describe('Reducers Test', () => {
  it('Should exist', () => {
    expect(reducers).toExist()
  })

  describe('queryReducer', () => {
    it('Should set query', () => {
      const action = {
        type: 'SET_QUERY_TEXT',
        query: 'cow'
      }
      const res = reducers.queryReducer(df(''), df(action))

      expect(res).toEqual(action.query)
    })
  })

  describe('showCompletedReducer', () => {
    it('Should invert the state of Show Completed', () => {
      const action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }
      const res = reducers.showCompletedReducer(df(false), df(action))

      expect(res).toEqual(true)
    })
  })

  describe('toDosReducer', () => {
    it('Should add a new ToDo', () => {
      const action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Moo the Cows',
          completed: false,
          createdAt: 92384275
        }
      }
      const res = reducers.toDosReducer(df([]), df(action))

      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(action.todo)
      // console.log('\t\t\x1b[36mTEST Result: \x1b[0m', res);
    })

    it('Should invert the state of Todo', () => {
      const todos = [{
        id: '123',
        text: 'Moo the Cows',
        completed: true,
        createdAt: 123,
        completedAt: 125
      }]
      const updates = {
        completed: false,
        completedAt: null
      }
      const action = {
          type: 'UPDATE_TODO',
          id: todos[0].id,
          updates
      }
      let res = reducers.toDosReducer(df(todos), df(action))
      expect(res[0].completed).toEqual(updates.completed)
      expect(res[0].completedAt).toEqual(updates.completedAt)
      expect(res[0].text).toEqual(todos[0].text)
      // console.log('\t\t\x1b[36mTOGGLE_TODO Result: \x1b[0m', res);
      // res = reducers.toDosReducer(df(res), df(action))
      // expect(res[0].completed).toEqual(true)
      // expect(typeof(res[0].completedAt)).toBe('number')
      // console.log('\t\t\x1b[36mTOGGLE_TODO swap it back: \x1b[0m',  res);

    })

    it('Should add existing ToDos', () => {
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
      const res = reducers.toDosReducer(df([]), df(action))

      expect(res.length).toEqual(1)
      expect(res[0]).toEqual(todos[0])
    })

    it('Should remove todos from store on Logout', () => {
      const todos = [{
        id: '111',
        text: 'words',
        completed: false,
        completedAt: undefined,
        createdAt: 33000
      }]
      const action = {
        type: 'LOGOUT'
      }

      const res = reducers.toDosReducer(df(todos), df(action))

      expect(res.length).toEqual(0)
    })

    describe('authReducer', () => {
      it('should store uid on LOGIN', () => {
        const action = {
          type: 'LOGIN',
          uid: 'abc123'
        }
        const res = reducers.authReducer(undefined, df(action))

        expect(res).toEqual({
          uid: action.uid
        })
      })

      it('Should wipe auth on LOGOUT', () => {
        const authData = {
          uid: 'abc123'
        }
        const action = {
          type: 'LOGOUT'
        }

        const res = reducers.authReducer(df(authData), df(action))
        console.log(res);
        expect(res).toEqual({})
      })
    })
  })
})
