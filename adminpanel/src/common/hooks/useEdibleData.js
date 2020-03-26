import { useMemo } from 'react'

function useEdibleData(inEdibleData, howToCook) {
  const moreThenZeroArray = inEdibleData => {
    let EdibleData = []
    if (inEdibleData.length >= 1) {
      EdibleData = inEdibleData.map(employee => ({
        ...employee,
        key: employee.id,
      }))
    }
    return EdibleData
  }
  const cooking = (inEdibleData, howToCook) => {
    let EdibleData = []
    if (howToCook === 'Array') {
      if (Array.isArray(inEdibleData)) {
        EdibleData = moreThenZeroArray(inEdibleData)
      }
    } else {
      EdibleData = Object.values(inEdibleData)
      EdibleData = moreThenZeroArray(EdibleData)
    }
    return EdibleData
  }
  const EdibleData = useMemo(() => cooking(inEdibleData, howToCook), [
    inEdibleData,
    howToCook,
  ])

  return EdibleData
}
export default useEdibleData
