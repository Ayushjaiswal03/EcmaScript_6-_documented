document.getElementById("btn").addEventListener('click', function () {
    const birthDate = document.getElementById("birthday").value;
    const result = document.getElementById("result");

    if(!birthDate) {
        result.innerText = "Please select your date of birth!";
        return;
    }

    const today = new Date();
    const dob = new Date(birthDate);

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();

    if(monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age --;
    }

    result.innerText = age.toString();
})