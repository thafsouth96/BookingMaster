<?php

session_start();
  include_once("../Model/DAO.class.php");
  include_once("../Model/Booker.class.php");

  include_once("../View/connexion.view.html");



          	if (isset($_POST['password']) && isset($_POST['login'])) {

                $psw = $_POST['password'];
                $mail = $_POST['login'] ;


                $Booker1 = $dao->getPasswordBooker($psw) ;
                $Booker2 = $dao->getMailBooker($mail);

                if ($Booker1!= NULL && $Booker2 != NULL && $Booker1 == $Booker2) {

                      $_SESSION['id'] = $Booker->getIdB()  ;

                      include_once('../view/tableauBord.view.php');

                }else{
                  echo "<script> alert(\"Le mot de passe ou le pseudo que vous avez saisi est incorrect. Veuillez r\u00e8essayer\") </script>";
                  header('Location : ../index.php');


                }

              }

?>
