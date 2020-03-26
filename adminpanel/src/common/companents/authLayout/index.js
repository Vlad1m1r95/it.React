import React, { useState, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { useHistory, Route, Switch } from 'react-router-dom'
import Login from './../loggin/login'
import DashBoard from '../../../section/dashboard'
import App from './../../../app'
function AuthLayout({ children }) {
  const [isLogget, setIsLogget] = useState(false)
  const authData = useSelector(
    state => state.authDataReduser.data,
    shallowEqual
  )

  useEffect(() => {
    if (authData !== undefined) {
      alert('hi')
    }
  }, [authData])
  return <Login />
}

export default AuthLayout
