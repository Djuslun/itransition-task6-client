import { configureStore } from '@reduxjs/toolkit';
import tools from './toolSlice';

const store = configureStore({
  reducer: {
    tools
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;