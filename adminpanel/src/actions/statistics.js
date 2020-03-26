import { SET_SAMPLE_STATISTIC, SET_STATISTIC } from './../actionTypes/index'

export const setStatistics = statistics => dispatch => {
  dispatch({
    type: SET_STATISTIC,
    data: statistics,
  })
}

export const setSampleStaTistics = statistics => dispatch => {
  dispatch({
    type: SET_SAMPLE_STATISTIC,
    data: statistics,
  })
}
