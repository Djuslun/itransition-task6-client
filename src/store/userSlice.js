import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter()

const initialState = userAdapter.getInitialState({
  user: {}
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addDefaultCase(() => { })
  }
})

const { actions, reducer: user } = userSlice

export default user

export const { selectAll } = userAdapter.getSelectors(state => state.user)

export const { setUser } = actions