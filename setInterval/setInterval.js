// document.write("hello")

// let a = setTimeout(function(){
//     alert("I am. in")
// }, 5000)
// let b = prompt("Do you want to run the setTimeout")
// if ("n" == b) {
//     clearTimeout(a)
// }
// console.log(a);

//Set Timeout allows us to run a funtion once after given amount of time
// let timerID = setTimeout(function(), delay, arg1, arg2)

// {
// You're running into a common misunderstanding with setTimeout. Let’s break it down step by step:

// 🧠 What Your Code Does
// js
// const sum = (a, b) => {
//   console.log("Yes, Iam running", a + b);
//   return a + b;
// };

// let b = setTimeout(sum, 2000, 1, 2);
// console.log(b);
// document.getElementById("num").innerHTML = b;
// 🔍 What’s Actually Happening
// setTimeout(sum, 2000, 1, 2) schedules the sum function to run after 2 seconds, passing 1 and 2 as arguments.

// But setTimeout does not return the result of sum — it returns a timeout ID (a number).

// So b is assigned that timeout ID, not the result of sum(1, 2).

// ❌ Problem
// js
// document.getElementById("num").innerHTML = b;
// This sets the inner HTML to the timeout ID (e.g., 1, 2, 3), not the sum 3.

// ✅ How to Fix It
// You need to update the DOM inside the sum function, not immediately:

// js
// const sum = (a, b) => {
//   const result = a + b;
//   console.log("Yes, Iam running", result);
//   document.getElementById("num").innerHTML = result;
// };

// setTimeout(sum, 2000, 1, 2);
// 🧪 Output After 2 Seconds
// Code
// Yes, Iam running 3
// And the element with ID num will show 3.

// Let me know if you want to debounce this, animate the result, or trigger it on user input next.

// const sum = (a, b) => {
//     console.log("Yes, Iam running", a + b);
//     return let result = a + b;
// }

// let b = setTimeout(sum, 2000, 1,2);
// console.log(b)
// document.getElementById("num").innerHTML = b;

// "const sum = (a, b) => { console.log("Yes, Iam running", a + b); return let result = a + b; }" why can't this run?
// This code throws a syntax error because of the incorrect use of let inside a return statement.

// ❌ Problem Line
// js
// return let result = a + b;
// 🔍 Why It Fails
// return expects a value or expression, not a declaration.

// You can't declare a variable (let result = ...) inside a return directly.

// JavaScript sees return let and gets confused — it's not valid syntax.

// ✅ Correct Ways to Fix It
// Option 1: Return the expression directly
// js
// return a + b;
// Option 2: Declare first, then return
// js
// const sum = (a, b) => {
//   console.log("Yes, Iam running", a + b);
//   let result = a + b;
//   return result;
// };
// 🧠 Summary
// return is for sending back values.

// let is for declaring variables.

// You can't mix them like return let.

// Want to explore more arrow function quirks or build a reusable math utility next? I’ve got some cool patterns we can try. 
// }




const sum = (a, b) => {
    console.log("Yes, Iam running", a + b);
    let result = a + b;
    return result
}
document.getElementById("num").innerHTML = sum(1, 2);
let b = setTimeout(sum, 2000, 1,2);
console.log(b)
