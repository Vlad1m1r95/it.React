import State from '../state/state';

class SummCounter {
  constructor(stateCounter = State.сounter) {
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
