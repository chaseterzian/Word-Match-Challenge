function dictionaryMode(scanMode) {
	var startTimeInMs = new Date().getTime();//V
	var endTimeInMs = 0;//V
	var searchDurationInMs = 0;//V
	
	var tryCount = 0;
	var userWordStored = [];
	var computerGuessing = "a";
	var computerGuessing2 = "b";
	
	var computerGuessPrintout = document.getElementById("computer-guess");
	var guessInfo = document.getElementById("guess-info");
	var userInput = document.getElementById('user-word-input').value;
		userWordStored.push(userInput);//Stores user input value
	var userWordDisplay = document.getElementById("user-word-display");
		userWordDisplay.innerHTML = userWordStored;//Shows users word

		for (var i=0; i<scanMode.length; i=i+2) {
			tryCount = tryCount+2;
			computerGuessing = scanMode[i];
			computerGuessing2 = scanMode[i+1];
			guessInfo.innerHTML = 'Dictionary scan could not find a positive match. Please wait while the default backup scan is running. This may take up to several minutes.';
			
			if (computerGuessing === userWordStored[0]) {
				endTimeInMs = new Date().getTime();//V
				searchDurationInMs = endTimeInMs - startTimeInMs;//V
				guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms';
				computerGuessPrintout.innerHTML = computerGuessing;

				setTimeout(function(){
					location.reload();
				}, 5000);
				return;
			}

			if (computerGuessing2 === userWordStored[0]) {
				endTimeInMs = new Date().getTime();//V
				searchDurationInMs = endTimeInMs - startTimeInMs;//V
				guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms';
				computerGuessPrintout.innerHTML = computerGuessing;

				setTimeout(function(){
					location.reload();
				}, 5000);
				return;
			}
		}
		setTimeout(function(){
			infoStream(moderate);			
		}, 5000);
}

////////////////////////////////////////////////////////////////////////////
function infoStream(scanMode) {
	var startTimeInMs = new Date().getTime();//V
	var endTimeInMs = 0;//V
	var searchDurationInMs = 0;//V
	
	var tryCount = 0;
	var userWordStored = [];
	var computerGuessing = "a";
	
	var computerGuessPrintout = document.getElementById("computer-guess");
	var guessInfo = document.getElementById("guess-info");
	var userInput = document.getElementById('user-word-input').value;
		userWordStored.push(userInput);//Stores user input value
	var userWordDisplay = document.getElementById("user-word-display");
		userWordDisplay.innerHTML = userWordStored;//Shows users word

		

		for (var i=0; i<scanMode.length; i++) {
			tryCount = tryCount+1;
			computerGuessing = scanMode[i];
			guessInfo.innerHTML = 'Error 1 - please reload';
			
			if (computerGuessing === userWordStored[0]) {
				endTimeInMs = new Date().getTime();//V
				searchDurationInMs = endTimeInMs - startTimeInMs;//V
				guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms';
				computerGuessPrintout.innerHTML = computerGuessing;
				return;
			}
		}
		for (var i=0; i<scanMode.length; i++) {
			for (var x=0; x<scanMode.length; x++) {
				tryCount = tryCount+1
				computerGuessing = scanMode[i] + scanMode[x];
				guessInfo.innerHTML = 'Error 2 - please reload';
					
					if (computerGuessing === userWordStored[0]) {
						endTimeInMs = new Date().getTime();
						searchDurationInMs = endTimeInMs - startTimeInMs;
						guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms';
						computerGuessPrintout.innerHTML = computerGuessing;
						return;
					}
			}
		}
		for (var i=0; i<scanMode.length; i++) {
			for (var x=0; x<scanMode.length; x++) {
				for (var y=0; y<scanMode.length; y++) {
					tryCount = tryCount+1
					computerGuessing = scanMode[i] + scanMode[x] + scanMode[y];
					guessInfo.innerHTML = 'Error 3 - please reload';
					computerGuessPrintout.innerHTML = computerGuessing;

					if (computerGuessing === userWordStored[0]) {
							endTimeInMs = new Date().getTime();//V
							searchDurationInMs = endTimeInMs - startTimeInMs;//V
							guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms'; 
							computerGuessPrintout.innerHTML = computerGuessing;
							return;
					}
				}
			}
		}
		for (var i=0; i<scanMode.length; i++) {
			for (var x=0; x<scanMode.length; x++) {
				for (var y=0; y<scanMode.length; y++) {
					for (var z=0; z<scanMode.length; z++) {
						tryCount = tryCount+1
						computerGuessing = scanMode[i] + scanMode[x] + scanMode[y] + scanMode[z];
						guessInfo.innerHTML = 'Error 4 - please reload';
					 
						if (computerGuessing === userWordStored[0]) {
							endTimeInMs = new Date().getTime();//V
							searchDurationInMs = endTimeInMs - startTimeInMs;//V
							guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms'; 
							computerGuessPrintout.innerHTML = computerGuessing;
							return;
						}
					}
				}
			}
		}
		for (var i=0; i<scanMode.length; i++) {
			for (var x=0; x<scanMode.length; x++) {
				for (var y=0; y<scanMode.length; y++) {
					for (var z=0; z<scanMode.length; z++) {
						for (var ii=0; ii<scanMode.length; ii++) {
							tryCount = tryCount+1
							computerGuessing = scanMode[i] + scanMode[x] + scanMode[y] + scanMode[z] + scanMode[ii];
							guessInfo.innerHTML = 'Error 5 - please reload';
						
							if (computerGuessing === userWordStored[0]) {
								endTimeInMs = new Date().getTime();//V
								searchDurationInMs = endTimeInMs - startTimeInMs;//V
								guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms'; 
								computerGuessPrintout.innerHTML = computerGuessing;
								return;
							}
						}
					}
				}
			}
		}
};	