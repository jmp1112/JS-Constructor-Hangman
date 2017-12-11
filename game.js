// The completed game should meet the following criteria:

// The completed game should be able to receive user input using the inquirer or prompt npm packages.

var inquirer = require("inquirer");
var prompt = require("prompt");

// You must keep track of the user's remaining guesses and prompt the user if they would like to end the game if none remain.

// Each constructor function should be in it's own file and be exported and required wherever needed.
var letterConstructor = require("./letter_constructor");
var wordConstructor = require("./word_constructor");

// Look into function prototypes and use them for a few of your constructor's methods.