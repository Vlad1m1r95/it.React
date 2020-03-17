import nanoid from 'nanoid'

const generateKey = (n, long) => {
  const keys = []
  for (let i = 1; i <= n; i++) {
    keys.push(nanoid(long))
  }
  return keys
}
const keys = generateKey(20, 3)
console.log(keys)
export default keys
