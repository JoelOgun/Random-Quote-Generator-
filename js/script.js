/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat
console.log("test");
/***
 * `quotes` array
 ***/
let quotes = [
  {
    quote:
      "You may fail, but fall still fighting; Don’t give up, whate’er you do; Eyes front, head high to the finish See it through!",
    source: "Edgar Albert Guest",
    citation: "See It Through",
    year: 1920,
  },
  {
    quote:
      "Success	is	failure	turned	inside	outThe	silver	tint	of	the	clouds	of	doubt, And	you	never	can	tell	how	close	you	are, It	may	be	near	when	it	seems	so	far, So	stick	to	the	fight	when	you’re	hardest	hit It’s	when	things	seem	worst	that	you	must	not	quit.",
    source: "Edgar Albert Guest",
    citation: "Don't Quit",
    year: 1921,
  },
  {
    quote: "Life Is Far Too Important A Thing Ever To Talk Seriously About.",
    source: "Oscar Wilde",
    citation: "Lady Windermere’s Fan",
    year: 1892,
  },
  {
    quote:
      "As You Well Know One Of The Keys To My Success Is A Clear And Consistent Understanding Of My Own Limitations. So often people overestimate themselves, misapply their gifts. Wisdom is learning the boundaries of one's designated lane.",
    source: "Raymond Red Reddington",
    citation: "The Blacklist",
  },
  {
    quote: "Learn to value yourself, which means: fight for your happiness.",
    source: "Ayn Rand",
    citation: "For The New Intellectual",
    year: 1961,
  },
];
console.log(quotes);

/***
 * `getRandomQuote` function
 ***/
function getRandomQuote(array) {
  // 1. Create a variable that generates a random number
  // between zero and the last index in the `quotes` array
  let randomNumber = Math.floor(Math.random() * array.length);

  // 2. Use the random number variable and bracket notation
  // to grab a random object from the `quotes` array, and
  // store it in a variable
  let grabObject = array[randomNumber];
  // 3. Return the variable storing the random quote object
  return grabObject;
}

console.log(getRandomQuote());
getRandomQuote();

/***
 * `printQuote` function
 ***/

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
 ***/
/*
document
  .getElementById("load-quote")
  .addEventListener("click", printQuote, false); 
  */
