
function playerCards1(){
	var currentCard = deck.pop();
	//remove 1 card - pop out of deck, add to dealer hand
	var playerHand = [];
	playerHand.push(currentCard);

	// Show on player's Hand
	console.log(currentCard);
	var playerHand1Class = currentCard.suit + '-' + currentCard.value;
	console.log(playerHand1Class);
    $('#player-hand1').addClass(playerHand1Class);

};

function playerCards2(){
	var currentCard = deck.pop();
	//remove 1 card - pop out of deck, add to dealer hand
	var playerHand = [];
	playerHand.push(currentCard);

	// Show on player's Hand
	console.log(currentCard);
	var playerHand2Class = currentCard.suit + '-' + currentCard.value;
	console.log(playerHand2Class);
    $('#player-hand2').addClass(playerHand2Class);

};

