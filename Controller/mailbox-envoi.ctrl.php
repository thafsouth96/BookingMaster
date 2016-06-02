<?php

    // Inclusion du modèle
    include_once("../Model/DAO.class.php");
    include_once("../Model/Message.class.php");
   global $mailRecu;
   global $Booker1;
   session_start();
   var_dump($_SESSION);

    $mailEnvoi = $dao->getMessagesEnvoyes($_SESSION['id']);





    // Charge la vue
    include("../View/mailbox-envoi.view.php");

    ?>
