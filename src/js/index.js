'use strict'; // Whole-script strict mode syntax

// Preparation:

var deck = generateDeck();
shuffleDeck(deck);
var dealerHand = [];
var playerHand = [];
var discarded = [];


// Game starts: by a button, shuffle and remove the top card, facing down

//-------------------------------- Start--------------------------//
$('#start-btn').on("click", startGame);

function startGame() {
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

// First Dealing:
// Dealing for the dealer
// Deal first card - down
// Deal second card - up

$('#deal-btn').on("click", firstDeal);
function firstDeal() {
	dealerCards1();
	dealerCards2();
	playerCards1();
	playerCards2();

	// Another approach but it's bugging
	// createNewCard(dealerHand,'dealer');
	// createNewCard(dealerHand,'dealer');
	// $('#dealer-hand1').addClass('revers');
	// createNewCard(playerHand,'player');
	// createNewCard(playerHand,'player');
};


function dealerCards1() {
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

function dealerCards2() {
	var currentCard = deck.pop();
	//remove 1 card - pop out of deck, add to dealer hand
	dealerHand.push(currentCard);
	// Show on dealer's Hand
	console.log(currentCard);
	var dealerHand2Class = currentCard.suit + '-' + currentCard.value;
	console.log(dealerHand2Class);
	$('#dealer-hand2').addClass(dealerHand2Class);
};

function playerCards1() {
	var currentCard = deck.pop();
	//remove 1 card - pop out of deck, add to dealer hand
	playerHand.push(currentCard);

	// Show on player's Hand
	console.log(currentCard);
	var playerHand1Class = currentCard.suit + '-' + currentCard.value;
	console.log(playerHand1Class);
	$('#player-hand1').addClass(playerHand1Class);

};

function playerCards2() {
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

function sumValueinArrays(myArray) {
	var sum = 0;
	var i;
	var x = myArray.length;
	for (i = 0; i < x; i++) {

		//read the value
		var readValue = myArray[i].value;

		//compare to give it a number value:

		if ((readValue == 'jack')
			|| (readValue == 'queen')
			|| (readValue == 'king')
		) {
			readValue = 10;
		} else if (readValue == 'ace') {
			readValue = 1;
		} else {
			readValue == parseInt(readValue);
		}

		sum = parseInt(sum) + parseInt(readValue);
		sum = parseInt(sum);

	}
	return sum;

};

$('#stand').on('click', battle);

function battle() {
	//Turn the face-downed card of dealer up
	$('#dealer-hand1').removeClass('revers');
	// Extract the values of all the cards on table
	var pPoints = sumValueinArrays(playerHand);
	var dPoints = sumValueinArrays(dealerHand);
	console.log('player: ' + pPoints);
	console.log('dealer: ' + dPoints);

	//Announce the points
	// alert('Dealer has ' + dPoints + ' points and you have ' + pPoints + ' points.');


	// Compare the values' sum and announce
	var resultField = $('#result');

	if((pPoints > 21) || (dPoints > 21)){
		resultField.text('Bust!! ' + 'Dealer has '
		+ dPoints + ' points and you have '
		+ pPoints + ' points.' );

	} else{
		if(pPoints == dPoints) {
		resultField.text('Tie! ' + 'Dealer has '
		+ dPoints + ' points and you have '
		+ pPoints + ' points.');
		} else if (pPoints > dPoints){
		resultField.text('You win! ' + 'Dealer has '
		+ dPoints + ' points and you have ' + pPoints + ' points.');
		}else {
		resultField.text('You lose! ' + 'Dealer has ' +
		dPoints + ' points and you have ' + pPoints + ' points.');
		}
	};

	// if (pPoints == dPoints) {
	// 	if (pPoints > 21) {
	// 		resultField.text('Bust!!');
	// 	}
	// 	else if (pPoints < 21) {
	// 		resultField.text('Tie!');
	// 	} else {
	// 		resultField.text('You both win!');
	// 	}

	// } else if ((pPoints > 21) && (dPoints > 21)) {
	// 	resultField.text('Bust!!');
	// } else if ((pPoints < 21) && (dPoints < 21)) {
	// 	if (pPoints > dPoints) {
	// 		resultField.text('You win!');
	// 	} else {
	// 		resultField.text('You lose!');
	// 	}
	// }

};


//-----------------------End of Stand button---------------//

//-----------------------Hit button-------------------------//

// Use this function to deal and to hit. Parameters are: array's name,
// person


function createNewCard(arrayName,person){
	var thisarrayName = arrayName;
	var thisperson = person;
	var positionDiv = thisarrayName.length + 1;
	// pop a card
	var currentCard = deck.pop();
	// add to the arrayName
	thisarrayName.push(currentCard);
	// create a div
	$('.' + thisperson + 'HandField').append('<div id="' + thisperson + '-hand' + positionDiv + '" class="card"></div>');
	// display the card to the div
	var newdivClass = currentCard.suit + '-' + currentCard.value;
	$('#player-hand'+ positionDiv).addClass(newdivClass);
	var positionDiv = thisarrayName.length + 1;
};

$('#hit').on('click', function(){
	createNewCard(playerHand,'player')
});

// $('#hit').on('click', function createPlayerNewCard(){
// 		var positionDiv = playerHand.length + 1;
// 		// pop a card
// 		var currentCard = deck.pop();
// 		// add to the playerHand
// 		playerHand.push(currentCard);
// 	// create a div
// 	$('.playerHandField').append('<div id="player-hand' + positionDiv + '" class="card"></div>');
// 	// display the card to the div
// 	var newdivClass = currentCard.suit + '-' + currentCard.value;
// 	$('#player-hand'+ positionDiv).addClass(newdivClass);
// 	var positionDiv = playerHand.length + 1;

//Player will have to press Stand button again
