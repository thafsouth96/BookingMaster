<?php

include_once("../Model/DAO.class.php");

// IDEA: id,nom,email,num,prenom,datenaiss,mdp

        $nom= $_POST['nom'] ;
      
        $email = $_POST['email'] ;

        $num = $_POST['num'] ;

        $prenom = $_POST['prenom'];

        $dateNaiss = $_POST['dateNaiss'];

        $mdp = $_POST['mdp'];

        $mdpConfirm = $_POST['mdpConfrim'];

        if($mdpConfirm == $mdp ) {
          $newBooker = $dao->inscriptionBooker($nom,$email,$num,$prenom,$dateNaiss,$mdp) ;
          include_once("../View/bienvenue.view.php") ;
      }





?>
