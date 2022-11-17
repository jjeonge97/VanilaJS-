const quotes = [
  {
    quote:
      "Shallow men believe in luck, Strong men believe in cause and effect.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "Nothing is less productive than to make more efficient what should not be done at all.",
    author: "Peter Drucker",
  },
  {
    quote: "What’s gone and what”s past help, should be past grief.",
    author: "William Shakespeare",
  },
  { quote: "Well begun is half done.", author: "Aristoteles" },
  {
    quote:
      "Big jobs usually go to the men who prove their ability to outgrow small ones.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "It always seems impossible until its done.",
    author: "Nelson Mandela",
  },
  {
    quote: "From a little spark may burst a flame.",
    author: "Dante Alighieri",
  },
  {
    quote:
      "One must live the way one thinks or end up thinking the way one has lived.",
    author: "Paul Bourget",
  },
  {
    quote: "The gratification comes in the doing, not in the results.",
    author: "James Dean",
  },
  {
    quote: "What is not started today is never finished tomorrow.",
    author: "Johann Wolfgang won Goethe",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
// Math.floor(Math.random() * 10)

// function random(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     quote.textContent = quote[parseInt(Math.random() * i)][0];
//     author.textContent = quote[parseInt(Math.random() * i)][1];
//   }
// }

quote.textContent = todaysQuote.quote;
author.textContent = todaysQuote.author;
