console.log("This is the Practice Set")

//Q1
const readline = require("readline");
const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
rl.question("tell me your age here ", (answer) => {
    // console.log(answer);
    let num = Number.parseInt(answer);

    if (num >= 18){
        console.log("You can drive mf, drink n drive")
    }else if (num == 18){
        console.log("you can take you vehicle in your farewell")
    }else{
        console.log("chutiye license laa")
    }
})