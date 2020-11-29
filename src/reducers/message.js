import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: {
    text: '',
    userId: 0,
    update: false,
    messageId: 0
  }
}

export const message = createSlice({
  name: 'message',
  initialState: initialState,
  reducers: {
    setText: (state, action) => {
      const { text } = action.payload
      console.log(`Reducer text: ${text}`)
      state.message.text = text
    },
    setLike: (state, action) => {
      const { like } = action.payload
      state.message.like = like
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      state.message.userId = userId
    },
    setUpdate: (state, action) => {
      const { update } = action.payload
      state.message.update = update
    },
    setMessageId: (state, action) => {
      const { messageId } = action.payload
      console.log(`Message Id reducer: ${messageId}`)
      state.message.messageId = messageId
    }
  }
})
