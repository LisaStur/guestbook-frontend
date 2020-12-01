import React from 'react'
import { MessageList } from '../components/MessageList'
import { MessagePost } from '../components/MesssagePost'

export const Guestbook = () => {
  return (
    <div>
      <MessagePost />
      <MessageList />
    </div>
  )
}
