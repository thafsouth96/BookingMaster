<?php

    // Inclusion du modèle
    include_once("../Model/DAO.class.php");
    include_once("../Model/Message.class.php");
   global $mailRecu;
   

    $mailRecu = $dao->AfficheMailRecu();






    // Charge la vue
    include("../View/mailbox-recu.view.php");

    ?>
