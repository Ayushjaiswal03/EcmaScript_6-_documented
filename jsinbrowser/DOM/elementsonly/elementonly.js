const changeColor = () => {
    document.body.firstElementChild.style.background = "red";
}

let b = document.body;

console.log("First child of b is : ", b.firstChild)
console.log("first element of b is : ", b.firstElementChild)

//so when we use firstChild , we get text is there is a space between body and the next tag like 
//<body>    < -----  this space
// -- > <nav>

// but in firstElementChild, we get the next element , no matter how many spaces we have

console.log(b.previousElementSibling);
//previous. sibling which is an element

console.log(b.nextElementSibling)
console.log(b.lastElementChild)
console.log()