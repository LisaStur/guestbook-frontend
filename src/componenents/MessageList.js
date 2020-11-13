import React, { useEffect, useState } from 'react'

export const MessageList = () => {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/messages')
    .then(res => res.json())
    .then(json => setMessages(json))
  }, [])

  return (
    <div>
      {messages.map(message => (
        <p>{message.text}</p>
      )) }
    </div>
  )
}