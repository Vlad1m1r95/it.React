
import getRandomInt from './../helper/mathrandom'
class Counter {
  constructor(config, elem) {
    const { range, start, max, min, step, randomize } = config
    const { blockCounter, numb } = elem
    this.range = range || Infinity,
      this.start = start || 0,
      this.max = max || Infinity,
      this.min = min || -Infinity,
      this.step = step || 1,
      this.counter = this.start
    this.block = blockCounter
    this.randomize = randomize








  }
  // setid() {
  //   this.block.id = this.state
  // }


  getCounter() {

    return this.counter
  }

  check() {
    setTimeout(() => this.block.dataset.counter = this.start, 1)
    this.block.addEventListener('click', (e) => {
      e = event.target
      switch (e.className) {
        case 'dec_button':
          this.decrement()
          this.block.dataset.counter = this.getCounter()
          break;
        case 'dec':
          this.decrement()
          this.block.dataset.counter = this.getCounter()
          break;
        case 'inc_button':
          this.increment()
          this.block.dataset.counter = this.getCounter()
          break;
        case 'inc':
          this.increment()
          this.block.dataset.counter = this.getCounter()
          break;

        default:
          break;
      }

    })

  }

  decrement() {

    if (this.randomize) {
      const { start, end } = this.randomize
      this.step = getRandomInt(start, end)
    }
    if (this.counter > this.min) {
      return this.counter = this.counter - this.step
    }
    if (this.counter < this.min) {
      return this.counter = this.min
    }



  }
  increment() {
    if (this.randomize) {
      const { start, end } = this.randomize
      this.step = getRandomInt(start, end)
    }
    if (this.counter < this.max) {
      return this.counter = this.counter + this.step
    }
    if (this.counter > this.max) {
      return this.counter = this.max
    }

  }


}

export default Counter