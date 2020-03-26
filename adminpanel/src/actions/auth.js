import { SET_AUTH_DATA_SUCCESS } from './../actionTypes/index'

const setAuthData = authSuccessData => dispatch => {
  dispatch({ type: SET_AUTH_DATA_SUCCESS, payload: authSuccessData })
}
export default setAuthData
