const quoteConainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote')

// let apiQuotes = [];

function newQuote() {

    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    // console.log(quote)
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text

}
newQuote()

// async function getQuotes() {

//     const apiUrl = 'https://type.fit/api/quotes'

//     try {

//         const response = await fetch(apiUrl);
//         apiQuotes = await response.json();
//         // console.table(apiQuotes)
//         newQuote();

//     } catch (error) {


//         console.table(error)


//     }

// }


// getQuotes()

