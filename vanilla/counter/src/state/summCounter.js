import State from './state';

class SummCounter {
  constructor(stateCounter = State.Counter) {
    this.sum = stateCounter;
  }

  setSumCounter(counter) {
    this.sum += counter;
  }

  getSumCounter() {
    return this.sum;
  }
}
export default SummCounter;
