const getMissingNumbers = arr => {
  const missLength = arr[arr.length - 1] - arr[0]
  console.log(missLength)
  for (let i = 1; i < missLength; i++) {
    arr.splice(1, 0, arr[0] + i)
  }
  arr.sort()
  return (arr = [...new Set(arr)])
}
export default getMissingNumbers
