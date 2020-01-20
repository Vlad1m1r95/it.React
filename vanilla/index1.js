const max = (array, money) => {

  const minfirst = (a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  }
  array.sort(minfirst)
  let quantity = 0
  array.forEach(element => {
    if (element <= money) {
      quantity++
      money = money - element
    }

  });
  return quantity
}
console.log(max([1, 2, 3, 5], 5))
