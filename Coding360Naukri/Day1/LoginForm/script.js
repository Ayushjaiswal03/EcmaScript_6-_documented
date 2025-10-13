document.addEventListener("DOMContentLoaded", function (){
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passInput = document.getElementById("pass");
    const cancelbtn = document.getElementById("cancelbtn");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passInput.value;

        const nameValid = /^[a-zA-Z\s]+$/.test(name);
        const emailValid = /^[a-zA-Z0-9._%+-]+@codingninjas\.com$/.test(email);
        const passvalid = password.length >= 8 && password.includes("@");
        
        if(nameValid && emailValid && passvalid) {
            alert("form submitted successfully.")
        }else{
            alert("fill the form correctly ")
        }
    });

    cancelbtn.addEventListener("click", function () {
        nameInput.value = "";
        emailInput.value = "";
        passInput.value = "";
    })
})