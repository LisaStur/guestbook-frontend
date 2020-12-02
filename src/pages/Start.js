import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Spinner } from '../components/Spinner'

const START_URL = 'https://lisas-guestbook2020.herokuapp.com/messages'

export const Start = () => {
  const history = useHistory()
  const [res, setRes] = useState()

  useEffect(() => {
    fetch(START_URL, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        setRes(json)
      })
  }, [])

  useEffect(() => {
    if (res) {
      history.push('/login')
    }
  })

  return (
    <Spinner />
  )
}
