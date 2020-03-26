import { useMemo } from 'react'
import { useHistory } from 'react-router-dom'

function useProtectedRoute() {

  const protectedRoute = [`/EmployeeManagement`, `/Dashboard`, `/OrderManagement`]
  const history = useHistory()
  const { location: { pathname } } = history



  const authDataJSON = localStorage.getItem('authData')
  let redirect = ''
  useMemo(() => {
    const authData = JSON.parse(authDataJSON)
    if (authData === null || undefined) {
      redirect = '/Autorization'
    } else {
      if (authData.status !== undefined) {
        if (protectedRoute.findIndex(route => route === pathname) !== 1) {
          redirect = '/404'
        }
        else {
          redirect = authData.status === 200 ? history.location.pathname : '/401'

        }
      }
    }
  }, [authDataJSON])
  if (redirect !== '') {
    history.push(redirect)
  }
}
export default useProtectedRoute
