import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { message } from '../reducers/message'
import { Logout } from './Logout'
import house from '../assets/house.png'
import send from '../assets/send.png'

const POSTMESSAGE_URL = 'https://lisas-guestbook2020.herokuapp.com/messages'

export const MessagePost = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector(store => store.user.login.accessToken)
  const userId = useSelector(store => store.user.login.userId)
  const [text, setText] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(POSTMESSAGE_URL, {
      method: 'POST',
      headers: { Authorization: accessToken, 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })
      .then(res => res.json())
      .then(json => {
        dispatch(message.actions.setText({ text: json.text }))
        dispatch(message.actions.setUserId({ userId }))
        setText('')
      })
      .catch(err => console.log('error:', err))
  }

  return (
    <MessageContainer>
      <Image src={house} alt='house'/>
      <MessageForm>
        <Welcome>Welcome! Please post me a messsage!</Welcome>
        <TextArea rows= '5' type='text' value={text} onChange={event => setText(event.target.value)} />
        <SendMessage
          type='image'
          src={send}
          onClick={handleSubmit}
          disabled={text.length < 5 || text.length > 140} />
      </MessageForm>
      <LogoutContainer>
        <Logout />
      </LogoutContainer>
    </MessageContainer>
  )
}

const MessageContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid lightgrey;
  border-radius: 5px;
  margin: 5%;
  padding: 12px;
  background-color: #f5f5e9;
  @media (min-width: 668px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`
const MessageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`
const Image = styled.img`
height: 80px;
width: auto:
`
const Welcome = styled.h1`
  font-size: 28px;
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
    width: 60px;
  }
  :active {
    width: 70px;
    transition: 0.2s;
  }
  :disabled  {
    opacity: 0.2;
  }
  :disabled:hover {
    width: 50px;
  }
`
const LogoutContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (min-width: 668px) {
    width: auto;
  }
`
