const short = (array) => {
  let elemArr = []
  let resultArr = []
  array.forEach(element => {
    if (!array.includes(element + 1)) {
      if (elemArr.length >= 2) {
        resultArr.push(`${elemArr.shift()} — ${element}`)
        elemArr = []
      }
      else {
        elemArr = []
        resultArr.push(element)
      }

    } else {
      elemArr.push(element)
    }
  })


  return resultArr.join(' , ')
}


console.log(short([-3, -2, -1, 1, 2, 3]))