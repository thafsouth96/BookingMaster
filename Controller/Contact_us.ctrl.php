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

mail($email,$objet,$message,$headers); // envoi un mail à $email
if (isset($_POST['envoi'])) {
  echo "Votre email a été envoyé aux administrateurs";
}

?>
