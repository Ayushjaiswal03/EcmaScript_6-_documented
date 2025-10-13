console.log("This is the Practice Set")

//Q1 && Q2
// const readline = require("readline");
// const rl = readline.createInterface({
//     input : process.stdin,
//     output : process.stdout
// })
// const askAge = () =>{
// rl.question("tell me your age here ", (answer) => {
//     let num = Number.parseInt(answer);

//     if(isNaN(num)){
//         console.error("Write a valid number")
//         return askAge();
//     }

//     if(num < 0){
//         console.error(`${num} cannot be negative`)
//         return askAge();
//     }
    
//     if (num >= 18){
//         console.log("You can drive mf, drink n drive")
//     }else if (num == 18){
//         console.log("you can take you vehicle in your farewell")
//     }else{
//         console.log("chutiye license laa")
//     }

//     rl.question("Do you want to play again? (Yes/No) ", (response)=>{
//         if(response.toLowerCase() == "yes" || response.toLowerCase() == "y"){
//             askAge();
//         }else{
//             console.log("TAKE CARE , BYE BYE");
//             rl.close();
//         }
//     })
// })
// }
// askAge();

//Q3
const readline2 = require("readline");
const rrl = readline2.createInterface({
    input : process.stdin,
    output: process.stdout
})

rrl.question("add number from 1 - 10 ", (response) =>{
    let res = Number.parseInt(response)
    if (res > 4) {
        window.location.href = "https://www.youtube.com/watch?v=HzWhsTl10mw&list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&index=29"
    }else{
        console.log("write number greater than 4 to learn something new")
    }
})