const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})

rl.question("Let's play Snake, Water and Gun! you choose = ", (response) => {
    let a = response.trim();
    
    const arr = ["S", "W", "G"];
    const randomIndex = Math.floor(Math.random() * arr.length);

    const compChoice = arr[randomIndex];

    if (a == compChoice) return console.log("the game is tied");
})