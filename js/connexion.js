
$(document).ready(function() {
	// Comportement des boutons de menus
	$('body div #connexion').bind('click', function() { // Au clic sur le bouton connexion"

	 	//alert("Site en construction") ;
		verifierConnexion() ;
		//document.location.href="../Controller/connexion.php";


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
	document.location.href="../Controller/connexion.php";
	alert("ça marche") ; 
}

	//sinon je vérfie aussi le résultat de la fonction authentification dans Controller/connexion.php si c false je redirige affiche une alert


/*	else{

    var data='login=' + $('#login').val()+
							'&psw=' + $('#psw').val();

		$.ajax({	type: "POST",
				url: "../Controller/connexion.php",
				data: data, // On passe les informations saisies � l'�cran
				success: function(data, textStatus, jqXHR) {
					var result = JSON.parse(data) ;
					if (result.status == 'success') {
						if(result.reponse==="true"){
							//redirection vers le tableau de bord
							alert("réussi");
						}
						else{
							// afficher un message d'erreur
							alert("erreur");
						}
				}
				},
				error: function() {
					alert('Erreur dans la requ�te au serveur.');
				}
		});
}
}*/
