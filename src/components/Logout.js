import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { user } from '../reducers/user'
import exit from '../assets/exit.png'

export const Logout = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [accessToken, setAccessToken] = useState()

  const handleClick = () => {
    dispatch(user.actions.setAccessToken({ accessToken: null }))
    setAccessToken(null)
    history.push('/')
  }

  return (
    <LogoutButton type='image' src={exit} value={accessToken} onChange={event => event.target.value} onClick={handleClick}/>
  )
}

const LogoutButton = styled.input`
  width: 60px;
  height: auto;
  transition: 0.5s;
  :hover {
    width: 70px;
  }
  :active {
    width: 80px;
    transition: 0.1s;
  }
  :focus {
    outline: none;
  }
`
