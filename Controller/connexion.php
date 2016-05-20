<?php


  include_once("../Model/DAO.class.php");



function authentification(){
  $psw = $_POST['password'];
  $mail = $_POST['mail'] ;

  $id_Psw = $dao->getPassword($psw) ;
  $id_mail = $dao->getMailBooker($mail);
          if ($mdp != NULL && $mail != NULL && $id_Psw == $id_mail) {
              session_start();
              $_SESSION['id'] = $id_Psw ;
              return true ; }
          else {return false ; }


}


              /*** Si l'authentification est effectué je redirige vers le tableauDeBord du booker ****/
              include_once('../Controler/tableauDeBord.php');
              }

              /***** Sinon **/
           else {
              echo "<script> alert(\"Le mot de passe ou le pseudo que vous avez saisi est incorrect. Veuillez r\u00e8essayer\")</script>";
              header('Location : ../index.php');
          Mai
