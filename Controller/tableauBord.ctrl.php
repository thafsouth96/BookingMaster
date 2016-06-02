<?php
include_once("../Model/DAO.class.php");
include_once("../Model/Booker.class.php");
include_once("../Controller/connexion.php");

if(!isset($_SESSION)){
  session_start() ;
}


  //var_dump($_SESSION);
  $messagesRecus = $dao->getMessagesRecus($_SESSION['id']);
  //var_dump($messagesRecus);

  include("../View/tableauBord.view.php");


  ?>
