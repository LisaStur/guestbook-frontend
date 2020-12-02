import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Spinner } from '../components/Spinner'

const START_URL = 'https://lisas-guestbook2020.herokuapp.com'

export const Start = () => {
  const history = useHistory()
  useEffect(() => {
    fetch(START_URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        console.log(json)
        history.push('/login')
      })
  }, [])
  return (
    <Spinner />
  )
}
