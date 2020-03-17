import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit'

const test = createSlice({
  name: 'test',
  initialState: 0,
  reducers: {
    increment: state => state + 1,
    decrement: state => state - 1,
  },
})

export default test
