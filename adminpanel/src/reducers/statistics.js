import { SET_STATISTIC, SET_SAMPLE_STATISTIC } from './../actionTypes'
import { createReducer } from '@reduxjs/toolkit'

export const statisticReduser = createReducer(
  {},
  {
    [SET_STATISTIC]: (state, action) => {
      const data = action.payload
      return {
        ...state,
        data,
      }
    },
  }
)
export const sampleStatisticsReduser = createReducer(
  {},
  {
    [SET_SAMPLE_STATISTIC]: (state, actions) => actions.payload,
  }
)
