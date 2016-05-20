
$(document).ready(function() {
	// Comportement des boutons de menus
	$('form #suivant').bind('click', function() {
				verifierEtape1();

	});

	$('form #reset').bind('click', function() {

			if(confirm("Voulez vous réinitialiser tous les champs")){
				resetIns();
			}

	});

});

function resetIns(){
	$('#nom').val("");
	$('#prenom').val("");
	$('#dateNaiss').val("");
	$('#adresse').val("");
	$('#password').val("") ;
	$('#passwordConfirm').val("");
}


function verifierEtape1() {
	// Comportement des boutons de menus
	if ($('#nom').val() === ""){
		alert('Saisir le nom');
		$('#nom').focus();

	return false ;
	 }

	else if ($('#prenom').val() === ""){
		alert('Saisir prénom');
		$('#prenom').focus();
		return false;

	}
  else if ($('#dateNaiss').val() === "") {
    alert('Saisir la date de naissance');
    $('#dateNaiss').focus();
    return false ;
  }
	else if ($('#adresse').val() === ""){
		alert('Saisir votre adresse électronique');
		$('#adresse').focus();
		return false ;

	}
	else if ($('#password').val() === "") {
		alert('Veuillez saisir votre mot de passe');
		$('#password').focus();
		return false ;

	}

	else if ($('#passwordConfirm').val() === ""){
		alert('Veuillez confirmer la saisie de votre mot de passe');
		$('#passwordConfirm').focus();
		return false ;
	}
	else if ($('#password').val() != $('#passwordConfirm').val()){
		alert('la confirmation de votre mot de passe ne correspond pas à celui-ci');
		$('#passwordConfirm').focus();
		return false ;
	}
$('#content').load('../View/InscriptionEtape2.view.html');

}
