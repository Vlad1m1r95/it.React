const API_BASE_ADDRESS = 'http://localhost:4000'
const AUTH_LOGIN = '/auth/login'
const AUTH_HEADER = 'Bearer'
const EMPLOYEES = '/employees'
const STATISTICS = '/statistics'

export default class Api {
  static logIn(payload) {
    const uri = API_BASE_ADDRESS + AUTH_LOGIN
    return fetch(uri, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        authorization: AUTH_HEADER,
      },
    })
  }
  static testUpload(payload) {
    const uri = API_BASE_ADDRESS + '/images'
    return fetch(uri, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        authorization: AUTH_HEADER,
      },
    })
  }

  //EMPLOYEES
  static getEmployees() {
    const uri = API_BASE_ADDRESS + EMPLOYEES
    return fetch(uri, {
      // headers: AUTH_HEADER,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: AUTH_HEADER,
      },
    })
  }
  static addEmployee(employee) {
    const uri = API_BASE_ADDRESS + EMPLOYEES
    return fetch(uri, {
      method: 'POST',
      body: JSON.stringify(employee),
      headers: {
        'Content-Type': 'application/json',
        authorization: AUTH_HEADER,
      },
    })
  }

  static deleteEmployee(employee) {
    const uri = API_BASE_ADDRESS + EMPLOYEES + `/${employee.id}`
    return fetch(uri, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        authorization: AUTH_HEADER,
      },
    })
  }
  static editEmployee(employee) {
    const uri = API_BASE_ADDRESS + EMPLOYEES + `/${employee.id}`

    return fetch(uri, {
      method: 'PUT',
      body: JSON.stringify(employee),
      headers: {
        'Content-Type': 'application/json',
        authorization: AUTH_HEADER,
      },
    })
  }
  //STATISTICS
  static getAllStatistics(payload) {
    const uri = API_BASE_ADDRESS + STATISTICS
    return fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: AUTH_HEADER,
      },
    })
  }

  static getStatisticsWithParams(payload) {
    const toStringqueryParams = () => {
      const {
        params,
        params: { id },
      } = payload
      if (params === null || undefined) {
        throw new Error(' api withParams method needs query parameters')
      }

      const newID = id
      const queryIdstr = newID.map(i => `id=${i}&`).join('')
      return queryIdstr
    }
    const queryIdstr = toStringqueryParams()
    const uri = API_BASE_ADDRESS + STATISTICS + `/?${queryIdstr}`
    return fetch(uri, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: AUTH_HEADER,
      },
    })
  }
}
