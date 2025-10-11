console.log("advance methods");

let arr = [1, 2, 3, 4, 5, 6, 7];
// delete arr[6];
// console.log(arr);

// let arr2 = [0, 9, 8, 7, 6]

// let arr3 = arr.concat(arr2)
console.log(arr.lastIndexOf(4, 6)); //IndexOf(), aage se search krta hai, lastIndexOf() peeche se
console.log(arr.find(num => num > 3));  //includes() checks and gives true or false depending on the presence of element, find finds the element on basis of condition

// console.log(arr.sort((a, b) => a - b))
// console.log(arr.reverse())
// console.log(arr.reverse())

// const sorting = () => {
//     let arr2 = [23, 45, 17, 8, 10];
//     let arr3 = [];

// for(let arr1 of arr2) {
    
//     console.log(arr1);

//     arr
    
// }
// }

// sorting()

let num = [551, 22, 3, 14, 5, 6, 7, 8, 229];

// const compare = (a, b) => {
//     return a - b;
// }

// num.sort(compare) // sorts alphabetically, one , two, three, checks first num from left

// num.reverse();

//splice and slice

let arr1 = num.slice(2, 5)
console.log(num)
console.log(arr1)

let d = num.splice(2, 4, 5, 44, 33, 22, 88)
console.log(num, d)

