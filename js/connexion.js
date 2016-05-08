$(document).ready(function() {
	// Comportement des boutons de menus
	$('body div #connexion').bind('click', function() { // Au clic sur le bouton connexion"
		activerOptionMenu($(this));
		$('body').load('html_pages/main.html') ; // On charge la page accueil.html dans le body
	});

	$('body nav #inscription').bind('click', function() { // Au clic sur le bouton "mnuQuiSommesNous" dans le menu
		activerOptionMenu($(this));
		// On charge la page inscription.html dans le body et on appelle la fonction d'initialisation de cette page
		$('body').load('pages/inscription.html') ;
	});

	// On d�clenche un clic sur le bouton "Page 1" pour initialiser le site
	//$('body nav #mnuAccueil').click();
});

// ---------------------------------------------------------------------------------------------------------------------------
// Active une option du menu (l'�l�ment � activer est pass� en param�tre)
/*function activerOptionMenu($element) {
	// D�sactive toutes les options du menu (met l'attribut 'actif' � faux)
	$('body nav input[type="button"]').attr('actif', false);
	// Active l'option choisie et re�ue en param�tre (met l'attribut 'actif' � vrai)
	$element.attr('actif', true);
}
*/
