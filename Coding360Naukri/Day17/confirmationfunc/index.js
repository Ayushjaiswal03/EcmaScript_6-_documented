   // do not alter these constants
        const OKTEXT = "You clicked OK!"
        const OKCOLOR = "green"

        const CANCELTEXT = "You clicked Cancel!"
        const CANCELCOLOR = "red"

        // do not alter the above constants


         function handleConfirm(){
            // write your code here.
          const result = confirm("Do you want to proceed?");
          const resultElement = document.getElementById('result');
    if (result) {
        resultElement.textContent = OKTEXT;
        resultElement.style.color = OKCOLOR;
    } else {
        resultElement.textContent = CANCELTEXT;
        resultElement.style.color = CANCELCOLOR;
    }  
         }



