import { EDIT_EMPLOYEE, SET_EMPLOYEES } from './../actionTypes'

export const editEmployee = employee => dispatch => {
  dispatch({ type: EDIT_EMPLOYEE, payload: employee })
}

export const setEmployees = employees => dispatch => {
  dispatch({
    type: SET_EMPLOYEES,
    data: employees,
  })
}
