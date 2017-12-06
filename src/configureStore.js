import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {initialState} from './initialState.json'
import rootReducer from './reducers.js'

let configureStore = function (preloadedState,initialState) {
    console.log('preloaded ' +preloadedState)
    return createStore(rootReducer,preloadedState,applyMiddleware(thunkMiddleware))
  }

export default configureStore
