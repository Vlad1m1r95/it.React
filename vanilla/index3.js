
const longestPalindrome = (string) => {

  let strArray = string.split('')
  let palindromes = []
  let longestPalindrome = ''

  const isPalindrome = (el, nexel) => {
    let elem = el + nexel
    if (elem === elem.split('').reverse().join('') && elem.length > 2) {
      palindromes.push(elem)
    }
    return elem
  }

  const getPalindrome = (array, n) => {
    if (n <= 2) {
      return
    } else {
      array.reduce((el, nexel) => isPalindrome(el, nexel))
      console.log(array)
      array.shift()
      return getPalindrome(array, array.length)
    }

  }


  getPalindrome(strArray, strArray.length)
  return longestPalindrome = palindromes.filter(el => el.length === Math.max(...palindromes.map(str => str.length))).join('')



}


console.log(longestPalindrome('dbabddb'))

