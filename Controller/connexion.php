<?php


  include_once("../Model/DAO.class.php");
  include_once("../Model/Booker.class.php");

          	if (isset($_POST['password']) && isset($_POST['login'])) {


                $psw = $_POST['password'];
                //var_dump($psw) ;
                $mail = $_POST['login'] ;


                $Booker1 = $dao->getPasswordBooker($psw) ;
                //var_dump($Booker1);
                $Booker2 = $dao->getMailBooker($mail);

                if($Booker1 != NULL && $Booker2 != NULL) {
                //var_dump($Booker2);
                  if ($Booker1 == $Booker2) {

                      session_start();
                      $_SESSION['id'] = $Booker1->idPers() ;
                      //var_dump($Booker1->idPers());

                      include_once('../Controller/tableauBord.ctrl.php');
                  }
                  else if ($Booker1 != $Booker2){
                    echo "<script> alert(\"Le mot de passe ou le pseudo que vous avez saisi est incorrect. Veuillez r\u00e8essayer\") </script>";
                    //include_once("../View/connexion.view.html");
                  }

                } else{
                    e
                    echo "<script> alert(\"Le mot de passe ou le pseudo que vous avez saisi est incorrect. Veuillez r\u00e8essayer\") </script>";
                    include_once("../View/connexion.view.html");
                  }
            }



?>
