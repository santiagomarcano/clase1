// Escribir método .map con un for loop

const list = [1, 2, 3, 4, 5]
const objectList = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
]

function map(arr, cb) {
    const mapped = []
    for (let i = 0; i < arr.length; i++) {
        mapped[i] = cb(i)
    }
    return mapped
}

// Escribir método .find con un for loop

function find(arr, cb) {
    let found = undefined
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            found = arr[i]
        }
    }
    return found
}

// Escribir método .filter con un for loop

function filter(arr, cb) {
    const filtered = []
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            filtered.push(arr[i])
        }
    }
    return filtered
}

// Escribir método .every con un for loop
function every(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            continue
        }
        return false
    }
    return true
}
