const game = () => {
    const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output: process.stdout
})

const play = () => {
    rl.question("Let's play Snake, Water and Gun! you choose = ", (response) => {
        let a = response.trim();
        
        const arr = ["S", "W", "G"];
        const randomIndex = Math.floor(Math.random() * arr.length);

        const compChoice = arr[randomIndex];

        if (a == compChoice) {
            return console.log("the game is tied");
        }

        if((a == "S" && compChoice == "W") ||
            (a == "W" && compChoice == "G") ||
            (a == "G" && compChoice == "S")
        ){
            return console.log("You won, handsome!")
        }else {
            return console.log("MAC won, bro!")
        }
        // else if(a == "S" && compChoice == "G"){
        //     console.log("Mac won");
        // } else if(a == "S" && compChoice == "W"){
        //     console.log("you won")
        // }else if(a == "W" && compChoice == "S"){
        //     console.log("")
        // }
    })
}

rl.question("Hey handsome, wanna play again? (Y/N) ", (answer) => {
    const y = answer.toLowerCase();
    if(y == 'y' || y == 'yes'){
        return play();
    }else{
        return console.log("Tata bye bye, take care")
        rl.close();
    }
            
})


}

game();
