
const longestPalindrome = (string) => {

  let strArray = string.split('')
  let palindromes = []



  const isPalindrome = (el, nexel) => {
    let elem = el + nexel
    if (elem === elem.split('').reverse().join('')) {
      palindromes.push(elem)
    }

    return elem


  }

  strArray.reduce((el, nexel) => isPalindrome(el, nexel))

  return palindromes.join('')
  // isPalindrome(el + nexel)


}


console.log(longestPalindrome('dbabddb'))

