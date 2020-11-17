import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { LikeButton } from './LikeButton'
import { Spinner } from './Spinner'

export const MessageList = () => {
  const [messages, setMessages] = useState([])
  const [isLoading, setIsloading] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8080/messages')
      .then(res => res.json())
      .then(json => setMessages(json))
    setIsloading(false)
  })

  return (
    <div>
      {isLoading && <Spinner />}
      {messages.map(message => (
        <MessageCard key={message._id}>
          <Message>{message.text}</Message>
          <CreatedAt>{moment(message.createdAt).fromNow()}</CreatedAt>
          <LikeButton id={message._id}/>
          <Likes>{message.like}</Likes>
        </MessageCard>
      )) }
    </div>
  )
}

const MessageCard = styled.section`
  display: flex;  
  flex-direction: column;
  border: 2px solid lightgrey;
  border-radius: 5px;
  margin: 5%;
  padding: 12px ;
  background-color: #f5f5e9;
`
const Message = styled.p`
  font-size: 20px;
`
const CreatedAt = styled.p`
  font-size: 12px;
  text-align: right;
`
const Likes = styled.p`
  font-size: 12px;
  color: darkgrey:
`
