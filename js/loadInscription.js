
$(document).ready(function() {
	// Comportement des boutons de menus
	$('form #suivant').bind('click', function() { // Au clic sur le bouton "mnuAccueil" dans le menu
		verifierEtape1();

	});
});


function verifierEtape1() {
	// Comportement des boutons de menus
  if ($('#dateNaiss').val() === "") {
    alert('Saisir la date de naissance');
    $('#dateNaiss').focus();
    return false ;
  }
$('#content').load('inscriptionEtape2.view.html');
}
