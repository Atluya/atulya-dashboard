
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from "../reducers";

let store = configureStore({reducer: rootReducer});

export { store };

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch