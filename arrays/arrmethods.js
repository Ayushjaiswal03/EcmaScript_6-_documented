console.log("methods");

let num = [1, 12, 15, 39, 54];
let b = num.toString();
let c = num.join(" and ");
console.log(c);
//updating the same and not creating the new one
let r = num.pop();
//r for popped element
num.push("Apple", 21)

num.unshift("guava", 69, 91);
let t = num.shift()
console.log(num, r, t);

num



