//the solution to callback hell is promises
console.log("Hello one");

let promise = new Promise((resolve, reject) => {
    console.log("hi")
    resolve(56)
})
console.log(promise);

// setTimeout(function () {
//     console.log("Hello two after 2 sec")
// }, 2000);

console.log("Hello three")