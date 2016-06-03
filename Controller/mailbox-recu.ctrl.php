<?php

    // Inclusion du modèle
    include_once("../Model/DAO.class.php");
    include_once("../Model/Message.class.php");
    include_once('../Model/Booker.class.php');

   global $mailRecu;
   global $Booker1;

   if(!isset($_SESSION)){
     session_start() ;
   }
    $mailRecu = $dao->getMessagesRecus($_SESSION['id']);

      //include_once("../View/barre_principale.view.html");




    // Charge la vue
    include("../View/mailbox-recu.view.php");

    ?>
