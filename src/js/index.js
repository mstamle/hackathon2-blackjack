'use strict'; // Whole-script strict mode syntax

function card(suit, value, reversed) {
	this.suit = suit;
	this.value = value;
	this.reversed = reversed;
}