<?php

    // Inclusion du modèle
    include_once("../Model/DAO.class.php");
    include_once("../Model/Message.class.php");
      include_once('../Model/Booker.class.php');
   global $mailRecu;
   global $Booker1;
   if(!isset($_SESSION)){
     session_start() ;
   };
   //var_dump($_SESSION);
  // include_once("../View/barre_principale.view.html");
    $mailEnvoi = $dao->getMessagesEnvoyes($_SESSION['id']);





    // Charge la vue
    include("../View/mailbox-envoi.view.php");

    ?>
