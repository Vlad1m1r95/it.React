const largestN = (array, n) => {
  array = array.sort((a, b) => b - a)

  return array[n - 1]
}




console.log(largestN([2, 4, 1, 5, 3], 1))