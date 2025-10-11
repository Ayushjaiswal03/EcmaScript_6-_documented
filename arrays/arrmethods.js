console.log("methods");

let num = [1, 12, 15, 39, 54];
// let b = num.toString();
// let c = num.join(" and ");
// console.log(c);
// //updating the same and not creating the new one
// let r = num.pop();
// //r for popped element
// num.push("Apple", 21)

// num.unshift("guava", 69, 91);
// let t = num.shift()
// let  y=  delete num[4];
// console.log(num, r, t, y);

let arr = [1, 2, 3, 4, 5];
// num[3] = arr;
// arr.push([1, 0, 2, 9, 3, 8, 4])

// let arr2 = num.flat(2)
let left = arr.splice(1, 2)
console.log(arr, left)
let a = num.splice(1, 3, 34);
console.log(num, a);
let arr3 = num.concat(arr);
// let arr4 = num.join(arr)
console.log(arr3);




