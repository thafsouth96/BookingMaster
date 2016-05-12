
$(document).ready(function() {
	// Comportement des boutons de menus
	$('body div #connexion').bind('click', function() { // Au clic sur le bouton connexion"

	 	alert("Site en construction") ;

	});

	$('body div #inscription').bind('click', function() { // Au clic sur le bouton connexion"

	 		$('body div').load('../page_html/inscriptionDefault.html') ;

	});


});
