
function playerCards1(){
	var currentCard = deck[0];
	//remove 1 card - pop out of deck, add to discarded array
	var playerHand = [];
	playerHand.push({
			'suit': currentCard.suit,
			'value': currentCard.value,
			'reversed': false
        });


	// Show on player's Hand
	console.log(currentCard);
	var playerHand1Class = currentCard.suit + '-' + currentCard.value;
	console.log(playerHand1Class);
    $('#player-hand1').addClass(playerHand1Class);

};

function playerCards2(){
	var currentCard = deck[0];
	//remove 1 card - pop out of deck, add to discarded array
	var playerHand = [];
	playerHand.push({
			'suit': currentCard.suit,
			'value': currentCard.value,
			'reversed': false
        });


	// Show on player's Hand
	console.log(currentCard);
	var playerHand2Class = currentCard.suit + '-' + currentCard.value;
	console.log(playerHand1Class);
    $('#player-hand2').addClass(playerHand1Class);

};

