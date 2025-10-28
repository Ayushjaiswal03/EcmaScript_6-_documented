//the solution to callback hell is promises
console.log("Hello one");

setTimeout(function () {
    console.log("Hello two after 2 sec")
}, 2000);

console.log("Hello three")