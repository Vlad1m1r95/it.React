const matrix = [
  ['F', 'A', 'C', 'E'],
  ['O', 'B', 'O', 'P'],
  ['N', 'A', 'R', 'B'],
  ['E', 'A', 'N', 'D']
]

const check = (matrix, string) => {
  let result = []
  matrix.forEach((element, i) => {
    result.push((matrix.map((arr) => arr[i])).join(''))
  });
  let topDownArray = matrix.map(arr => arr.join(''))

  result = result.concat(topDownArray)
  const isContainsaString = result.find(item => item === string)

  if (isContainsaString) {
    return true
  }
  else { return false }

}

console.log(check(matrix, 'ABAA'))