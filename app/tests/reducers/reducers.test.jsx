import expect from 'expect'
import reducers from 'reducers'
import df from 'deep-freeze-strict'

describe('Reducers', () => {
  it('Should exist', () => {
    expect(reducers).toExist()
  })

  describe('searchTextReducer', () => {
    it('Should set Search text', () => {
      const action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'cow'
      }
      const res = reducers.searchTextReducer(df(''), df(action))

      expect(res).toEqual(action.searchText)
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
})
