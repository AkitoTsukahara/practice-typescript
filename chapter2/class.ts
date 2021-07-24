class Creature {
    numberOfHands: number
    numberOfFeet: number
    constructor(numberOfHands: number, numberOfFeet: number) {
        this.numberOfHands = numberOfHands
        this.numberOfFeet = numberOfFeet
    }
}
const creature = new Creature(0, 4)

class Dog0 extends Creature {
    bark: string
    constructor(bark: string) {
        super(0, 4)
        this.bark = bark
    }
    barking() {
        return `${this.bark}! ${this.bark}!` 
    }
    shakeTail() {
        console.log(this.barking())
    }
}
class Human extends Creature {
    name: string
    constructor(name: string) {
        super(2, 2)
        this.name =name
    }
    protected greet() {
        return `Hello! I'm ${this.name}`
    }
    public shakeHands() {
        console.log(this.greet())
    }
}
const dog = new Dog0('bow-bow')
const human = new Human('Taro')
human.greet() // error
human.shakeHands() // ok


// enum
enum Direction {
    Up,
    Down,
    Left,
    Right
}
const left = Direction.Left

enum Ports {
    USER_SERVICE = '8080',
    REGISTER_SERVICE = '8081',
    MEDIA_SERVICE = '8888',
}
