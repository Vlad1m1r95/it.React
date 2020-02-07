let state = { counter: 10 }

export function setStateGreetingsCounters() {

}
export function createStateGreetingsCounters(value) {
  console.log(value)
  state.counter += value
}

export function getStateGreetingsCounters() {
  console.log(state)
  return state
}
console.log(getStateGreetingsCounters())