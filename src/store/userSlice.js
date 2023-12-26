import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const userAdapter = createEntityAdapter()

const initialState = userAdapter.getInitialState({
  userName: '',
  userId: ''
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userName = action.payload.name
      state.userId = action.payload.id
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