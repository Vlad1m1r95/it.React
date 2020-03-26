import { combineReducers } from 'redux'
import { addEmployeeReduser, editEmployeeReduser, addEditEmployeeReduser } from './employee'
import { statisticReduser, sampleStatisticsReduser } from './statistics'
import { authDataReduser } from './auth'

const rootReducer = combineReducers({
  authDataReduser,
  editEmployeeReduser,
  addEditEmployeeReduser,
  statisticReduser,
  sampleStatisticsReduser,
  addEmployeeReduser,
})
export default rootReducer
