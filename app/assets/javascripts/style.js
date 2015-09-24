$(document).ready(function() {
	
	var userWordStored = [];
	var computerGuess = "a";
	var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

	$('#submit-button').on('click', function() {
		var userInput = document.getElementById('user-word-input').value
		userWordStored.push(userInput);

		var userWordDisplay = document.getElementById("user-word-display");
		userWordDisplay.innerHTML = userWordStored;

		var computerGuessPrintout = document.getElementById("computer-guess");
		var guessInfo = document.getElementById("guess-info");
		for (var i=0; userWordStored[0] !== computerGuess; i++) {
			computerGuess = alphabet[i];
			computerGuessPrintout.innerHTML = computerGuess;
			guessInfo.innerHTML = 'it took me ' + i + ' guesses';
		}
		
	});


});