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

// for (let marks in obj){
//     console.log(marks + " has scored " + obj[marks]);
// }

//
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
});

rl.question("write the number which is divisible by 10 ", (answer) => {
    console.log(typeof answer);
    let n = Number.parseInt(answer);
    
    if(n % 10 == 0){
        console.log("number is. divisble by 10")
    }else {
        console.log("try again");
    }

    rl.close();

})