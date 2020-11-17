import React, { useState } from 'react'
import styled from 'styled-components'

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
    )
  }
  return (
    <MessageForm>
      <TextArea rows= '5' type='text' onChange={event => setText(event.target.value)} />
      <Button
        type='submit'
        onClick={handleOnSubmit}
        disabled={text.length < 5 || text.length > 140}>
        Post
      </Button>
    </MessageForm>
  )
}

const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid lightgrey;
  border-radius: 5px;
  margin: 5%;
  padding: 12px ;
  background-color: #f5f5e9;
`
const TextArea = styled.textarea`
  border: 2px solid lightgrey;
  border-radius: 5px;
  margin-bottom: 6px;
`
const Button = styled.button`
  border-radius: 5px;
`
