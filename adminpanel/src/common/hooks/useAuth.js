import React, { useState, useEffect, useCallback } from 'react'
import Api from './../../api/api'
import { useDispatch } from 'react-redux'
import { SET_AUTH_DATA_SUCCESS } from './../../actionTypes/index'
import { useHistory } from 'react-router-dom'

function useAuth() {
  const [employeeAuthData, setEmployeeAuthData] = useState('initial null')
  const [res, setRes] = useState({
    isLoading: false,
    data: { status: 'initial null' },
  })
  console.log(employeeAuthData)
  let history = useHistory()
  function authData(authData) {
    setEmployeeAuthData(authData)
  }
  const API_METHOD = 'logIn'
  const ERROR_MISSING_PAYLOAD = 'UseAuth hook must contain the payload object'

  async function fetchUseApi(apiMethod) {
    if (employeeAuthData === 'initial null') return

    try {
      setRes({ isLoading: true })
      const response = await Api[apiMethod](employeeAuthData)
      const data = await response.json()

      return setRes({
        isLoading: false,
        data: data,
      })
    } catch (e) {
      setRes({
        isLoading: false,
      })

      console.error(`Ошибка запроса : ${e} `)
    }
  }
  useEffect(() => {
    fetchUseApi(API_METHOD, employeeAuthData)
  }, [employeeAuthData])
  const dispatch = useDispatch()
  const dispathToStore = useCallback(() =>
    dispatch({ type: SET_AUTH_DATA_SUCCESS, payload: res }, [res])
  )
  dispathToStore()
  localStorage.setItem('authData', JSON.stringify(res.data))

  return { authData, res }
}

export default useAuth
