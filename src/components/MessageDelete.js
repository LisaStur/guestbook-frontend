import React from 'react'
import styled from 'styled-components'
import bin from '../assets/bin.png'

// eslint-disable-next-line react/prop-types
export const MessageDelete = ({ id }) => {
  const DELETEMESSAGE_URL = `http://localhost:8080/messages/${id}`

  const handleClick = () => {
    fetch(DELETEMESSAGE_URL,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: ''
      }
    ).then(() => {
      window.location.reload()
    })
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
