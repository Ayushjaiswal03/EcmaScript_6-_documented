// Given an integer array nums, return true if any value appears at least twice in the array, and return false 
// if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true



//                                   Brute force: compare every pair → O(n²). Simple but slow.

// for i in 0 - arr.length - 1
// for j in i+1 - arr.length - 1
// if arr[i] == arr[j] return true

function containsDuplicate(nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]) return true;
        }
    }
    return false
}

// WARNING   compare every pair → O(n²). Simple but slow.
// Time Limit Exceed



//                    Sort & check neighbors: sort array → O(n log n), then one pass to check adjacent elements.

// sort(nums)
// for i in 0..nums.length-1
// if nums[i] === nums[i +1]
// return true

// let arr = [21, 1, 20, 18, 2, 3, 4, 5, 6]
//  arr1 = arr.slice().sort((a, b) => a - b);
// console.log(arr1)

function containsDuplicateSort(nums) {
    nums = nums.slice().sort((a, b) => a - b)
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === nums[i + 1]) return true
    }
    return false
}


// Sorting is another option — after sorting duplicates become adjacent, but sort costs O(n log n).





//         HashSet: single pass, record seen values, if value already seen → duplicate found → O(n) time, O(n) space.

// Why Set usually? Because it gives a simple O(n) time & O(n) space solution that’s optimal for this problem.



//        PseudoCode
// create empty set seen
// for each x in nums
// if seen has x: return true
// add x to seen
// return false


function containsDuplicateSet(nums) {
    let seen =  new Set();
    for( let x of nums){
        if (seen.has(x)) return true
        seen.add(x);
    }
    return false
}


console.log(containsDuplicateSet([2, 3, 4, 1, 5, 1]))
