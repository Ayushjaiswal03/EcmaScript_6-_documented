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

let p = new Promise((resolve, reject) => {
    console.log('promise is pending')
    setTimeout(() => {
        console.log('I am a promise and I am fullfilled');
        // resolve(true)
        reject(new Error('I am an error'))
    }, 5000)
})

console.log(p);