<?php
include_once("../Model/DAO.class.php");
include_once("../Model/Booker.class.php");
session_start();

$email= $_POST['email'];
$cc =$_POST['cc'];
$objet=$_POST['objet'];
$message=$_POST['message'];

if((!empty($email) && (!empty($objet) && (!empty($message) && (isset($_POST['envoi'])))))) {
    if (  (filter_var($email, FILTER_VALIDATE_EMAIL))) {
      mail($email,$cc,$objet,$message); // envoi un mail à $email
    echo "<script>";
    echo 'alert("Votre email a été envoyé")';
    echo "</script>";
    echo "<script>";
    echo 'history.go(-2)';
    echo "</script>"; }
  else {
    include_once("../Model/Booker.class.php");
    //var_dump($_SESSION);
    $MailEnvoi= $dao->InsereMail($_SESSION['booker']->idPers(),$email,$objet,$message,'False');
    echo "<script>";
    echo 'alert("Votre message a été envoyé")';
    echo "</script>";
  include("../Controller/tableauBord.ctrl.php");
  }

} else {
  echo "<script>";
  echo 'alert("Veuillez compléter les champs obligatoires")';
  echo "</script>";
  echo "<script>";
  echo 'history.go(-1)';
  echo "</script>";
}


?>
