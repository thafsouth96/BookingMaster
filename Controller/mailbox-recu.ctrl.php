<?php

    // Inclusion du modèle
    include_once("../Model/DAO.class.php");
    include_once("../Model/Message.class.php");
   global $mailRecu;
   global $Booker1;
   session_start();
    $mailRecu = $dao->getMessagesRecus($_SESSION['id']);






    // Charge la vue
    include("../View/mailbox-recu.view.php");

    ?>
