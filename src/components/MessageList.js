import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import moment from 'moment'
import { LikeButton } from './LikeButton'
import { Spinner } from './Spinner'
import { MessageUpdate } from './MessasgeUpdate'
import { MessageDelete } from './MessageDelete'

const MESSAGES_URL = 'http://localhost:8080/messages'

export const MessageList = () => {
  const text = useSelector(store => store.message.message.text)
  const like = useSelector(store => store.message.message.like)
  const [messages, setMessages] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    fetch(MESSAGES_URL)
      .then(res => res.json())
      .then(json => {
        setMessages(json)
        setIsloading(false)
      })
  }, [text, like])

  return (
    <div>
      {isLoading && <Spinner />}
      {messages.map(message => (
        <MessageCard key={message._id}>
          <PostedMessage>
            <Message>{message.text}</Message>
            <Created>
              <CreatedBy>{message.author.name}</CreatedBy>
              <CreatedAt>{moment(message.createdAt).fromNow()}</CreatedAt>
            </Created>

          </PostedMessage>
          <Interactions>
            <MessageDelete id={message._id} />
            <MessageUpdate id={message._id} />
            <LikeButton id={message._id} likes={message.like}/>
          </Interactions>
        </MessageCard>
      )) }
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
  padding: 12px;
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
const Created = styled.div`
  display: flex;
  flex-direction: row;  
`
const CreatedBy = styled.p`
  font-size: 12px;
  font-style: italic;
  padding-right: 2%;
`
const CreatedAt = styled.p`
  font-size: 12px;
`
const Interactions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `
