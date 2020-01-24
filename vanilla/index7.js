const largestN = (array, n) => {
  array = array.sort((a, b) => b - a)
  return array[n - 1]
}




console.log(largestN([10, 10, 9, 5, 3], 2))