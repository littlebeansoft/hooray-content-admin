import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore } from 'redux-persist'
import { createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import { reducersWithNext, combineReducersState } from './reducers'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

const makeStore = () => {
  const isServerSide = typeof window === 'undefined'
  const blindMiddleware = (middleware: any) => applyMiddleware(...middleware)

  if (isServerSide) {
    return createStore(reducersWithNext, blindMiddleware([thunkMiddleware]))
  }

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const enhancer = composeEnhancers(
    blindMiddleware([thunkMiddleware])
    // other store enhancers if any
  )
  return createStore(reducersWithNext, enhancer)
}

const store = makeStore()

export const wrapper = createWrapper(() => store)
export const persistor = persistStore(store)
export type RootState = ReturnType<typeof combineReducersState>
export default store
