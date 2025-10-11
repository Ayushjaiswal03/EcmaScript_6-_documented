console.log("Here we will study about mapping")

let arr = [6, 9, 8];
let a = arr.map((value, i, arr) => {
    // console.log(value, i, arr)
    return value + i
})                                  // new array and forEach performs in arr
// console.log(a)

//filter method
let arr2 = [0, 3, 5, 9, 10, 23, 26]
let a1 = arr2.filter((value) => {
    return value < 10;
})

// console.log(a1) // gives new array

//reduce
let arr3 = [1, 2, 4, 5, 6];
let arr4 = arr3.reduce((a, b) => {
    return a * b;
})
console.log(arr4)