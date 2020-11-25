import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  message: {
    text: '',
    userId: 0
  }
}

export const message = createSlice({
  name: 'message',
  initialState: initialState,
  reducers: {
    setText: (state, action) => {
      const { text } = action.payload
      console.log(`Message: ${text}`)
      state.message.text = text
    },
    setLike: (state, action) => {
      const { like } = action.payload
      console.log(`Like: ${like}`)
      state.message.like = like
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      console.log(`User Id: ${userId}`)
      state.message.userId = userId
    }
  }
})
