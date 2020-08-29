const add = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (value >= 100) {
                return reject('No puede ser mayor a 100')
            }
            return resolve(value + 10)
        }, 1000)
    }) 
}

add(10)
    .then(result => {
        return add(result)
    })
    .then(result2 => {
        return add(result2)
    })
    .then(result3 => {
        if (result3 === 40) {
            throw 'No puede ser 40'
        }
        console.log(result3)
    })
    .catch(err => {
        console.log(err)
    })


// console.log(result)

const arr = [add(10), add(20), add(30)]

Promise.all(arr)
    .then(results => {
        console.log(results)
    })
    .catch(err => {
        console.log(err)
    })


// for (let item of arr) {
//     item.then(r => {
//         console.log(r)
//     })
// }

// add(10)
//     .then(value => {
//         return add(value)
//     })
//     .then(value => {
//         return add(value)
//     })
//     .then(value => add(value))
//     .then(value => add(value))
//     .then(value => add(value))
//     .then(value => add(value))
//     .then(value => {
//         console.log(value)
//     })
