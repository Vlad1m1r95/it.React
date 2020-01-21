const max = (array, money) => {
  array.sort()
  let quantity = 0
  array.forEach(element => {
    if (element <= money) {
      quantity++
      money = money - element
    }
  });
  return quantity
}
console.log(max([4, 2, 2, 1], 5))
