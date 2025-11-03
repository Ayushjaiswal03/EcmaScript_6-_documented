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


