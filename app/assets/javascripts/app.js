function dictionaryMode(scanMode) {
	var startTimeInMs = new Date().getTime();//V
	var endTimeInMs = 0;//V
	var searchDurationInMs = 0;//V
	
	var tryCount = 0;
	var userWordStored = [];
	var computerGuessing = "a";
	var computerGuessing2 = "b";
	var computerGuessing3 = "c";
	var computerGuessing4 = "d";
	var computerGuessing5 = "e";
	var computerGuessing6 = "f";//6th
	
	var computerGuessPrintout = document.getElementById("computer-guess");
	var guessInfo = document.getElementById("guess-info");
	var userInput = document.getElementById('user-word-input').value;
		userWordStored.push(userInput);//Stores user input value
	var userWordDisplay = document.getElementById("user-word-display");
		userWordDisplay.innerHTML = userWordStored;//Shows users word

		for (var i=0; i<scanMode.length; i=i+6) {
			tryCount = tryCount+4;//revise
			computerGuessing = scanMode[i];
			computerGuessing2 = scanMode[i+1];
			computerGuessing3 = scanMode[i+2];
			computerGuessing4 = scanMode[i+3];
			computerGuessing5 = scanMode[i+4];
			computerGuessing6 = scanMode[i+5];
			guessInfo.innerHTML = 'Dictionary scan could not find a positive match. Please wait while the default backup scan is running. This may take up to several minutes.';
			
			if (computerGuessing === userWordStored[0]) {
				endTimeInMs = new Date().getTime();//V
				searchDurationInMs = endTimeInMs - startTimeInMs;//V
				guessInfo.innerHTML = 'it took me ' + (tryCount-5) + ' tries in ' + searchDurationInMs + ' ms';
				computerGuessPrintout.innerHTML = computerGuessing;

				setTimeout(function(){
					location.reload();
				}, 8000);
				return;
			}
			if (computerGuessing2 === userWordStored[0]) {
				endTimeInMs = new Date().getTime();//V
				searchDurationInMs = endTimeInMs - startTimeInMs;//V
				guessInfo.innerHTML = 'it took me ' + (tryCount-4) + ' tries in ' + searchDurationInMs + ' ms';
				computerGuessPrintout.innerHTML = computerGuessing2;

				setTimeout(function(){
					location.reload();
				}, 8000);
				return;
			}
			if (computerGuessing3 === userWordStored[0]) {
				endTimeInMs = new Date().getTime();//V
				searchDurationInMs = endTimeInMs - startTimeInMs;//V
				guessInfo.innerHTML = 'it took me ' + (tryCount-3) + ' tries in ' + searchDurationInMs + ' ms';
				computerGuessPrintout.innerHTML = computerGuessing3;

				setTimeout(function(){
					location.reload();
				}, 8000);
				return;
			}
			if (computerGuessing4 === userWordStored[0]) {
				endTimeInMs = new Date().getTime();//V
				searchDurationInMs = endTimeInMs - startTimeInMs;//V
				guessInfo.innerHTML = 'it took me ' + (tryCount-2) + ' tries in ' + searchDurationInMs + ' ms';
				computerGuessPrintout.innerHTML = computerGuessing4;

				setTimeout(function(){
					location.reload();
				}, 8000);
				return;
			}
			if (computerGuessing5 === userWordStored[0]) {
				endTimeInMs = new Date().getTime();//V
				searchDurationInMs = endTimeInMs - startTimeInMs;//V
				guessInfo.innerHTML = 'it took me ' + (tryCount-1) + ' tries in ' + searchDurationInMs + ' ms';
				computerGuessPrintout.innerHTML = computerGuessing5;

				setTimeout(function(){
					location.reload();
				}, 8000);
				return;
			}
			if (computerGuessing6 === userWordStored[0]) {
				endTimeInMs = new Date().getTime();//V
				searchDurationInMs = endTimeInMs - startTimeInMs;//V
				guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms';
				computerGuessPrintout.innerHTML = computerGuessing6;

				setTimeout(function(){
					location.reload();
				}, 8000);
				return;
			}

		}
		setTimeout(function(){
			infoStream(moderate);			
		}, 8000);
}

////////////////////////////////////////////////////////////////////////////
function infoStream(scanMode) {
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