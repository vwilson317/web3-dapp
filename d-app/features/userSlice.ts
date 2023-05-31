import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import User from '../interfaces/User'

// Define a type for the slice state
interface UserState {
  users: User[]
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

export const { set } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getUsers = (state: RootState) => state.user.users;

export default userSlice.reducer