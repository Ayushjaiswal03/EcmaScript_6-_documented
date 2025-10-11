console.log("Practice Set 5")

let num = Math.ceil(Math.random() * 10);
// console.log(num);

const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

rl.question("Please choose you number from 1 - 10 ", (answer) => {
    console.log(answer);
    const r = Number.parseInt(answer);
    console.log(r);
    console.log(num);
    if (r == num){
        console.log("You have guessed the number")
    }else {
        let f = num - r;
        if (-f) {
            console.log(`add more ${f} to you number to achieve the goal`)
        }else{
            console.log(`you are ${f} far away fromt the number`);
        }
    }
    //compare r and num, if !=, then  
})