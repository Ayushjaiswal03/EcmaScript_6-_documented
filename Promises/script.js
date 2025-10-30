//the solution to callback hell is promises
// console.log("Hello one");

// let promise = new Promise((resolve, reject) => {
//     console.log("hi")
//     resolve(56)
// })
// console.log(promise);

// setTimeout(function () {
//     console.log("Hello two after 2 sec")
// }, 2000);

console.log("Hello three");

let p1 = new Promise((resolve, reject) => {
    console.log('promise is pending')
    setTimeout(() => {
        console.log('I am a promise and I am fullfilled');
        resolve(true)
        // reject(new Error('I am an error'))
    }, 5000)
})

console.log(p1);

let p2 = new Promise((resolve, reject) => {
    console.log('promise is pending')
    setTimeout(() => {
        console.log('I am a promise and I am fullfilled');
        // resolve(true)
        reject(new Error('I am an error'))
    }, 5000)
})

console.log(p2);

p1.then((value) => {
    console.log(value)
})

p2.catch((error) => {
    console.log(`some error occured in p2 which was ${error}`)
})