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
  // payload = JSON.stringify(payload)
  console.log(payload)
  if (!payload)
    throw new Error(`${ERROR_TYPE_REQUIRED} — ${ERROR_MISSING_PAYLOAD}`)
  try {
    console.log(payload)
    const response = await Api[apiMethod](payload)
    const json = await response.json()
    console.log(json)
    console.log(json)
    console.log(json)

    if (callback !== (null || undefined || 'dont call')) {
      if (responseJson === true) {
        callback(json)
        return json
      } else {
        callback(!flag)
      }
    }
  } catch (e) {
    console.error(`Ошибка запроса : ${e}  , json : `)
    // setError !== undefined ? setError(e.message || 'Unexpected error') : console.log('обработчик ошибок отключен')
  }
}
