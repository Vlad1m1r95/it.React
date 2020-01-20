const longest = (string) => {
  let uniqueСharacters = []
  let arrSplitIndex = [0]
  let longestStr = []
  let strArray = string.split('')
  strArray.forEach((element, i) => {
    if (uniqueСharacters.includes(element)) {
      arrSplitIndex.push(i)
      uniqueСharacters = []

    } else {
      uniqueСharacters.push(element)
    }
  });

  longestStr = arrSplitIndex.map((el, index) => {
    if (index !== 0) {
      return string.slice(el + 1, arrSplitIndex[index + 1])
    }
    else {
      return string.slice(el, arrSplitIndex[index + 1])
    }

  }


  )

  return longestStr = longestStr.filter(el => el.length === Math.max(...longestStr.map(str => str.length))).join('')

}




console.log(longest('abcaabcda'))