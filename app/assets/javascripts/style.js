$(document).ready(function() {
	
	$('#englishWords-scan-button').on('click', function() {	
		dictionaryMode(englishWordList);
	});	
	$('#quick-scan-button').on('click', function() {
		infoStream(quick);
	});
	$('#normal-scan-button').on('click', function() {
		infoStream(normal);
	});
	$('#moderate-scan-button').on('click', function() {
		infoStream(moderate);
	});
	$('#deep-scan-button').on('click', function() {
		infoStream(deep);
	});

	$('#reload-button').on('click', function() {
		location.reload();
	});


});