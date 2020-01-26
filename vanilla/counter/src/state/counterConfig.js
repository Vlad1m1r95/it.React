import getRandomInt from '../helper/mathrandom';

const counter1 = {
  range: false,
  start: false, // dafault 0
  max: false,
  min: false,
  step: 1, // +1 -1
  randomize: false,
};
const counter2 = {
  range: false,
  start: 10, // dafault 0
  max: 30,
  min: -30,
  step: 2, // +1 -1
  randomize: false,
};
const counter3 = {
  range: false,
  start: 100, // dafault 0
  max: +200,
  min: -200,
  step: getRandomInt(1, 10), // +1 -1
  randomize: { start: 0, end: 10 },
};
const config = {
  counter1,
  counter2,
  counter3,
};

export default config;
