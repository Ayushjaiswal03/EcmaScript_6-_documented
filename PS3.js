console.log("Practice set 3");

let obj = {
    Ayush : 98,
    Samriddh : 9,
    Susu : 56,
    Ripu : 64
}

// for (let i = 0; i < Object.keys(obj).length; i++){
//     console.log(Object.keys(obj)[i] + " has gottten the marks of " + obj[Object.keys(obj)[i]]);
// }

for (let marks in obj){
    console.log(marks + " has scored " + obj[marks]);
}