<?php
$email= $_POST['email'];
$cc =$_POST['cc'];
$objet=$_POST['objet'];
$message=$_POST['message'];

mail($email,$objet,$message); // envoi un mail à $email
if (isset($_POST['envoi'])) {
  echo "Votre email a été envoyé à l'adresse : $email";
}

?>
