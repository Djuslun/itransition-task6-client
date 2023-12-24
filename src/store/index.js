import { configureStore } from '@reduxjs/toolkit';
import tools from './toolSlice';
import canvas from './canvasSlice';

const store = configureStore({
  reducer: {
    tools,
    canvas
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;