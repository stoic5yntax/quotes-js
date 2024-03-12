const quoteEl = document.getElementById("quote-el");
const authorEl = document.getElementById("author");

const generateBtn = document.getElementById("generate");

const quotes = [
  {
    quote:
      "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Life is a journey, not a destination.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
    author: "Helen Keller",
  },
  {
    quote: "It is never too late to be what you might have been.",
    author: "George Eliot",
  },
  {
    quote:
      "You don't have to be great to start, but you have to start to be great.",
    author: "Zig Ziglar",
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
  },
  {
    quote:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
    author: "Mark Twain",
  },
  {
    quote: "The mind is everything. What you think you become.",
    author: "Buddha",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote:
      "It is during our darkest moments that we must focus to see the light.",
    author: "Aristotle",
  },

  {
    quote:
      "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    author: "Gautama Buddha",
  },
  {
    quote: "The best way to predict your future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "You only live once, but if you do it right, once is enough.",
    author: "Mae West",
  },
  {
    quote:
      "It's not what happens to you, but how you react to it that matters.",
    author: "Epictetus",
  },
  {
    quote:
      "The two most important days in your life are the day you are born and the day you find out why.",
    author: "Mark Twain",
  },
  {
    quote:
      "Happiness is not something you postpone for the future, it is something you create for the present.",
    author: "Jim Rohn",
  },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { quote: "Wherever you go, go with all your heart.", author: "Confucius" },
  {
    quote: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu",
  },
  {
    quote: "Doubt kills more dreams than failure ever will.",
    author: "Suzy Kassem",
  },

  { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
  {
    quote: "Life is short and it is here to be lived.",
    author: "Katharine Hepburn",
  },
  {
    quote: "Your body is your temple. Keep it clean and strong.",
    author: "Mehmet Murat ildan",
  },
  { quote: "Fall seven times and stand up eight.", author: "Japanese Proverb" },
  { quote: "It is never too late to start anew.", author: "Jane Austen" },
  {
    quote: "Life is a gift, and I don't want to waste it.",
    author: "Leo Tolstoy",
  },
  {
    quote:
      "The mind is its own place, and in itself can make a heaven of hell, a hell of heaven.",
    author: "John Milton",
  },
  {
    quote: "Life is what happens while you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote: "Life is 10% what happens to you and 90% how you react to it.",
    author: "Charles R. Swindoll",
  },
  {
    quote:
      "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
];

quoteEl.innerText = "Your random quote will be display here!";
authorEl.innerText = "";

// EVENT LISTENERS AND FUNCTIONS
generateBtn.addEventListener("click", () => {
  quoteEl.classList.remove("opacity-low");

  let randomIndex = Math.floor(Math.random() * quotes.length);

  let currentQuote = quotes[randomIndex];
  console.log("clicked", currentQuote);

  quoteEl.innerText = `"${currentQuote.quote}"`;
  authorEl.innerText = `- ${currentQuote.author}`;
});
