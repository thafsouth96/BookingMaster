<?php
$email= $_POST['email'];
$cc =$_POST['cc'];
$objet=$_POST['objet'];
$message=$_POST['message'];

if((!empty($email) && (!empty($objet) && (!empty($message) && (filter_var($email, FILTER_VALIDATE_EMAIL) && (isset($_POST['envoi']))))))) {
    mail($email,$cc,$objet,$message); // envoi un mail à $email
    echo "<script>";
    echo 'alert("Votre email a été envoyé")';
    echo "</script>";
    echo "<script>";
    echo 'history.go(-2)';
    echo "</script>";
} else {
  echo "<script>";
  echo 'alert("Veuillez compléter les champs obligatoires")';
  echo "</script>";
  echo "<script>";
  echo 'history.go(-1)';
  echo "</script>";
}


?>
