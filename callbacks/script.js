console.log("callbacks")


//js is synchronous which means it executes line by line going downward
let a = "Ayush";
let b = 24;
let c = 'red';

console.log(a + " is "+ b + " years old and has "+ c +" as his fav color");

// asynchronous programming in js
// waits for the certain task and executes the next line while waiting for 
// for it to resolve the promise of completeing the task
//async awai, async func, promises(.then)
console.log("Start")

setTimeout(function() {
    console.log("here is my function which will run after 3 sec ")
}, 3000);

console.log("End");