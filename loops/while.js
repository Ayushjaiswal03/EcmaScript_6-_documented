console.log("do-while")

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter the value of n ", (answer) => {
    console.log(typeof answer)
    let n = Number.parseInt(answer);
    console.log(`the value of n : ${n}`);

    let i = 10;
    // while(i < n){
    //     console.log(i)
    //     i++
    // }
    do{
        console.log(i)
        i++;
    }while(i < n)
    rl.close();
})

