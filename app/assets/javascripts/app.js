quick =    ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I', 
	          'j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R', 
	          's','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z'];

normal   = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I', 
	          'j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R', 
	          's','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
	          '0','1','2','3','4','5','6','7','8','9'];

moderate = ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I', 
	          'j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R', 
	          's','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
	          '0','1','2','3','4','5','6','7','8','9',
					  '!','@','#','$','%','^','&','*','(',')'];


deep =     ['a','A','b','B','c','C','d','D','e','E','f','F','g','G','h','H','i','I', 
	          'j','J','k','K','l','L','m','M','n','N','o','O','p','P','q','Q','r','R', 
	          's','S','t','T','u','U','v','V','w','W','x','X','y','Y','z','Z',
	          '0','1','2','3','4','5','6','7','8','9',
					  '!','@','#','$','%','^','&','*','(',')',
					  '-','_','+','=','[','{',']','}','\'','|',';',':',"'",'"','<','>','?','`','~'];


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
			guessInfo.innerHTML = 'Dono...error 1';
			
			if (computerGuessing === userWordStored[0]) {
				endTimeInMs = new Date().getTime();//V
				searchDurationInMs = endTimeInMs - startTimeInMs;//V
				// guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms';
				// computerGuessPrintout.innerHTML = computerGuessing;
				// return;
				if (scanMode === englishWordList) { 
					guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms with the dictionary scanning mode';
					computerGuessPrintout.innerHTML = computerGuessing;
					return;
				}
				if (scanMode === quick) { 
					guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms with the quick scanning mode';
					computerGuessPrintout.innerHTML = computerGuessing;
					return;
				}
				if (scanMode === normal) { 
					guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms with the normal scanning mode';
					computerGuessPrintout.innerHTML = computerGuessing;
					return;
				}
				if (scanMode === moderate) { 
					guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms with the moderate scanning mode';
					computerGuessPrintout.innerHTML = computerGuessing;
					return;
				}
				if (scanMode === deep) { 
					guessInfo.innerHTML = 'it took me ' + tryCount + ' tries in ' + searchDurationInMs + ' ms with the deep scanning mode';
					computerGuessPrintout.innerHTML = computerGuessing;
					return;
				}
			}
		}
		for (var i=0; i<scanMode.length; i++) {
			for (var x=0; x<scanMode.length; x++) {
				tryCount = tryCount+1
				computerGuessing = scanMode[i] + scanMode[x];
				guessInfo.innerHTML = 'Dono...error 2';
					
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
					guessInfo.innerHTML = 'Dono...error 3';
				
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
						guessInfo.innerHTML = 'Dono...error 4';
					 
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
							guessInfo.innerHTML = 'Dono...error 5';
						
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