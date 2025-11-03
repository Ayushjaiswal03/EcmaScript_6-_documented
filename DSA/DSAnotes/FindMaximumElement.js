console.log("Find Maximum Element");

//                                                   Problem B — Find maximum element

//     Given an array nums (non-empty), return the maximum value.

//  understand ------- Return the largest number. Assume array has at least one element for now.






//                                                  1. Basic for loop (Iterative Approach)



// Assume the first element is max; iterate and replace if you find a bigger one.



//   PseudoCode
//   max = nums[0]
//   for i from 1 to end:
//   if nums[i] > max: max = nums[i]
//   return max




function findMax(nums) {
    if(nums.length === 0) throw new Error("add data");
    
    let max = 0;
    for(let i = 0; i < nums.length; i++) {
        // console.log(nums[i])
        if(nums[i] > max) max = nums[i];

    }
    return max;
}



function findMax2(nums) {
    if(nums.length === 0) return Error("add data")
    let max = nums[0];
    for(let num of nums) {
        if (max < num) max = num
    }
    return max
}

// console.log(findMax2([1, 22, 15, 2, 4, 89, 91]));


// ✅ Why it’s good:

// Time Complexity: O(n)

// Space Complexity: O(1)

// Works for all arrays

// Foundation of most DSA problems





//                                              2. Using JavaScript’s Math.max() with Spread Operator



const arr = [3, 2, 4, 12, 11, 13, 5];
const max = Math.max(...arr);

console.log(max);




