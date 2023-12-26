import { configureStore } from '@reduxjs/toolkit';
import tools from './toolSlice';
import canvas from './canvasSlice';
import canvasApiSlice from './canvasApiSlice';
import user from './userSlice';

const store = configureStore({
  reducer: {
    tools,
    canvas,
    user,
    [canvasApiSlice.reducerPath]: canvasApiSlice.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(canvasApiSlice.middleware),
  devTools: process.env.NODE_ENV !== 'production',
})

export default store;