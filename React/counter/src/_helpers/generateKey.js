function generateKey() {
  let keys = []
  let string = 'abcdefghi123456789ABCDEFGH'
  let a = ''
  let b = ''
  let c = ''
  let word = ''

  for (let i = 0; i < 100; i++) {
    a = string[Math.round(Math.random() * (string.length - 1))]
    b = string[Math.round(Math.random() * (string.length - 1))]
    c = string[Math.round(Math.random() * (string.length - 1))]
    word = a + b + c
    if (!keys.includes(word)) {
      keys.push(word)
    }
  }
  return keys
}

export default generateKey