import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import getUsersAsync from '../services/UserService';

// Define a type for the slice state
interface UserState {
  users: User[],
  loginUser?: User
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
  loginUser: undefined
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setLoginUser: (state, action: PayloadAction<User>) => {
      state.loginUser = action.payload;
    },
    // getAsync: (state, action: PayloadAction<string>) => {
    //   getUsersAsync(action.payload).then((users: User[]) => {
    //     state.users = users;
    //   })
    // }
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  }
});

export const { set, setLoginUser } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const getUsers = (state: RootState) => state.user.users;
export const getLoginUser = (state: RootState) => state.user.loginUser; // todo: move this

export default userSlice.reducer