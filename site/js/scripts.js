console.log("Welcome to Dzido's website!");

function getRandomQuote(quotes) {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function displayQuote(quote) {
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");

  quoteTextElement.textContent = quote.text;
  quoteAuthorElement.textContent = `– ${quote.author}`;
}

fetch("quotes.json")
  .then((response) => response.json())
  .then((quotes) => {
    const randomQuote = getRandomQuote(quotes);
    displayQuote(randomQuote);
  });