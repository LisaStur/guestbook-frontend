import React from 'react'
import { useDispatch } from 'react-redux'
import { message } from '../reducers/message'
import styled from 'styled-components'
import bin from '../assets/bin.png'

// eslint-disable-next-line react/prop-types
export const MessageDelete = ({ id }) => {
  const DELETEMESSAGE_URL = `http://localhost:8080/messages/${id}`
  const dispatch = useDispatch()

  const handleClick = () => {
    fetch(DELETEMESSAGE_URL,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: ''
      })
      .then(res => res.json())
      .then(json => {
        dispatch(message.actions.setText({ text: json.text }))
      })
      .catch(err => console.log('error:', err))
  }

  return (
    <DeleteBin type='image' src={bin} onClick={handleClick}/>
  )
}

const DeleteBin = styled.input`
width: 40px;
height: auto;
transition: 0.5s;
:hover {
  width: 50px;
}
:active {
  width: 60px;
  transition: 0.1s;
}
:focus {
  outline: none;
}
`
