console.log("callbacks")


//js is synchronous which means it executes line by line going downward
// let a = "Ayush";
// let b = 24;
// let c = 'red';

// console.log(a + " is "+ b + " years old and has "+ c +" as his fav color");

// // asynchronous programming in js
// // waits for the certain task and executes the next line while waiting for 
// // for it to resolve the promise of completeing the task
// //async awai, async func, promises(.then)
// console.log("Start")

// setTimeout(function() {
//     console.log("here is my function which will run after 3 sec ")
// }, 3000);

// console.log("End");

// ----------------CALLBACK FUNCTION-----------------------
// a callback function is a funct passed as an argument to an another function to 
// to complete the task through that function which depends upon the other
// func as arguments or paramaeters



// function loadScript (url, callback) {      //function loadScript(url, callback): Defines a reusable function that loads a JavaScript file dynamically.
//     let script = document.createElement('script');  //document.createElement('script'): Creates a new <script> tag in memory.
//     script.src = url;       //script.src = url: Sets the source of the script to the provided URL.
//     document.body.appendChild(script);  //document.body.appendChild(script): Injects the script into the DOM as a child of <body>, making it run.
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", () => {
//     console.log("Url loaded");
// })



// ✅ Key Concepts We Covered
// Why we need another <script> tag: To load scripts dynamically after the page has loaded — useful for lazy loading, modular architecture, or third-party tools.

// Difference between static and dynamic scripts:

// Static: <script src="main.js"> in HTML — loads during page render.

// Dynamic: createElement('script') — loads on demand via JavaScript.

// DOM behavior: The new script tag is invisible in your HTML file but visible in DevTools under <body>.

// Common mistake: Using script.src = src instead of script.src = url — src must be a defined variable or parameter.

// Callback usage: You can run a function after the script loads using script.onload = callback.
