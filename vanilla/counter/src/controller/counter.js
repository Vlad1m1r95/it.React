import getRandomInt from '../helper/mathrandom';
import SummCounter from '../state/summCounter';

const sum = new SummCounter();
class Counter {
  constructor(config, elem) {
    const {
      range, start, max, min, step, randomize,
    } = config;
    const { blockCounter, mainCounter } = elem;

    this.range = range || Infinity;
    this.start = start || 0;
    this.max = max || Infinity;
    this.min = min || -Infinity;
    this.step = step || 1;
    this.counter = this.start;
    this.block = blockCounter;
    this.randomize = randomize;
    this.Data = null;
    this.oldData = null;
    this.differenceData = null;
    this.sum = sum;
    this.MainCounter = mainCounter;
  }

  getCounter() {
    return this.counter;
  }

  check() {
    setTimeout(() => this.block.setAttribute('data-counter', this.start), 1);
    setTimeout(() => this.sum.setSumCounter(parseInt(this.block.dataset.counter, 10)), 1);
    setTimeout(() => this.MainCounter.setAttribute('data-sumcounter', this.sum.getSumCounter()));

    this.block.addEventListener('click', (e) => {
      const event = e.target;
      switch (event.className) {
        case 'dec_button':
          this.getDataStatus(this.decrement.bind(this));
          break;
        case 'dec':
          this.getDataStatus(this.decrement.bind(this));
          break;
        case 'inc_button':
          this.getDataStatus(this.increment.bind(this));
          break;
        case 'inc':
          this.getDataStatus(this.increment.bind(this));
          break;
        default:
          break;
      }
    });
  }

  getDataStatus(mathfunc) {
    this.oldData = this.getCounter();
    mathfunc();
    this.Data = this.getCounter();
    this.differenceData = this.Data - this.oldData;
    this.block.dataset.counter = this.Data;
    this.block.dataset.differenceData = this.differenceData;
    this.sum.setSumCounter(this.differenceData);
    this.MainCounter.dataset.sumcounter = this.sum.getSumCounter();
    return { data: this.Data, dataDifference: this.differenceData, dataOld: this.oldData };
  }

  decrement() {
    if (this.randomize) {
      const { start, end } = this.randomize;
      this.step = getRandomInt(start, end);
    }
    if (this.counter > this.min) {
      this.counter -= this.step;
    }
    if (this.counter < this.min) {
      this.counter = this.min;
    }
    return this.counter;
  }

  increment() {
    if (this.randomize) {
      const { start, end } = this.randomize;
      this.step = getRandomInt(start, end);
    }
    if (this.counter < this.max) {
      this.counter += this.step;
    }
    if (this.counter > this.max) {
      this.counter = this.max;
    }
    return this.counter;
  }
}

export default Counter;
