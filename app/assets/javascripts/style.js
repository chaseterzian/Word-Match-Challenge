$(document).ready(function() {
	
	var userWordStored = [];

	$('#submit-button').on('click', function() {
		var userInput = document.getElementById('user-word-input').value
		userWordStored.push(userInput);

		var userWordDisplay = document.getElementById("user-word-display");
		userWordDisplay.innerHTML = userWordStored;
		
		
		// var computerGuess = document.getElementById("computer-guess");
		// computerGuess.innerHTML = userWordStored;
	});


});