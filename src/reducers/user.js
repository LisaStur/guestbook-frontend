import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: {
    accessToken: null,
    userId: 0
  }
}

export const user = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload
      console.log(`AccessToken: ${accessToken}`)
      state.login.accessToken = accessToken
    },
    setUserId: (state, action) => {
      const { userId } = action.payload
      console.log(`User Id: ${userId}`)
      state.login.userId = userId
    }
  }
})
