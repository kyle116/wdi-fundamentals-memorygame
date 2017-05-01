var cards = [
    {
    	rank: "queen",
    	suit: "hearts",
    	cardImage: "images/queen-of-hearts.png",
    },
    {
    	rank: "queen",
    	suit: "diamonds",
    	cardImage: "images/queen-of-diamonds.png",
    },
    {
    	rank: "king",
    	suit: "hearts",
    	cardImage: "images/king-of-hearts.png",
    },
    {
    	rank: "king",
    	suit: "diamonds",
    	cardImage: "images/king-of-diamonds.png",
    }
];

var cardsInPlay = [];
var checkForMatch = function() {
    if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}

var cardElement = document.createElement('img');

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute('data-id', i); //does this overide the src attribute before it?
		cardElement.addEventListener("click", flipCard());
		document.appendChild(cardElement);
  }
}

var flipCard = function() {
	  var cardID = cardElement.getAttribute("src"); //maybe src should be data-id
	  console.log("User flipped " + cards[cardId].rank);
      console.log(cards[cardId].cardImage)
      console.log(cards[cardId].suit)
      cardsInPlay.push(cards[cardId].rank)
      cardElement.setAttribute("src", cards[cardId].cardImage) //src should be data-id
	    if (cardsInPlay.length === 2) {
		checkForMatch();
  }

}



createBoard();

