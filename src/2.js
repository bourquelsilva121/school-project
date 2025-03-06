  const fetch = require('node-fetch');
  
  async function getQuote() {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      
      return `The quote is: "${data.content}" - ${data.author}`;
    } catch (error) {
      console.error(error);
    }
  }
  
  getQuote().then((quote) => {
    console.log(quote);
  });