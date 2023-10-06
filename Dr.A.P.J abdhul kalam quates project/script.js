//Object Array to hold quotes, sources, citaitons and years
var quotes = [
	{
	quote: "Dream is not that which you see while sleeping it is something that does not let you sleep",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "Dream, Dream DreamDreams transform into thoughtsAnd thoughts result in action.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "It Is Very Easy To Defeat Someone, But It Is Very Hard To Win Someone.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "All Birds find shelter during a rain.But Eagle avoids rain by flying abovethe Clouds.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "Don't take rest after your first victory because if you fail in second, more lips are waiting to say that your first victory was just luck..",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "Dreams are not those which comes while we are sleeping, but dreams are those when u don't sleep before fulfilling them.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "suffering is the essence of success!!!",
	source: "A.P.J. Abdul Kalam", 
 
	},
	{
	quote:  "Learning gives creativityCreativity leads to thinkingThinking provides knowledgeKnowledge makes you great",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "“Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "Man needs difficulties in life because they are necessary to enjoy the success.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "You can't go around building a better world for people. Only people can build a better world for people. Otherwise it's just a cage.",
	source: "A.P.J. Abdul Kalam", 
	citation: "Witches Abroad",
	year: "1991" 
	},
	{
	quote: "There isn't a way things should be. There's just what happens, and what we do.",
	source: "A.P.J. Abdul Kalam", 
	citation: "A Hat Full of Sky" 
	},
	{
	quote: "It's not about how hard you can hit; it's about how hard you can get hit and keep moving forward.",
	source: "A.P.J. Abdul Kalam",
	citation: "Rocky",
	year: "1976"
	},
	{
	quote: "More fuck yeah, less fuck that.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "If you want to go fast, go alone. If you want to go far, go together.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "It's OK to not be OK, as long as you don't stay that way.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "I can be changed by what happens to me but I refuse to be reduced by it.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "Believe you can and you're halfway there.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "May I never be complete. May I never be content. May I never be perfect.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "Nothing in life is to be feared; it is only to be understood. Now is the time to understand more so that we may fear less.",
	source: "A.P.J. Abdul Kalam"
	},
	{

	quote: "Those who don't believe in magic will never find it.",
	source: "A.P.J. Abdul Kalam"
	},
	{
	quote: "There is no elevator to success  you have to take the stairs.",
	source: "A.P.J. Abdul Kalam"
	},
	
];

//Function to randomly select a quote value and return a random quote object from the quotes array
function getRandomQuote () {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var randomQuote = quotes[randomNumber];
	return randomQuote;
}	

//Function to select random rgb color value
function getRandomColor () {
	var red = Math.floor(Math.random() * 256 );
	var green = Math.floor(Math.random() * 256 );
	var blue = Math.floor(Math.random() * 256 );
	 var randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return randomColor;
}

//Function to call the getRandomQuote function and stores the returned quote object in a variable
//Constructs a string containing the different properties of the quote object 
function printQuote () {
		var quotes = getRandomQuote ();
		var quoteContainer = document.getElementById("quote-box");
		var quoteString = `<p class="quote">${quotes.quote}</p><p class="source">${quotes.source}`;
				if (quotes.citation) {quoteString += `<span class="citation">${quotes.citation}</span>`}
				if (quotes.year) {quoteString += `<span class="year">${quotes.year}</span></p>`}
				else {quoteString += '</p>'};
					quoteContainer.innerHTML = quoteString;

					//assigns random color value to document background color 
					document.body.style.backgroundColor = getRandomColor ();
}

//Quote automatically refreshes every 15 seconds
window.setInterval(function(){
printQuote ();
}, 15000);

//Event listener on LoadQuote button to generate new quote		
document.getElementById("loadQuote").addEventListener("click", printQuote, false);

