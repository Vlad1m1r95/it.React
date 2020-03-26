import { useEffect, useState, useCallback } from 'react'
import Api from './../../api/api'

function useFetch() {
  const [apiMethod, setApiMethod] = useState('initial null')
  const [payload, setPayload] = useState('initial null')
  const ERROR_TYPE_PAYLOAD = `Payload not passed to useFetch`
  const [dependence, setDependence] = useState([])
  const [res, setRes] = useState({
    isLoading: false,
    data: { status: 'initial null' },
  })
  function setReq(method, payload, reqDependence) {
    setApiMethod(method)
    setPayload(payload)
    if (Array.isArray(reqDependence)) {
      if (
        reqDependence.filter(n => dependence.indexOf(n) === -1).length !== 0
      ) {
        setDependence(reqDependence)
      }
    }
  }
  async function fetchUseApi(apiMethod) {
    if (apiMethod === 'initial null') return

    if (payload === undefined || null) throw new Error(`${ERROR_TYPE_PAYLOAD}`)

    try {
      setRes({ isLoading: true })
      const response = await Api[apiMethod](payload)
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
    fetchUseApi(apiMethod, payload)
  }, [payload, dependence])

  return { setReq, res }
}

export default useFetch
