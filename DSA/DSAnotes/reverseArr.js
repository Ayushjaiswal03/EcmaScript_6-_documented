console.log("Reverse an Array")



//                                                   Reverse an array in-place

// Given array nums, reverse it in-place (modify the array) and return it.

//       1) Understand
//       No extra array (prefer in-place). Example: [1,2,3] → [3,2,1].


//       2) Intuition
//       Swap first with last, second with second-last, stop when pointers cross.


//      PseudoCode

// left = 0
// right = 0
// while left < right 
// swap(nums[left], nums[right])
// left ++, right--
// return nums


// 1 => 

function reverseInPlace(nums) {
    let left = 0;
    let right = nums.length - 1;

    while(left < right ){
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;

        left++ ;
        right-- ;
    }

    return nums;
}    


// 🔍 Destructuring Swap

// Instead of using a temporary variable (tmp), we can use ES6 array destructuring:

// [a, b] = [b, a];


// So this:

// const tmp = nums[left];
// nums[left] = nums[right];
// nums[right] = tmp;


// is exactly the same as

// [nums[left], nums[right]] = [nums[right], nums[left]];




function reverseInPlace2(nums){
    let right = nums.length - 1 , left = 0;
    while(left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]]
        left++;
        right--
    }
    return nums;
}



console.log(reverseInPlace2([1, 2, 3, 4, 5, 6, 7, 8, 9]))
    