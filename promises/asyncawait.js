const add = async (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(value + 10)
        }, 1000)
    })
}

const addTwo = async () => {
    try {
        const r1 = await add(10)
        if (r1 === 20) {
            throw 'No puede ser 20'
        }
        return r1
    } catch (err) {
        throw err
    }
}


const promise = addTwo()

promise
    .then(result => {
        console.log(result)
    })
    .catch(err => {
        console.log('El error', err)
    })

const forAwait = async () => {
    for await (let item of [1, 2, 4]) {
        const r = await fetch(`api/${item}`)
    }
}

[1, 2, 3].forEach(async (item) => {
    const r = await fetch(`api/${item}`)
})

// api/1
// api/2
// api/3




// const addAll = async () => {
//     const r1 = await add(10)
//     const r2 = await add(r1)
//     const r3 = await add(r2)
//     const r4 = await add(r3)
//     const r5 = await add(r4)
//     const r6 = await add(r5)
//     const r7 = await add(r6)
//     console.log(r7)
// }

// addAll()