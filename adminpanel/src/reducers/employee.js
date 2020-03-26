import {
  EDIT_EMPLOYEE,
  RESET_EDIT_EMPLOYEE,
  ADD_EDIT_EMPLOYEE,
  ADD_EMPLOYEE,
} from './../actionTypes'
import { createReducer } from '@reduxjs/toolkit'



export const editEmployeeReduser = createReducer(
  {},
  {
    [EDIT_EMPLOYEE]: (state, action) => {
      return { ...state, data: action.payload }
    },

    [RESET_EDIT_EMPLOYEE]: (state, action) => action.payload,
  })

// [ADD_EDIT_EMPLOYEE]: (state, action) => {
//   return { ...state, data: action.payload }
// }

export const addEditEmployeeReduser = createReducer(
  {},
  {
    [ADD_EDIT_EMPLOYEE]: (state, action) => {
      return { ...state, data: action.payload }
    }
  })

export const addEmployeeReduser = createReducer(
  {},
  {
    [ADD_EMPLOYEE]: (state, action) => {
      return { ...state, data: action.payload }
    }
  })