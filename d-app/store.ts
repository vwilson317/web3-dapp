import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import counterReducer from './src/features/counter/counterSlice'
import userReducer from './src/features/userSlice';
// ...

const store = configureStore({
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
//no idk what this is about
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;