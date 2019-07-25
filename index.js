// Your code here

class Cat {
  constructor(name, speak) {
    this.name = name
    this.speak = speak = () => {
      return `${this.name} says meow!`
    }
  }
}

class Dog {
  constructor(name, speak) {
    this.name = name;
    this.speak = speak = () => {
      return `${this.name} says woof!`
    }
  }
}

class Bird {
  constructor(name, ifMale, speak) {
    this.name = name
    this.ifMale = ifMale 
    this.speak = speak = () => {
      if (this.ifMale == `male`){
        return `It's me! ${this.name}, the parrot!`
      } else {
      return `${this.name} says squawk!`
      }
    }
  }
}