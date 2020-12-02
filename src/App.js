import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { user } from './reducers/user'
import { Start } from './pages/Start'
import { Login } from './pages/Login'
import { Guestbook } from './pages/Guestbook'
import { message } from './reducers/message'

const reducer = combineReducers({ user: user.reducer, message: message.reducer })
const store = configureStore({ reducer })

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
          <Switch>
            <Route path='/' exact><Start /></Route>
            <Route path='/login' exact><Login /></Route>
            <Route path='/guestbook' exact><Guestbook /></Route>
          </Switch>
      </BrowserRouter>
    </Provider>

  )
}

export default App
