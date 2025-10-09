console.log("CE");

// let a = Number.parseInt(prompt("Hey, what's your age?"));

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("Hey, what's your age? ", (answer) => {
//     console.log(typeof answer)
//   let age = Number.parseInt(answer);
//   console.log(`You entered: ${age}`);
//   rl.close();
// });


//if else....else if
let agge = 18.6554;
let age = Math.ceil(agge);

if (age < 18) {
    console.log("minor");
     age;
} else if(age > 18) {
    console.log("too old");
     console.log (age);
}else {
    console.log("perfect 18")
}

//switch
switch(age && agge) {
    case 1:
        console.log("minor");
    break;
    case 2: 
    console.log("major");
    break;
    default: 
    console.log("perfect 18")
}


//  console,log()