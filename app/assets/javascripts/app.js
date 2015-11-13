$(document).ready(function() {
	
	alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	var userWordStored = [];
	var computerGuessing = "a";
	var computerGuessPrintout = document.getElementById("computer-guess");
	var guessInfo = document.getElementById("guess-info");

	$('#submit-button').on('click', function() {
		var userInput = document.getElementById('user-word-input').value
		userWordStored.push(userInput);//Stores user input value
		
		var userWordDisplay = document.getElementById("user-word-display");
		userWordDisplay.innerHTML = userWordStored;//Shows users word



		
		for (var i=0; i<alphabet.length; i++) {
			computerGuessing = alphabet[i];
			guessInfo.innerHTML = 'I think I will sit this one out';
			if (computerGuessing === userWordStored[0]) {
				guessInfo.innerHTML = 'it took me ' + (i+1) + ' tries';
				computerGuessPrintout.innerHTML = computerGuessing;
				return;
			}
		}



		
		for (var i=0; i<alphabet.length; i++) {
			for (var x=0; x<alphabet.length; x++) {
				
				computerGuessing = alphabet[i] + alphabet[x];
				console.log(computerGuessing);
				console.log(userWordStored);
				
				guessInfo.innerHTML = 'I think I will sit this one out';
					
					if (computerGuessing === userWordStored[0]) {
						
						if (i===0) { 
							guessInfo.innerHTML = 'it took me ' + ( 26+(x+1) ) + ' guesses'; 
							console.log("inside i===0");
							console.log(i);
							console.log(x);
							console.log("inside i===0");

							return;
						}

						console.log("when i isnt 0");
						console.log(i);
						console.log(x);
						console.log("when i isnt 0");

						guessInfo.innerHTML = 'it took me ' + ( (i*26)+(x+1) ) + ' guesses';
						
						computerGuessPrintout.innerHTML = computerGuessing;
						
						return;
					}
			}
		}

		
			// if (i >= alphabet.length) {
				// for (var x=0; userWordStored[0] !== computerGuess; x++) {
					// computerGuess = alphabet[i]
					// for (var y=0; userWordStored[0] !== computerGuess; y++) {

					// }
					// computerGuessPrintout.innerHTML = computerGuess;
					// guessInfo.innerHTML = 'it took me ' + i + ' guesses';
				// }

			
			// }

		// }
	});


});