console.log("array");

// Access element: arr[i]

// Length: arr.length

// Loop: for, for...of, while

// Push/pop: arr.push(x), arr.pop()

// Shift/unshift: arr.shift(), arr.unshift(x) (O(n) cost)

// Slice/splice: arr.slice(...), arr.splice(...)

// Convert to string chars: "abc"[1] === 'b'

// Useful structures: Set, Map, plain object {}

//                                        Problem A — Sum of array elements

// Given an array of numbers, return the sum of all elements.

// pseudocode:


// sum = 0
// for each num in nums
// sum = sum + num
// return sum


// for loop
function sumArray(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++ ) {
        sum += nums[i];
    }
    return sum;
}

// alternative using for...of
function sumArray2(nums) {
    let sum = 0;
    for(let num of nums) sum += num;
    return sum;
}

// using reduce (built in)
function sumArrayReduce(nums){                        // for reduce , we take an array as an args
    return nums.reduce((acc, x) => {                  // we use reduce on nums by nums.reduce. Gives the same array by reducing it
        console.log(acc, x);                          // takes a callback with 2 args, acc -> accumullator which is acc sum so far
                                                      // x => current value , its like a loop to reduce each elements in one val  
        return acc + x                                // returns the acc by adding the current value in itself and then goes over
                                                      // to new element
        
    }, 0)                                             // 0 is the initial value of the acc
}

console.log(sumArrayReduce([1, 2, 3, 4, 5, 6, 7]));