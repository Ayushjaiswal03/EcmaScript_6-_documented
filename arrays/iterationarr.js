console.log("Looping through arrays")

let num = [3, 5, 1, 2, 4]

// for (let i = 0; i < num.length; i++) {
//     console.log(num[i])
// }
// For each loop
num.forEach((elements) => {
    console.log(elements * elements)
})

//array.from()
let name = "Ayush";
let obj = {
    firstName : "Ayush",
    lastName : "Jaiswal",
    age : 42,
    fullName : function myFunction() {
        return this.firstName +" "+ this.lastName
    }
}
console.log(obj.fullName())
let arr = Array.from(Object.keys(obj));
console.log(arr)