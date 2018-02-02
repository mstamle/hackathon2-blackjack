'use strict'; // Whole-script strict mode syntax

// Preparation:

// Arrray of discarded
function discard(){
    var discarded = [];
		discarded.push({
                'suit': discardedSuit,
                'value': discardedValues,
                'reversed': true
            });
}

// Game starts: by a button, shuffle and remove the top card, facing down

// Start
$('#start-btn').on("click",startGame);




function startGame(){
	var deck = generateDeck();
	shuffleDeck(deck);
	console.log(deck[1]);
	//remove 1 card - pop out of deck
	//var popedCard =

	// Push to discarded array

}


//

