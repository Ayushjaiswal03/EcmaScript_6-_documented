console.log("arrays");


//How to create an array

// 1 - ---------// const array_name = [item1, item2, item3];

const cars = ["Saab", "Volvo", "BMW"];  //common practice to declare arrays with const keyword

// creating empty array and providing elements or item or values later

// const bikes = [];
// console.log(bikes);

// bikes[0] = "triumph";

// bikes[1] = "BMW";

// bikes[3] = "KTM";
// console.log(bikes);


// 2 -------------

let arr1 = new Array("Saab", "Volvo", "BMW");

// console.log(arr1);



//Accessing array Elements

const cars1 = ["Saab", "Volvo", "BMW"];

let car = cars1[0];
// console.log(car);

// you change the value as well in a particular index

//Arrays are special type of objects

// -------------------------------Array Properties and methods----------------------------------------------------


const cars2 = ["Saab", "Volvo", "BMW"];

//THE LENGTH PROPERTY
let length = cars2.length;
// console.log(length);


//ACCESSING THE FIRST ELEMENT OF THE ARRAY
let first = cars2[0];
// console.log(first);


//ACCESSING THE LAST ELEMENT
let last = cars2[cars2.length - 1]
// console.log(last);


