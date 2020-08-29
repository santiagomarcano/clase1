const add = (value, callback) => {
    setTimeout(() => {
        if (value >= 100) {
            callback('No puede ser mayor a 100', null)
        }
        callback(null, value + 10)
    }, 1000)
}

add(100, (err, result) => {
    if (err) {
        console.log(err)
    }
    console.log(result)
})

console.time('elapsed')

add(100, (value) => {
    console.log(value)
    console.timeLog('elapsed')
    // console.timeEnd('elapsed')
})

console.timeLog('elapsed')
console.log('Seguir??')

// Callback hell
// http://callbackhell.com/
add(10, (result) => {
    add(result, (result1) => {
        add(result1, (result2) => {
            add(result2, (result3) => {
                add(result3, (result4) => {
                    add(result4, (result5) => {
                        add(result5, (result6) => {
                            console.log(result6)
                        })
                    })
                })
            })
        })
    })
})