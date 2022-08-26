import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper'
import auth from './authReducer'

export const reducers = {
  auth,
}
export const combineReducersState = combineReducers(reducers)

export const reducersWithNext = (state: any, action: any) => {
  const { type, payload } = action

  if (type === HYDRATE) {
    const nextState = {
      ...state,
      ...payload,
    }

    if (state.count) nextState.count = state.count

    return nextState
  }
  return combineReducersState(state, action)
}
