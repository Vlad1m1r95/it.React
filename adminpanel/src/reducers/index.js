import { combineReducers } from 'redux'
import employeeReduser from './employee'
import { editEmployeeReduser } from './employee'
import { sliceReduser } from './../slice'

const rootReducer = combineReducers({
  employeeReduser,
  editEmployeeReduser,
  ...sliceReduser,
})
export default rootReducer
