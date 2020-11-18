import React, { useState } from 'react'
import styled from 'styled-components'
import send from '../assets/send.png'

export const MessagePost = () => {
  const POSTMESSAGE_URL = 'http://localhost:8080/messages'
  const [text, setText] = useState('')

  const handleOnSubmit = event => {
    event.preventDefault()

    fetch(POSTMESSAGE_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      }
    ).then(() => {
      window.location.reload()
    })
  }
  return (
    <MessageForm>
      <TextArea rows= '5' type='text' onChange={event => setText(event.target.value)} />
      <SendMessage
        type='image'
        src={send}
        onClick={handleOnSubmit}
        disabled={text.length < 5 || text.length > 140} />
    </MessageForm>
  )
}

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid lightgrey;
  border-radius: 5px;
  margin: 5%;
  padding: 12px ;
  background-color: #f5f5e9;
`
const TextArea = styled.textarea`
  width: 95%;
  border: 2px solid lightgrey;
  border-radius: 5px;
  margin-bottom: 6px;
`
const SendMessage = styled.input`
  height: auto; 
  width: 50px;
  transition: 0.5s;
 
  :hover {
    width: 70px;
  }
  :active {
    width: 100px;
    transition: 0.2s;
  }
  :disabled  {
    opacity: 0.2;
  }
  :disabled:hover {
    width: 50px;
  }
`
