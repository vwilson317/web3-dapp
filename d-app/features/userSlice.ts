import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import getUsersAsync from '../services/UserService';
import { LoginUser } from '../types/global';
//@ts-ignore
import _ from 'lodash';
import { ScreenType } from '../components/Drawer';
import HomeScreen from '../components/LandingScreen';
import MatchingView from '../components/Matching/MatchingView';
import SearchView from '../components/Search/SearchView';
import MyMatchesScreen from '../components/MyMatches/MyMatchesScreen';
import ViewProfileScreen from '../components/Profile/ViewProfileScreen';

// Define a type for the slice state
interface UserState {
  users: User[],
  loginUser?: LoginUser,
  // currentScreens?: object
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
  loginUser: undefined,
  // currentScreens: undefined
}

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    set: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    setLoginUser: (state, action: PayloadAction<LoginUser>) => {
      state.loginUser = action.payload;
    },
    // setCurrentScreens: (state, action: PayloadAction<ScreenType>) => {
    //   debugger
    //   switch (action.payload) {

    //   }
    // }
  }
});

export const { set, setLoginUser } = userSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getUsers = (state: RootState) => state.user.users;
export const getLoginUser = (state: RootState) => state.user.loginUser; // todo: move this
export const isLoggedin = (state: RootState) => !_.isEmpty(state.user.loginUser);
// export const getCurrentScreens = (state: RootState) => state.user.currentScreens;

export default userSlice.reducer;