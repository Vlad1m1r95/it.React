import settingsCounters from '../settings/counter/settings';

function CreateStateCounter() {
  let state = []
  const settings = Object.values(settingsCounters)
  settings.forEach(settings => {
    state.push({ id: settings["id"], state: settings["counter"] })
  })
  return state
}

export let state = CreateStateCounter()

export function getStateCounter(idCounter) {
  let target = null
  state.forEach(counter => {
    if (counter["id"] === idCounter) {
      target = counter["state"]
    }
  })
  return target
}
export function getStateAllCounter() {
  console.log(state)
  return state
}

export function setStateCounter(idCounter, newState) {
  state.forEach(counter => {
    if (counter["id"] === idCounter) {
      counter["state"] = newState
      console.log(counter)
    }
  })
}
// setStateCounter(1, 102)
