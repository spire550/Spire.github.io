var quotes = [
  {
    quoute: "  Be yourself; everyone else is already taken.  ",
    auther: "Oscar Wilde",
  },
  {
    quoute:
      "  I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.  ",
    auther: "Marilyn Monroe",
  },
  {
    quoute:
      "  Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.  ",
    auther: "Albert Einstein",
  },
  {
    quoute: "  So many books, so little time.  ",
    auther: "Frank Zappa",
  },
];
var lastrandom;

var generateQuote = function () {
  
  do {
    var arrayindex = Math.floor(Math.random() * quotes.length);
  } while (arrayindex === lastrandom);
  lastrandom = arrayindex;
  document.getElementById(
    "quotes"
  ).innerHTML = `\"${quotes[arrayindex].quoute}\"`;
  document.getElementById("author").innerHTML = `${quotes[arrayindex].auther}`;
};

x = document.getElementById("generate");
x.onclick = function () {
  generateQuote();
};
