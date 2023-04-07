console.log("Welcome to Dzido's website!");

const quoteElement = document.getElementById("quote");

function getRandomQuote() {
    fetch('quotes.json')
        .then(response => response.json())
        .then(quotes => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            quoteElement.innerText = quotes[randomIndex];
        });
}

getRandomQuote();