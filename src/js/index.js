'use strict'; // Whole-script strict mode syntax

// Preparation:

var deck = generateDeck();
shuffleDeck(deck);
var dealerHand = [];
var playerHand = [];

// Arrray of discarded

// Game starts: by a button, shuffle and remove the top card, facing down

// Start
$('#start-btn').on("click",startGame);

function startGame(){
	shuffleDeck(deck);
	var currentCard = deck.pop();
	console.log(currentCard);
	//remove 1 card - pop out of deck, add to discarded array
	var discarded = [];
	// Push to discarded array
	discarded.push(currentCard);
	console.log(currentCard);
	discarded[0].reversed = true;

	$('#discarded-cards').addClass('revers');

}


// Dealing for the dealer
// Deal first card - down
// Deal second card - up

$('#deal-btn').on("click",dealerCards);
function dealerCards(){
	dealerCards1();
	dealerCards2();
	playerCards1();
	playerCards2();
	};


function dealerCards1(){
	var currentCard = deck.pop();
	//remove 1 card - pop out of deck, add to dealer hand
	dealerHand.push({
		'suit': currentCard.suit,
		'value': currentCard.value,
		'reversed': true
	});
	// Show on dealer's Hand
	console.log(currentCard);
	var dealerHand1Class = currentCard.suit + '-' + currentCard.value;
	console.log(dealerHand1Class);
	$('#dealer-hand1').addClass(dealerHand1Class);
	$('#dealer-hand1').addClass('revers');
};


function dealerCards2(){
	var currentCard = deck.pop();
	//remove 1 card - pop out of deck, add to dealer hand
	dealerHand.push(currentCard);
	// Show on dealer's Hand
	console.log(currentCard);
	var dealerHand2Class = currentCard.suit + '-' + currentCard.value;
	console.log(dealerHand2Class);
	$('#dealer-hand2').addClass(dealerHand2Class);


};



function playerCards1(){
	var currentCard = deck.pop();
	//remove 1 card - pop out of deck, add to dealer hand
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
	playerHand.push(currentCard);

	// Show on player's Hand
	console.log(currentCard);
	var playerHand2Class = currentCard.suit + '-' + currentCard.value;
	console.log(playerHand2Class);
    $('#player-hand2').addClass(playerHand2Class);

};

//------------------End of the first dealing-------------------//

//--------------------Stand button-----------------------------//

function sumValueinArrays(myArray){
	var sum = 0;
	var i;
	var x = myArray.length;
	for (i=0 ; i < x;i++){
		sum = sum + parseInt(myArray[i].value);
		sum = parseInt(sum);

	}
	return sum;

};
$('#stand').on('click', function(){
	//Turn the face-downed card of dealer up
	$('#dealer-hand1').removeClass('revers');
	// Extract the values of all the cards on table
	var pPoints = sumValueinArrays(playerHand);
	var dPoints =sumValueinArrays(dealerHand);
	console.log(pPoints);
	console.log('dealer '+dPoints);
	// Compare the values' sum and announce
});
