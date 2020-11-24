import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { user } from './reducers/user'
import { Guestbook } from './pages/Guestbook'
import { Login } from './pages/Login'
import { message } from './reducers/message'

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    console.log(error)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (error) {
    console.log(error)
    return undefined
  }
}

const reducer = combineReducers({ user: user.reducer, message: message.reducer })
const persistedState = loadFromLocalStorage()
const store = configureStore({ reducer, persistedState })
store.subscribe(() => saveToLocalStorage(store.getState()))

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <Route path='/' exact><Login /></Route>
            <Route path='/guestbook' exact><Guestbook /></Route>
          </Switch>
      </BrowserRouter>
    </Provider>

  )
}

export default App
