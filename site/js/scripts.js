console.log("Welcome to Dzido's website!");

document.addEventListener('DOMContentLoaded', function() {
    fetch('quotes.json')
        .then(response => response.json())
        .then(quotes => {
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            document.querySelector('.quote').innerText = randomQuote.quote;
            document.querySelector('.author').innerText = '- ' + randomQuote.author;
        });
});