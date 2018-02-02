'use strict'; // Whole-script strict mode syntax

// Preparation:

// Arrray of discarded

// Game starts: by a button, shuffle and remove the top card, facing down

// Start
$('#start-btn').on("click",startGame);

function startGame(){
	var deck = generateDeck();
	shuffleDeck(deck);
	var currentCard = deck[0];

	//remove 1 card - pop out of deck, add to discarded array
	var discarded = [];
	discarded.push({
			'suit': deck[0].suit,
			'value': deck[0].value,
			'reversed': deck[0].reversed
		});
	console.log(discarded[0]);
	discarded[0].reversed = true;
	console.log(discarded[0]);
	// var classDiscarded = discarded[0].suit +'-' + discarded[0].value;

	$('#discarded-cards').addClass('revers');

	// Push to discarded array

}


//

