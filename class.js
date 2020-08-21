class Dog {
    constructor(name, breed, age) {
        this.name = name
        this.breed = breed
        this.age = age
    }

    ladra() {
        console.log(`${this.name}, ladra!`)
    }
}

const snoppy = new Dog('Snoppy', 'cocker', 10)

snoppy.ladra()
