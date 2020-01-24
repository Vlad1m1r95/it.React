
//false === infinity or default
const counter1 = {
  range: false,
  start: false, //dafault 0
  max: false,
  min: false,
  step: 1 // +1 -1
}

//false === infinity
const counter2 = {
  range: false,
  start: 10, //dafault 0
  max: 30,
  min: -30,
  step: 2 // +1 -1
}

const config = {
  counter1,
  counter2,
}

export default config