import { SET_AUTH_DATA_SUCCESS } from './../actionTypes'
import { createReducer } from '@reduxjs/toolkit'

export const authDataReduser = createReducer(
  {},
  {
    [SET_AUTH_DATA_SUCCESS]: (state, actions) => (state = actions.payload),
  }
)
