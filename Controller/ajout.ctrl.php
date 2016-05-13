<?php
$fonc =$_POST['thelist'];
//var_dump($fonc);
$nom = $_POST['nom'];
//var_dump($nom);
$email=$_POST['email'];
//var_dump($email);
$tel=$_POST['tel'];
//var_dump($tel);
$nomG=$_POST['nomG'];
//var_dump($nomG);
$style=$_POST['style'];
//var_dump($style);
$autre=$_POST['autre'];
//var_dump($autre);
$groupe=$_POST['groupe'];
//var_dump($groupe);
$des=$_POST['des'];
//var_dump($des);
if (isset($_POST['valider'])) {
  echo "Le contact : $nom a été enregisté";
}

 ?>
