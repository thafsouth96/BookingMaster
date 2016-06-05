<?php
              session_start() ;
              session_destroy() ;
              echo "<script> alert(\"Vous êtes déconnecté correctement \")</script>";
              //header('Location : ../controler/main.ctrl.php');
              //include("../View/connexion.view.html");
              header('Location : ../index.php');
?>
