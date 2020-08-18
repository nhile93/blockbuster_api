import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import movieReducer from './rootReducers'

const middleWare = [thunk]
const store = createStore(movieReducer, applyMiddleware(...middleWare))

// console.log(store.getState())
store.subscribe(()=> console.log(store.getState()))

export default store