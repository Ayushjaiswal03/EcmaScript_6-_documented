console.log("Callback Hell")


//  function loadScript (url, callback) {      //function loadScript(url, callback): Defines a reusable function that loads a JavaScript file dynamically.
//         let script = document.createElement('script');  //document.createElement('script'): Creates a new <script> tag in memory.
//         script.src = url;       //script.src = url: Sets the source of the script to the provided URL.
//         script.onload = function() {
//             console.log("Loaded script with SRC: " + url);
//         }
//         script.onerror = function(){
//             console.log("Error loading script with url ")
//         }
//         document.body.appendChild(script);  //document.body.appendChild(script): Injects the script into the DOM as a child of <body>, making it run.
//         }

//     // loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", () => {
//     //  return hello();
//     // })
//     loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js", hello())

//     function hello (url) {
//         alert("Hello");
//     }

//     // function goodMorning () {
//     //     alert("Hello, good morning");
//     // }

// fucntion goodMorning(error, src) {
//     if (error) {
//         console.log(error)
//         sendEmergencyMessageToCeo();
//         return
//     } 
//     alert('Good Morning' + src);
// }