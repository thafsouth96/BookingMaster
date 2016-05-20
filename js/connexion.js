
$(document).ready(function() {
	// Comportement des boutons de menus
	$('body div #connexion').bind('click', function() { // Au clic sur le bouton connexion"

	 	alert("Site en construction") ;
		// j'appelle le controller pour vérifier l'authentification et si c true je redirige vers le tableauDeBord 


	});

	$('body div #inscription').bind('click', function() { // Au clic sur le bouton connexion"

	 		$('body div').load('../View/inscriptionEtape1.view.html') ;

	});


});
function verifierConnexion() {
	// Comportement des boutons de menus
	if ($('#login').val() === ""){
		alert('Veuillez saisir votre adresse éléctronique');
		$('#login').focus();
	return false ;
	 }
	else if($('#psw').val() === ""){
		alert('Veuillez entrez un mot de passe');
		$('#psw').focus();
		return false ;

	}

	//sinon je vérfie aussi le résultat de la fonction authentification dans Controller/connexion.php si c false je redirige affiche une alert
}
