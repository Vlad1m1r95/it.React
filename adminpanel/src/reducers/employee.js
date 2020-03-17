import {
  EDIT_EMPLOYEE,
  RESET_EDIT_EMPLOYEE,
  SET_EMPLOYEES,
} from './../actionTypes'
import { createReducer } from '@reduxjs/toolkit'

const employeeReduser = createReducer(
  {},
  {
    // [ADD_EDIT_EMPLOYEE]: (state, action) => {
    //   const newstate = state.filter(employee => employee.key !== action.data.id)
    //   return { employee: [...newstate, action.data] }
    // },

    [SET_EMPLOYEES]: (state, action) => {
      const data = action.data
      return {
        ...state,
        data,
      }
    },
  }
)
export const editEmployeeReduser = createReducer(
  {},
  {
    [EDIT_EMPLOYEE]: (state, actions) => actions.payload,
    [RESET_EDIT_EMPLOYEE]: (state, actions) => actions.payload,
  }
)
export default employeeReduser
