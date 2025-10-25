document.getElementById('google').addEventListener('click', function() {
    let url = "https://www.google.com";
    window.focus();
})

setInterval(async function () {
    let url = "https://jsonplaceholder.typicode.com/todos/1"
    console.log(await fetchContent(url))
}, 3000)

