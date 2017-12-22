import { combineReducers, createStore, compose, applyMiddleware } from 'redux'

function reducer(state = {}, action) {
  return state
}

const reducers = combineReducers({
  reducer
})

export default createStore(reducers)
