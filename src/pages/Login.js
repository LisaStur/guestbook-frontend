import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { user } from '../reducers/user'

const SIGNUP_URL = 'http://localhost:8080/users'
const LOGIN_URL = 'http://localhost:8080/sessions'

export const Login = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const accessToken = useSelector((store) => store.user.login.accessToken)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(SIGNUP_URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setUserId({ userId: json.userId }))
        console.log(json)
      })
      .catch(err => console.log('error:', err))
  }

  const handleLogin = event => {
    event.preventDefault()

    fetch(LOGIN_URL, {
      method: 'POST',
      body: JSON.stringify({ name, password }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        dispatch(user.actions.setAccessToken({ accessToken: json.accessToken }))
        dispatch(user.actions.setUserId({ userId: json.userId }))
        console.log(json)
      })
      .catch(err => console.log('error:', err))
  }

  useEffect(() => {
    if (accessToken) {
      history.push('/guestbook')
    }
  })

  return (
    <form>
      Sign Up
      <label>
        Name
        <input required value={name} onChange={event => setName(event.target.value)}/>
      </label>
      <label>
        password
        <input required type='password' value={password} onChange={event => setPassword(event.target.value)}/>
      </label>
      <button type='submit' onClick={handleSubmit}>Sign Up!</button>
      <button type='submit' onClick={handleLogin}>Sign In!</button>
    </form>
  )
}
