console.log("CE");

// let a = Number.parseInt(prompt("Hey, what's your age?"));

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Hey, what's your age? ", (answer) => {
    console.log(typeof answer)
  let age = Number.parseInt(answer);
  console.log(`You entered: ${age}`);
  rl.close();
});

