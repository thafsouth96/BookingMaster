<?php

    // Inclusion du modèle
    include_once("../Model/DAO.class.php");
    include_once("../Model/Message.class.php");
      include_once('../Model/Booker.class.php');
    if(!isset($_SESSION)){
      session_start() ;
    }

      //include_once("../View/barre_principale.view.html");

    $mailBrouillon = $dao->AfficheMailBrouillon();






    // Charge la vue
    include("../View/mailbox-broul.view.php");

    ?>
