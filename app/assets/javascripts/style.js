$(document).ready(function() {

	$('#quick-scan-button').on('click', function() {
		infoStream(quick);
	});
	$('#normal-scan-button').on('click', function() {
		infoStream(normal);
	});
	$('#moderate-scan-button').on('click', function() {
		infoStream(moderate);
	});
	$('#moderate-scan-button').on('click', function() {
		infoStream(deep);
	});

	$('#reload-button').on('click', function() {
		location.reload();
	});


});