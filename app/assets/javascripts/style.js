// $(document).ready(function() {
	
// 	var userWordStored = [];
// 	var computerGuess = "a";
// 	alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// 	$('#submit-button').on('click', function() {
// 		var userInput = document.getElementById('user-word-input').value
// 		userWordStored.push(userInput);

// 		var userWordDisplay = document.getElementById("user-word-display");
// 		userWordDisplay.innerHTML = userWordStored;

// 		var computerGuessPrintout = document.getElementById("computer-guess");
// 		var guessInfo = document.getElementById("guess-info");
		
// 		for (var i=0; i<alphabet.length; i++) {
// 			computerGuess = alphabet[i];
// 			guessInfo.innerHTML = 'Im thinking';
// 			if (computerGuess === userWordStored[0]) {
// 				guessInfo.innerHTML = 'it took me ' + (i+1) + ' guesses';
// 				computerGuessPrintout.innerHTML = computerGuess;
// 				return;
// 			}
// 		}
		
// 			// if (i >= alphabet.length) {
// 				// for (var x=0; userWordStored[0] !== computerGuess; x++) {
// 					// computerGuess = alphabet[i]
// 					// for (var y=0; userWordStored[0] !== computerGuess; y++) {

// 					// }
// 					// computerGuessPrintout.innerHTML = computerGuess;
// 					// guessInfo.innerHTML = 'it took me ' + i + ' guesses';
// 				// }

			
// 			// }

// 		// }
// 	});


// });