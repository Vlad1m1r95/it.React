import Api from './../../../api/api'

const ERROR_MISSING_PAYLOAD =
  'the third parameter asyncAction should  contain an object with the required payload field'
const ERROR_TYPE_REQUIRED = 'ERROR_ASYNC_ACTION : payload field is required '
// setLoading, setError,

export async function asyncGetDataAndUpdateStore(
  apiMethod = 'getEmployees',
  setNewStore
) {
  try {
    const response = await Api[apiMethod]()
    const json = await response.json()
    setNewStore(json)
  } catch (error) {
    console.error(error)
  }
}
export async function asyncAction(
  apiMethod,
  callback = 'dont call',
  { payload, flag, setLoading = false },
  responseJson = false
) {
  if (!payload)
    throw new Error(`${ERROR_TYPE_REQUIRED} — ${ERROR_MISSING_PAYLOAD}`)
  try {
    const response = await Api[apiMethod](payload)
    const json = await response.json()
    if (callback !== (null || undefined || 'dont call')) {
      if (responseJson === true) {
        console.log(json)
        callback(json)
      } else {
        callback(!flag)
      }
    }
  } catch (e) {
    // setError !== undefined ? setError(e.message || 'Unexpected error') : console.log('обработчик ошибок отключен')
  }
}
