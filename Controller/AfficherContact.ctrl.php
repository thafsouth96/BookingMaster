<?php

include_once("../Model/DAO.class.php");
include_once("../Model/Booker.class.php");




  if(!isset($_SESSION)){
    session_start() ;
  }

  $idBooker = $_SESSION['id'] ;
  var_dump($idBooker);
  
  $contacts = $dao->getContacts($id);






 ?>
