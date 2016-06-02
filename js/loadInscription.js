
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
		$('#nom').css("border-color","rgb(217, 38, 38)") ;
		$('#nom').focus();

	return false ;
	 }

	else if ($('#prenom').val() === ""){
		alert('Saisir prénom');
		$('#prenom').css("border-color","rgb(217, 38, 38)") ;
		$('#prenom').focus();
		return false;

	}
  else if ($('#dateNaiss').val() === "") {
    alert('Saisir la date de naissance');
		$('#dateNaiss').css("border-color","rgb(217, 38, 38)") ;
    $('#dateNaiss').focus();
    return false ;
  }
	else if ($('#adresse').val() === ""){
		alert('Saisir votre adresse électronique');
		$('#adresse').css("border-color","rgb(217, 38, 38)") ;
		$('#adresse').focus();
		return false ;

	}

	else if ($('#password').val() === "") {
		alert('Veuillez saisir votre mot de passe');
		$('#password').css("border-color","rgb(217, 38, 38)") ;
		$('#password').focus();
		return false ;

	}

	else if ($('#password').val() < 8 ){
		alert('Votre mot de passe doit contenir plus de 8 caractère ');
		$('#password').css("border-color","rgb(217, 38, 38)") ;
		$('#password').focus();
		return false ;
	}

	else if ($('#passwordConfirm').val() === ""){
		alert('Veuillez confirmer la saisie de votre mot de passe');
		$('#passwordConfirm').css("border-color","rgb(217, 38, 38)") ;
		$('#passwordConfirm').focus();
		return false ;
	}


	else if ($('#password').val() != $('#passwordConfirm').val()){
		alert('la confirmation de votre mot de passe ne correspond pas à celui-ci');
		$('#password').css("border-color","rgb(217, 38, 38)") ;
		$('#passwordConfirm').css("border-color","rgb(217, 38, 38)") ;
		$('#passwordConfirm').focus();
		return false ;
	}
return true ;

}
