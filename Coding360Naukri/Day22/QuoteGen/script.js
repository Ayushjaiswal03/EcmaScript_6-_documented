//Write your javascript code here

const quotes = [
    "The best way to get started is to quit talking and begin doing.",
    "Success doesn't come from what you do occasionally, but what you do consistently.",
    "Do something today that your future self will thank you for.",
    "The harder you work for something, the greater you?ll feel when you achieve it.",
    "Believe you can and you're halfway there."
];

const quoteText = document.getElementById("quote");

const quoteButton = document.getElementById("quoteButton");

function generateQuote() {
    let randomIndex = Math.floor(Math.random() * quotes.length);

    quoteText.textContent = quotes[randomIndex];
}

quoteButton.addEventListener("click", generateQuote);
window.onload = generateQuote;