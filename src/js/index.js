'use strict'; // Whole-script strict mode syntax

// Preparation:

var deck = generateDeck();
shuffleDeck(deck);

// Arrray of discarded

// Game starts: by a button, shuffle and remove the top card, facing down

// Start
$('#start-btn').on("click",startGame);

function startGame(){
	shuffleDeck(deck);
	var currentCard = deck[0];
	//remove 1 card - pop out of deck, add to discarded array
	var discarded = [];
	discarded.push({
			'suit': currentCard.suit,
			'value': currentCard.value,
			'reversed': currentCard.reversed
		});
	// Push to discarded array
	console.log(currentCard);
	discarded[0].reversed = true;

	// var classDiscarded = discarded[0].suit +'-' + discarded[0].value;

	$('#discarded-cards').addClass('revers');

}


// Dealing for the dealer
// Deal first card - down
// Deal second card - up

$('#deal-btn').on("click",dealerCards);
function dealerCards(){
	dealerCards1();
	dealerCards2();
	};




function dealerCards1(){
	var currentCard = deck[0];
	//remove 1 card - pop out of deck, add to discarded array
	var dealerHand = [];
	dealerHand.push({
			'suit': currentCard.suit,
			'value': currentCard.value,
			'reversed': true
		});
	// Show on dealer's Hand
	console.log(currentCard);
	var dealerHand1Class = currentCard.suit + '-' + currentCard.value;
	console.log(dealerHand1Class);
	if (dealerHand[0].reversed == false){
		$('#dealer-hand1').addClass(dealerHand1Class);
	} else{
		$('#dealer-hand1').addClass('revers');
	};
};


function dealerCards2(){
	var currentCard = deck[0];
	//remove 1 card - pop out of deck, add to discarded array
	var dealerHand = [];
	dealerHand.push({
			'suit': currentCard.suit,
			'value': currentCard.value,
			'reversed': false
		});
	// Show on dealer's Hand
	console.log(currentCard);
	var dealerHand2Class = currentCard.suit + '-' + currentCard.value;
	console.log(dealerHand2Class);
	if (dealerHand[0].reversed == false){
		$('#dealer-hand2').addClass(dealerHand2Class);
	} else{
		$('#dealer-hand2').addClass('revers');
	};
};

