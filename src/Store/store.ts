import { configureStore } from '@reduxjs/toolkit';
// import your reducers here
// import counterReducer from '../Store/States/Counter';
import userReducer from './States/User';
export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    user: userReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
