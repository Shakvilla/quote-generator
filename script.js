const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const facebookBtn = document.getElementById('facebook');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader')

// let apiQuotes = [];

//show loader
function loading() {

    loader.hidden = false;
    quoteContainer.hidden = true
}

//hide loader
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true
}

// function to randomly generate new quote
function newQuote() {
    loading();

    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];

    (!quote.author) ? authorText.textContent = "Unknown" : authorText.textContent = quote.author;


    (quote.text.length > 50) ? quoteText.classList.add('long-quote') : quoteText.classList.remove('long-quote');
    quoteText.textContent = quote.text;

    complete()

}

// share quote on twitter
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}

function facebookQuote() {
    // const facebookUrl = `https://www.facebook.com/dialog/share?
    // text=${quoteText.textContent} - ${authorText.textContent}`;
    facebookUrl = `https://facebook.com/sharer.php?display=popup&s=${quoteText.textContent} - ${authorText.textContent} ;`
    options = 'toolbar=0,status=0,resizable=1,width=626,height=436';
    window.open(facebookUrl, 'sharer', options);
}


//Add Event Listeners
newQuoteBtn.addEventListener('click', newQuote);
facebookBtn.addEventListener('click', facebookQuote);

twitterBtn.addEventListener('click', tweetQuote);


newQuote()


async function getQuotes() {
    loading();
    const apiUrl = 'https://type.fit/api/quotes'

    try {

        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        // console.table(apiQuotes)
        newQuote();

    } catch (error) {


        console.table(error)


    }

}


getQuotes()
