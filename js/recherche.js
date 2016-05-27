
$(document).ready(function() {
	// Comportement des boutons de menus
	$('body div #Rech').bind('click', function() { // Au clic sur le bouton connexion"

	 	alert("Site en construction") ;

	});

	$('body div #inscription').bind('click', function() { // Au clic sur le bouton connexion"

	 		$('body div').load('../View/inscriptionEtape1.view.html') ;

	});


});
