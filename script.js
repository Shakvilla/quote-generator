let apiQuotes = [];

const newQuote = () => {

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
}

async function getQuotes() {

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