var cards = ["queen", "queen", "king", "king"];
var cardOne = cards[0];
var cardsInPlay = [];
cardsInPlay.push(cardOne);
console.log(cardOne)
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log(cardTwo)

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}