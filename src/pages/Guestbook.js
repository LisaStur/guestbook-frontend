import React from 'react'
import { MessageList } from '../components/MessageList'
// import { Logout } from '../components/Logout'
import { MessagePost } from '../components/MesssagePost'

export const Guestbook = () => {
  return (
    <div>
      <MessagePost />
      <MessageList />
    </div>
  )
}
