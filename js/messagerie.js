
$(document).ready(function() {

	$('#nouveau').bind('click', function() { // Au clic sur le bouton connexion"

      //alert("ça marhce") ;
	 		$('#contentMsg').load('../View/mailbox.view.php') ;

	});
  $('#inBox').bind('click', function() { // Au clic sur le bouton connexion"

      //alert("ça marhce") ;
      $('#contentMsg').load('../Controller/mailbox-recu.ctrl.php') ;

  });
  $('#spam').bind('click', function() { // Au clic sur le bouton connexion"

      //alert("ça marhce") ;
      $('#contentMsg').load('../Controller/mailbox-inde.ctrl.php') ;

  });
  $('#envoye').bind('click', function() { // Au clic sur le bouton connexion"

      //alert("ça marhce") ;
      $('#contentMsg').load('../Controller/mailbox-envoi.ctrl.php') ;

  });
  $('#brouillons').bind('click', function() { // Au clic sur le bouton connexion"

      //alert("ça marhce") ;
      $('#contentMsg').load('../Controller/mailbox-broul.ctrl.php') ;

  });
  $('#corbeille').bind('click', function() { // Au clic sur le bouton connexion"

      //alert("ça marhce") ;
      $('#contentMsg').load('../Controller/mailbox-corbeille.ctrl.php') ;

  });


});
