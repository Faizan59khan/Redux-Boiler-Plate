import reducer from './reducer';     //configuration of reducer
import { createStore,applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const store=createStore(reducer, applyMiddleware(thunk)) //no curly brackets

//const store=createStore(reducer)


export default store;