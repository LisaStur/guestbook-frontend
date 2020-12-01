import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
import { LikeButton } from './LikeButton'
import { Spinner } from './Spinner'
import { MessageUpdate } from './MessasgeUpdate'
import { MessageDelete } from './MessageDelete'

const MESSAGES_URL = 'https://lisas-guestbook2020.herokuapp.com/messages'

export const MessageList = () => {
  const accessToken = useSelector(store => store.user.login.accessToken)
  const text = useSelector(store => store.message.message.text)
  const update = useSelector(store => store.message.message.update)
  const [messages, setMessages] = useState([])
  const [isLoading, setIsloading] = useState(true)
  const currentUser = useSelector(store => store.user.login.userId)

  useEffect(() => {
    fetch(MESSAGES_URL, {
      method: 'GET',
      headers: { Authorization: accessToken, 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(json => {
        setMessages(json)
        setIsloading(false)
      })
  }, [text, update])

  return (
    <div>
      {isLoading && <Spinner />}
      {messages.map(message => (
        <MessageCard key={message._id}>
          <PostedMessage>
            <Message>{message.text}</Message>
            <>
              <CreatedBy>{message.author.name}</CreatedBy>
              <CreatedAt>{moment(message.createdAt).fromNow()}</CreatedAt>
            </>
          </PostedMessage>
          <Interactions>
            {currentUser === message.author._id &&
            <>
              <MessageDelete id={message._id} />
              <MessageUpdate id={message._id} />
            </>}
            <LikeButton id={message._id} likes={message.like}/>
          </Interactions>
        </MessageCard>
      ))}
    </div>
  )
}

const MessageCard = styled.section`
  display: flex;  
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid lightgrey;
  border-radius: 5px;
  margin: 5%;
  padding: 5%;
  background-color: #f5f5e9;
`
const PostedMessage = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  padding-left: 12px;
`
const Message = styled.p`
  font-size: 20px;
`
const CreatedBy = styled.p`
  font-size: 12px;
  font-style: italic;
  padding: 0 2% 0 0;
  margin-bottom: 0;
`
const CreatedAt = styled.p`
  font-size: 12px;
  margin-top: 0;
`
const Interactions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `
