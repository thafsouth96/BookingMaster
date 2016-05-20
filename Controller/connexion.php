<?php


  include_once("../Model/DAO.class.php");


  $login = $dao->getLogin() ;
  $password = $dao->getPassword();
          if ($login != NULL && $password != NULL && $login == $password ) {
              session_start();
              $_SESSION['id'] = $login->id;
              $_SESSION['pseudo'] = $login ->pseudo ;
		//echo 'je suis la';

              include_once('../Controler/tableauDeBord.php');
              }
           else {
              echo "<script> alert(\"Le mot de passe ou le pseudo que vous avez saisi est incorrect. Veuillez r\u00e8essayer\")</script>";
              header('Location : ../index.php');
            }
            
?>
