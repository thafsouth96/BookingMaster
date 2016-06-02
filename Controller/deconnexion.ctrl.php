<?php

              session_start() ;
              session_destroy() ;
              echo "<script> alert(\"Vous êtes déconnecté correctement \")</script>";
              //header('Location : ../controler/main.ctrl.php');
              include_once("../View/connexion.view.html");
?>
