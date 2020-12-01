import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { message } from '../reducers/message'
import pen from '../assets/pen.png'
import update from '../assets/update.png'

// eslint-disable-next-line react/prop-types
export const MessageUpdate = ({ id, accessToken }) => {
  const UPDATEMESSAGE_URL = `https://lisas-guestbook2020.herokuapp.com/messages/${id}/update`
  const dispatch = useDispatch()
  const [text, setText] = useState('')
  const [toggled, setToggled] = useState(false)

  const handleOnSubmit = event => {
    event.preventDefault()

    fetch(UPDATEMESSAGE_URL,
      {
        method: 'PUT',
        headers: {
          Authorization: accessToken,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text })
      })
      .then(res => res.json())
      .then(json => {
        dispatch(message.actions.setText({ text }))
        dispatch(message.actions.setUpdate({ update: true }))
        setText('')
        setToggled(!toggled)
      })
      .catch(err => console.log('error:', err))
  }

  return (
    <>
    <UpdateButton type='image' src={pen} onClick={() => setToggled(!toggled)} />
    {toggled &&
    <UpdateForm>
      <UpdateText rows= '5' type='text' value={text} onChange={event => setText(event.target.value)} />
      <SendUpdate
        type='image'
        src={update}
        onClick={handleOnSubmit}
        disabled={text.length < 5 || text.length > 140} />
    </UpdateForm>}
    </>
  )
}

const UpdateButton = styled.input`
  width: 30px;
  height: auto;
  padding: 12px 0 12px 0;
  transition: 0.5s;
  :hover {
    width: 40px;
  }
  :active {
    width: 50px;
    transition: 0.1s;
  }
  :focus {
    outline: none;
  }
`
const UpdateForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const UpdateText = styled.textarea`
  width: 95%;
  margin-left: 12px;
  border: 2px solid lightgrey;
  border-radius: 5px;
`
const SendUpdate = styled.input`
  width: 30px;
  height: auto;
  padding-top: 5%;
  transition: 0.5s;
  :hover {
    width: 35px;
  }
  :active {
    width: 40px;
    transition: 0.2s;
  }
  :disabled  {
    opacity: 0.2;
  }
  :disabled:hover {
    width: 30px;
  }
`
