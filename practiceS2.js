console.log("Practice Set 2")

// USe Logical operators to find wether the age of the person lies between 10 and 20

let age = Math.floor(Math.random() * 101 );

if (100 > age && age > 90 ) {
    console.log("age is in the range of 100-90")
}else if(89 > age && age >80) {
    console.log("age is in the range of 89-80")   
}else if(79 >  age && age >70) {
    console.log("age is in the range of 79 - 70")   
}else if(69 >  age && age > 60) {
    console.log("age is in the range of 69 - 60")   
}else if(59 >  age && age >50) {
    console.log("age is in the range of 59 - 50")   
}else if(49 >  age && age >40) {
    console.log("age is in the range of 49 - 40")   
}else if(39 >  age && age >30) {
    console.log("age is in the range of 39 - 30")   
}else if(29 >  age && age >20) {
    console.log("age is in the range of 29-20")   
}
else if(19 >  age && age >10) {
    console.log("age is in the range of 19-10")   
}else {
    console.log("age is in the range of 9-0")   
}


//switch case statement 
let Nums = Math.floor(Math.random() * 10);
let fruits= ["mango", "apple", "gava", "avacado"]
let fruit = fruits[Math.floor(Math.random() * 2) + 1];

switch (fruit) {
    case "mango" :
        console.log("Hi I am 1")
        break;    
    case "apple" :
        console.log("Hi I am 2")
        break;
    case "guava" :
        console.log("Hi I am 3")
        break;         
}