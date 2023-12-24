import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const canvasAdapter = createEntityAdapter()

const initialState = canvasAdapter.getInitialState({
  shapes: [],
  undo: [],
})

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    shapesSet: (state, action) => {
      state.shapes = action.payload
    },
    shapesClear: (state) => {
      state.shapes = initialState.shapes
      state.undo = initialState.undo
    },
    undo: (state) => {
      if (state.shapes.length) {
        state.undo.push(state.shapes.pop())
      }
    },
    redo: (state) => {
      if (state.undo.length) {
        state.shapes.push(state.undo.pop())
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addDefaultCase(() => { })
  }
})

const { actions, reducer: canvas } = canvasSlice

export default canvas

export const { shapesSet, shapesClear, undo, redo } = actions