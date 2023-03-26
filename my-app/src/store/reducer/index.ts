import type {PayloadAction} from '@reduxjs/toolkit'
import {createSlice} from '@reduxjs/toolkit'

export interface TextState {
  textField: string
}

const initialState: TextState = {
  textField: 'click me!!!',
}

export const textReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    save: (state, data: PayloadAction<string>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.textField = data.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const {save} = textReducer.actions

export default textReducer.reducer