console.log("This is the Practice Set")

//Q1 && Q2
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
const askAge = () =>{
rl.question("tell me your age here ", (answer) => {
    let num = Number.parseInt(answer);

    if(isNaN(num)){
        console.error("Write a valid number")
        return askAge();
    }

    if(num < 0){
        console.error(`${num} cannot be negative`)
        return askAge();
    }
    
    if (num >= 18){
        console.log("You can drive mf, drink n drive")
    }else if (num == 18){
        console.log("you can take you vehicle in your farewell")
    }else{
        console.log("chutiye license laa")
    }

    rl.question("Do you want to play again? (Yes/No) ", (response)=>{
        if(response.toLowerCase() == "yes" || response.toLowerCase() == "y"){
            askAge();
        }else{
            console.log("TAKE CARE , BYE BYE");
            rl.close();
        }
    })
})
}
askAge();

//Q3
const readline = require("readline")