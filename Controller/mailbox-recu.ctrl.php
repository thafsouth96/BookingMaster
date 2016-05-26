<?php

    // Inclusion du modèle
    include_once("../model/DAO.class.php");
  //  include_once("../model/.class.php");

    $mailRecu = $dao->AfficheMailRecu();






    // Charge la vue
    include("../View/mailbox-recu.view.php");

    ?>
