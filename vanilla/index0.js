class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  say(says) {
    return `the ${this.name} says ${says}`
  }
}

const Milya = new Dog('Milya', '7')
const Barsik = Milya

Barsik.name = 'Barsik'
Barsik.age = '5'



console.log(Milya.say('woof woof !!!'))
console.log(Barsik.say('meow meow !!!'))