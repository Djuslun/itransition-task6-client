import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const toolsAdapter = createEntityAdapter()

const initialState = toolsAdapter.getInitialState({
  tool: 'pen',
  borderColor: '#000000ff',
  fillColor: '#ffffff00'
})

const toolsSlice = createSlice({
  name: 'tool',
  initialState,
  reducers: {
    toolSet: (state, action) => {
      state.tool = action.payload
    },
    borderColorSet: (state, action) => {
      state.borderColor = action.payload
    },
    fillColorSet: (state, action) => {
      state.fillColor = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addDefaultCase(() => { })
  }
})

const { actions, reducer: tools } = toolsSlice

export default tools

export const { selectAll } = toolsAdapter.getSelectors(state => state.tool)

export const { toolSet, borderColorSet, fillColorSet } = actions