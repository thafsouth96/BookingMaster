<?php
$email= 'laszlo.sajkiewicz@iut2.upmf-grenoble.fr' . ',';
//$email.='tom.munier@iut2.upmf-grenoble.fr' . ',';
//$email.='thafsouth.adli@iut2.upmf-grenoble.fr' . ',';
//$email.='julien.bouteyre@iut2.upmf-grenoble.fr' . ',';
//$email.='victor.carratala@iut2.upmf-grenoble.fr' . ',';
$email.='florian.ekoue@iut2.upmf-grenoble.fr';
  $headers = 'From: webmaster@example.com' . "\r\n" .
     'Reply-To: webmaster@example.com' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();
$objet= 'questions';
$message=$_POST['message'];
$messagePopUp = 'Votre message a bien été envoye aux administrateurs';


if ((!empty($message)) && (isset($_POST['envoi']))) {
  mail($email,$objet,$message,$headers); // envoi un mail à $email
  echo "<script>";
  echo 'alert("Votre email a été envoyé aux administrateurs")';
  echo "</script>";
  echo "<script>";
  echo 'history.go(-2)';
  echo "</script>";

} else {
  echo "<script>";
  echo 'alert("Votre message est vide")';
  echo "</script>";
  echo "<script>";
  echo 'history.go(-1)';
  echo "</script>";

}

?>
