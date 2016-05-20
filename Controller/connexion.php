<?php


  include_once("../Model/DAO.class.php");



          $result = array() ;
          	$result["status"] = "success" ;
          	if (isset($_REQUEST['login']) && isset($_REQUEST['psw'])  ) {
          		if (isset($artistes[$_REQUEST['idArtiste']])) {
          			// On a re�u idPersonne en POST OU GET, on a une personne avec cet id

                $psw = $_POST['password'];
                $mail = $_POST['mail'] ;

                $id_Psw = $dao->getPassword($psw) ;
                $id_mail = $dao->getMailBooker($mail);
                if ($mdp != NULL && $mail != NULL && $id_Psw == $id_mail) {
                      session_start();
                      $_SESSION['id'] = $id_Psw ;
                      $result["reponse"]="true";

                }else{
                    $result["reponse"]="false";
                }


          		} else {
          			$result["status"] = "error" ;
          		}
          	} else {
          		$result["status"] = "error" ;
          		$result["errMessage"] = "Param�tre idPersonne manquant" ;
          	}
          		echo json_encode($result) ;
          ?>

?>
