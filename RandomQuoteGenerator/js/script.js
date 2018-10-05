

// Create the array of quote objects and name it quotes



var quotes = [
 {
	quote: "Associate yourself with men of good quality if you esteem your own reputation; for tis better to be alone than in bad company.",
	source: "George Washington"
 },

 {
	quote: "To be good, and to do good, is all we have to do.",
	source: "John Adamns"
 },

 {
	quote: "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.",
	source: "John Quincy Adams"
 },


 {
	quote: "If you could kick the person in the pants responsible for most of your trouble, you wouldn’t sit for a month.",
	source: "Theodore Roosevelt"
 },

 {
	quote: "It is amazing what you can accomplish if you do not care who gets the credit.",
	source: "Harry Truman"
 },

 {
	quote: "Ask not what your country can do for you but whar you can do for your country",
	source: "John F. Kennedy"
 },

 {
	quote: "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
	source: "Lyndon B Johnson"
 },

 {
	quote: "Never be satisfied with less than your very best effort. If you strive for the top and miss, you'll still 'beat the pack.",
	source: "Gerold Ford"
 },

 {
	quote: "You can do what you have to do, and sometimes you can do it even better than you think you can.",
	source: "Jimmy Carter"
 },

 {
	quote: "Heroes may not be braver than anyone else. They’re just braver five minutes longer.",
	source: "Ronald Reagan"
 },
]


// Create the getRandomQuuote function and name it getRandomQuote
//generates a random number and stores it in an array
//returns quotes and selects a random index  by using findArray as the index


function getRandomQuote (array) {
	var findArray = Math.floor(Math.random() * (array.length));
	return quotes[findArray];
	}




// Create the printQuote funtion and name it printQuote
//call the randomQuote function and pass the quotes array through it and store it in a variable
//store a HTML string that calls a random quote and source in a variablr
//pass the HTML string to the HTML page using innerHTML 


function printQuote () {
	var getQuote = getRandomQuote(quotes);
	var getString = `<p class="quote"> ${getQuote["quote"]} </p>
	<p class="source"> ${getQuote["source"]}</p>`
	document.getElementById('quote-box').innerHTML = getString;
}



// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

