let state = { counter: 10 }
state.counter = setTimeout(() => crst(), 100)

export function setStateGreetingsCounters() {

}
function crst(value) {
  // state.counter = crst()
  return value
}
export function createStateGreetingsCounters(value) {
  console.log(value)
  // state.counter += value
  crst(value)
}


export function getStateGreetingsCounters() {
  console.log(state)
  return state
}
console.log(state)