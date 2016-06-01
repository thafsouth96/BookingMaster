<?php

    // Inclusion du modèle
    include_once("../Model/DAO.class.php");
    include_once("../Model/Message.class.php");

    $mailBrouillon = $dao->AfficheMailBrouillon();






    // Charge la vue
    include("../View/mailbox-broul.view.php");

    ?>
