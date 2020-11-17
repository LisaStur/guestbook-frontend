import React from 'react'
import { MessageList } from '../components/MessageList'
import { MessagePost } from '../components/MesssagePost'

export const Home = () => {
  return (
    <div>
      <MessagePost />
      <MessageList />
    </div>
  )
}
