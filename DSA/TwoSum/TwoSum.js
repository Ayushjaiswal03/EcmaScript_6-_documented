var twoSum = function(nums, target) {
    const map = new Map();  //A Map object holds key-value pairs where the keys can be any datatype.

                            //A Map also remembers the original insertion order of the keys.


     // 2. Loop through the array only once (O(n)).                            
    for(let i = 0; i < nums.length ; i++) {
        const compliment = target - nums[i];    // Calculate the value needed to reach the target.
        // console.log(compliment);


        if(map.has(compliment)) {              //The has() method returns true if a key exists in a map:
            return [map.get(compliment), i]    //You get the value of a key in a map with the get() method
        }

        map.set(nums[i], i)

    }                           



}


nums = [2,7,11,15]
target = 9
// console.log(twoSum(nums, target));





//--------------------------------------------------------2nd way -------------------------------------------------------------

var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {                //Outer loop → picks the first number.
    for (let j = i + 1; j < nums.length; j++) {          //Inner loop → checks all numbers after it.
      if (nums[i] + nums[j] === target) {
        return [i, j];                                  //As soon as a match is found, return the pair.
      }
    }
  }
};





//--------------------------------------------------------3rd Way -------------------------------------------------------------

var twoSum = function(nums, target) {
    const arr = nums.map((val, idx) => [val, idx])             //The map() method creates a new array by performing a function on each array element.

}