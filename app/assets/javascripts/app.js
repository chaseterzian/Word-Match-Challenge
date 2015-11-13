$(document).ready(function() {
	
	alphabet = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I', 
	            'j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R', 
	            's','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
	            '0','1','2','3','4','5','6','7','8','9',
	            '!','@','#','$','%','^','&','*','(',')'];
	extraSymbols = ['-','_','+','=','[','{',']','}','\'','|',';',':',"'",'"','<','>','?','`','~'];

	var userWordStored = [];
	var computerGuessing = "a";
	var computerGuessPrintout = document.getElementById("computer-guess");
	var guessInfo = document.getElementById("guess-info");

	$('#submit-button').on('click', function() {
		var startTimeInMs = new Date().getTime();//V
		var endTimeInMs = 0;//V
		var searchDurationInMs = 0;//V
		console.log(searchDurationInMs);

		var userInput = document.getElementById('user-word-input').value;
		userWordStored.push(userInput);//Stores user input value
		var userWordDisplay = document.getElementById("user-word-display");
		userWordDisplay.innerHTML = userWordStored;//Shows users word
		
		
		


		for (var i=0; i<alphabet.length; i++) {
			computerGuessing = alphabet[i];
			guessInfo.innerHTML = 'This 1 letter word stumps me..';
			if (computerGuessing === userWordStored[0]) {
				endTimeInMs = new Date().getTime();//V
				searchDurationInMs = endTimeInMs - startTimeInMs;//V
				
				guessInfo.innerHTML = 'it took me ' + (i+1) + ' tries in ' + searchDurationInMs + ' ms';
				computerGuessPrintout.innerHTML = computerGuessing;
				return;
			}
		}//1character

		
		for (var i=0; i<alphabet.length; i++) {
			for (var x=0; x<alphabet.length; x++) {
				computerGuessing = alphabet[i] + alphabet[x];
				guessInfo.innerHTML = 'This 2 letter word stumps me..';
					
					if (computerGuessing === userWordStored[0]) {
						
						if (i===0) { 
							endTimeInMs = new Date().getTime();//V
							searchDurationInMs = endTimeInMs - startTimeInMs;//V
							
							guessInfo.innerHTML = 'it took me ' + ( 52+x+1 ) + ' tries in ' + searchDurationInMs + ' ms'; 
							computerGuessPrintout.innerHTML = computerGuessing;
							return;
						}
						endTimeInMs = new Date().getTime();
						searchDurationInMs = endTimeInMs - startTimeInMs;

						guessInfo.innerHTML = 'it took me ' + ( (52*i+52) + (x+1) ) + ' tries in ' + searchDurationInMs + ' ms';
						computerGuessPrintout.innerHTML = computerGuessing;
						return;
					}
			}
		}//2characters

	// 	for (var i=0; i<alphabet.length; i++) {
	// 		for (var x=0; x<alphabet.length; x++) {
	// 			for (var y=0; y<alphabet.length; y++) {
	// 				computerGuessing = alphabet[i] + alphabet[x] + alphabet[y];
	// 				guessInfo.innerHTML = 'This 3 letter word stumps me..';
				
	// 				if (computerGuessing === userWordStored[0]) {
	// 					if (i===0 && x===0) { 
	// 						guessInfo.innerHTML = 'it took me ' + ( 52+x+1 ) + ' tries'; 
	// 						computerGuessPrintout.innerHTML = computerGuessing;
	// 						return;
	// 					}
					
	// 					guessInfo.innerHTML = 'it took me ' + ( (52*i+52) + (x+1) ) + ' tries';
	// 					computerGuessPrintout.innerHTML = computerGuessing;
	// 					return;
	// 				}
	// 			}
	// 		}
	// 	}//3characters

	});


});