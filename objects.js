// Objetos

const dog = {
    age: 10,
    name: 'Snoppy',
    breed: 'cocker'
}

// Acceder a propiedades
console.log(dog.name, dog['name'])

// Mutar propiedades
dog.name = 'Scooby'
dog.age = 5

// Objeto inmutable
Object.freeze(dog)
dog.name = 'Rambo'
dog.age = 50


// Iterar sobre un objeto
for (let property in dog) {
    console.log(property, dog[property])
}

Object.values(dog) // [10, 'Snoopy', 'cocker']
Object.entries(dog) // [[age, 10], ['name', 'Snoppy'], ['breed', 'cocker']]

for (let property of Object.keys(dog)) {
    console.log(property, dog[property])
}

Object.keys(dog) // ['age', 'name', 'breed']
Array.from(['age', 'name', 'breed']).forEach((property) => {
    console.log(property, dog[property])
})


const project = {
    title: '',
    text: '',
    image: ''
}


