console.log('moving Zero');

// Given an array of numbers, move all zeros to the end while keeping the order of non-zero elements the same.

// Example
Input:  [0, 1, 0, 3, 12]
Output: [1, 3, 12, 0, 0]

// Step 1: What are we asked to do?

// Key things:

// Don’t change the order of non-zero numbers.

// All zeros go to the end.

// So, if we look at [0, 1, 0, 3, 12],
// we want to "push" non-zeros forward and fill the rest with zeros.



//                                    Approach 1 — Using Extra Space (Simple but Less Efficient)

// 💡 Idea

// We can make a new array:

// First, copy all non-zero elements into a new array.

// Count how many zeros there were.

// Add that many zeros at the end.

// Return the new array.

//PseudoCode

// function moveZeroesExtraSpace(nums)
// result = []
// zeroCount = 0

// for num in nums
//     if(num != 0)
//         append num to result
//     else
//         zeroCount++

// for i in range(zeroCount)
//      append 0 to result
// return result

// function moveZeroesExtraSpace(nums) {
//     let zeroCount = 0;
// }

let a = 710.7
let b = Math.floor(a);
console.log(b)
