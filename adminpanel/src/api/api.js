const API_BASE_ADDRESS = 'http://localhost:4000'

const AUTH_LOGIN = '/auth/login'
const AUTH_HEADER = 'SuperAdmin'

const EMPLOYEES = '/employees'
const STATISTICS = '/statistics'

const myHeaders = new Headers()
myHeaders.append('Autot', 'text/xml')
console.log(myHeaders.get('Content-Type'))
export default class Api {
  static logIn(payload) {
    const uri = API_BASE_ADDRESS + AUTH_LOGIN
    return fetch(uri, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
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
        Authorization: AUTH_HEADER,
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
        Authorization: AUTH_HEADER,
      },
    })
  }

  static deleteEmployee(employee) {
    const uri = API_BASE_ADDRESS + EMPLOYEES + `/${employee.id}`
    return fetch(uri, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_HEADER,
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
        Authorization: AUTH_HEADER,
      },
    })
  }
  //STATISTICS
  static getStatistics(payload) {
    const uri = API_BASE_ADDRESS + STATISTICS + `/${payload.id}`
    return fetch(uri, {
      method: 'PUT',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_HEADER,
      },
    })
  }
}
