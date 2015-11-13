$(document).ready(function() {
	
	alphabet = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I', 
	            'j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R', 
	            's','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z'];
	            console.log(alphabet.length);
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
			guessInfo.innerHTML = 'This 1 letter word stumps me..';
			if (computerGuessing === userWordStored[0]) {
				guessInfo.innerHTML = 'it took me ' + (i+1) + ' tries';
				computerGuessPrintout.innerHTML = computerGuessing;
				return;
			}
		}



		
		for (var i=0; i<alphabet.length; i++) {
			for (var x=0; x<alphabet.length; x++) {
				
				computerGuessing = alphabet[i] + alphabet[x];
				guessInfo.innerHTML = 'This 2 letter word stumps me..';
					
					if (computerGuessing === userWordStored[0]) {
						
						if (i===0) { 
							guessInfo.innerHTML = 'it took me ' + ( 52+x+1 ) + ' tries'; 
							console.log("inside i===0");
							console.log(i);
							console.log(x);
							console.log("inside i===0");
							console.log(computerGuessing);
							console.log(userWordStored);
							computerGuessPrintout.innerHTML = computerGuessing;


							return;
						}

						console.log("when i isnt 0");
						console.log(i);
						console.log(x);
						console.log("when i isnt 0");
						console.log(computerGuessing);
						console.log(userWordStored);


						guessInfo.innerHTML = 'it took me ' + ( (52*i+52) + (x+1) ) + ' tries';
						
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