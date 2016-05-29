<?php

  //include("../Model/DAO.class.php");
  include_once("../Controller/connexion.php");
  //var_dump($_SESSION['id']);
  //global $Booker1;
  //var_dump($Booker1);
  $messagesRecus = $dao->getMessagesRecus($Booker1->idPers());
  //var_dump($messagesRecus);

  include("../View/tableauBord.view.php");


  ?>
