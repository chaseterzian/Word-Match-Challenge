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