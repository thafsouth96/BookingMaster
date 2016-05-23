<?php

    // Inclusion du modèle
    include_once("../model/DAO.class.php");
  //  include_once("../model/.class.php");

    $mailInde = $dao->AfficheMailInde();






    // Charge la vue
    include("../View/mailbox-inde.view.php");

    ?>
