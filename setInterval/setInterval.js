// Set interval unlike setTimeout runs after every time interval. not once but it keeps running


// ❌ Problem



setInterval( sum = (a, b) => {
    let result = a + b
    return result;
}, 5000)


//You're assigning the arrow function to sum, but not calling it with arguments.

//setInterval expects a function that takes no arguments, or you must pass arguments separately.

// ✅ Correct Ways to Use It
// Option 1: Define the function separately and pass arguments via setInterval
// js

let sum = (a, b) => {
    result = a * b;
    console.log(result)
    return result;
}

setInterval(() => sum(1,2), 5000);

// 🧠 Why We Use () => sum(1, 2)
// 🔹 setInterval expects a function reference, not a function call.
// If you write:

// js
// setInterval(sum(1, 2), 5000); // ❌
// This immediately calls sum(1, 2) and passes its result (a number) to setInterval, 
// which breaks the logic — you're not passing a function anymore.

// ✅ Wrapping It in an Arrow Function
// js
// setInterval(() => sum(1, 2), 5000);
// This creates a new function that calls sum(1, 2) every 5 seconds. 
// You're passing a callable function to setInterval, which is exactly what it wants.

// 🔍 Analogy
// Think of setInterval like a timer that says:

// "Give me a recipe, not the finished dish."

// If you give it sum(1, 2), you're handing over the dish immediately. 
// If you give it () => sum(1, 2), you're giving it the recipe to cook every 5 seconds.