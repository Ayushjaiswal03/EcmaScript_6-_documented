console.log("array")

let marks = [98, 81, 76, 64, 56, false, "not present"];
console.log(marks);

// console.log(marks[4]);
// console.log(marks.length);
// console.log(marks[8] = 89)
// console.log(marks.length)
// marks[0] = 100;
// console.log(typeof marks);

for(let mark of marks) {
    let text = "the status is " + mark;
    console.log(text)
}
