// Interface segregation principle


// Not valid Interface segregation principle
// class Animal {
//     constructor(name = "Barsik") {
//         this.name = name
//     }

//     walk() {
//         console.log(`${this.name} can walk`);
//     }

//     swim() {
//         console.log(`${this.name} can swimm`);
//     }

//     fly() {
//         console.log(`${this.name} can fly`);
//     }
// }

// class Dog extends Animal {
//     fly() {
//         return null
//     }
// }

// class Eagle extends Animal {
//     swim() {
//         return null
//     }
// }

// class Whale extends Animal {
//     walk() {
//         return null
//     }

//     fly() {
//         return null
//     }
// }

// const dog = new Dog
// dog.walk()
// dog.swim()
// dog.fly()

// const eagle = new Eagle('Been')
// eagle.walk()
// eagle.swim()
// eagle.fly()

// const whale = new Whale('Bob')
// whale.walk()
// whale.swim()
// whale.fly()


//=====================================

//Valid Interface segregation principle

class Animals {
    constructor(name = 'Barsik') {
        this.name = name
    }
}

const walker = {
    walk() {
        console.log(`${this.name} can walk.`);
    }
}

const swimmer = {
    swim() {
        console.log(`${this.name} can swim.`);
    }
}

const flier = {
    fly() {
        console.log(`${this.name} can fly.`);
    }
}

class Dog extends Animals {}
class Eagle extends Animals {}
class Whale extends Animals {}


Object.assign(Dog.prototype, walker, swimmer)
Object.assign(Eagle.prototype, walker, flier)
Object.assign(Whale.prototype, swimmer)

const dog = new Dog
dog.walk()
dog.swim()
    // Won't work
    // dog.fly()

const eagle = new Eagle('Been')
eagle.walk()
eagle.fly()
    // Won't work
    // eagle.swim()

const whale = new Whale('Bob')
whale.swim()
    // Won't work
    // whale.walk()
    // whale.fly()