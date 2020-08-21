const list = [1, 2, 3, 4, 5, 6]
const objectList = [{ id: 1, value: 10 }, { id: 2, value: 20 }, { id: 3, value: 30 }]

// break
// continue
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

// const result = every(objectList, (item) => item.id > 4)
// console.log(result)

// Array.prototype.all = function () {
//     console.log('ALL')
// }

// function find(arr, cb) {
//     let found = undefined
//     for (let i = 0; i <= arr.length; i++) {
//         if (cb(arr[i])) {
//             found = arr[i]
//         }
//     }
//     return found
// }
// // list.all()

// function cb(item) {
//     if (item && item.value === 10) {
//         return item
//     }
//     return false
// }

// const cb2 = item => item === 1


// const result2 = find(objectList, cb)
// // console.log(result2)

// const r = objectList.find(function (item) {
//     if (item.value === 10) {
//         return item
//     }
//     return false
// })

// console.log(r)