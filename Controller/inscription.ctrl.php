<?php

include_once("../Model/DAO.class.php");

// IDEA: id,nom,email,num,prenom,datenaiss,mdp

        $nom= $_POST['nom'] ;
        var_dump($nom);
        $email = $_POST['email'] ;
        var_dump($email);
        $num = $_POST['num'] ;
        var_dump($num);
        $prenom = $_POST['prenom'];
        var_dump($prenom);
        $dateNaiss = $_POST['dateNaiss'];
        var_dump($dateNaiss);
        $mdp = $_POST['mdp'];
        var_dump($mdp);
        $mdpConfirm = $_POST['mdpConfrim'];

        if($mdpConfirm == $mdp ) {
          $newBooker = $dao->inscription($nom,$email,$num,$prenom,$dateNaiss,$mdp) ;
          var_dump($newBooker) ;
        }





?>
