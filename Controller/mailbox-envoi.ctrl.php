<?php

    // Inclusion du modèle
    include_once("../Model/DAO.class.php");
    include_once("../Model/Message.class.php");
   global $mailRecu;


    $mailEnvoi = $dao->getMessagesEnvoyes(7);





    // Charge la vue
    include("../View/mailbox-envoi.view.php");

    ?>
