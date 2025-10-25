//when an event happens , browser creates an event object , puts details into it and passes it as
//an argument to the handler

let handleClick = function (e) {
    alert("the button is clicked");
    console.log(e);
    console.log(e.target);
}

btn.addEventListener('click', handleClick);