const fetch = require('node-fetch')

// fetch('https://random.dog/woof.json')
//     .then(response => {
//         return response.json()
//     })
//     .then(data => {
//         console.log(data.url)
//     })
//     .catch(err => {
//         console.log(err)
//     })


const peticion = async () => {
    try {
        const response = await fetch('https://random.dog/woof.json')
        const data = await response.json()
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}


(async () => {
    const result = await peticion()
    console.log(result)
})()

peticion.then(result => {
    console.log(result)
})