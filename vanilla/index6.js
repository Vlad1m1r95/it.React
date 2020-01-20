const missed = (array) => {
  array = array.sort()
  let shemaArray = []
  shemaArray.push(array[0])

  for (i = 1; i < array.length; i++) {
    shemaArray.push(array[0] + i)
  }

  let missingNumber = shemaArray.filter(number => !array.includes(number))
  return missingNumber.join(' ')
}

console.log(missed([1, 2, 3, 5]))



