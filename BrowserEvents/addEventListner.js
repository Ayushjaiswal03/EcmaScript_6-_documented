let btn = document.getElementById('btn');

// btn.addEventListener('click', function(e) {
//     // var btn = e.target
//     alert("Hello world!")
// } )

// btn.addEventListener('click', function(e) {
//     // var btn = e.target
//     alert("Hello world22!")
// } )


let x = function(e) {
    console.log(e.target)
    // var btn = e.target
    // alert("Hello world!")
};

let y = function(e) {
    // var btn = e.target
    alert("Hello world22!")
}

btn.addEventListener('click', x);

btn.addEventListener('click', y);

let a = prompt("What is your favourite color");

if (a == "2") {
    btn.removeEventListener('click', x)
}


// add event listener is responisble to add event or handlers when an event takes placa and remove event listner removes it