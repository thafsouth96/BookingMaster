<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="../lib/jQuery/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="../js/bienvenue.js"></script>
    <link rel="stylesheet" href="../css/bienvenu.css">
    <title>BookingMaster</title>

  </head>

<body>

  <?php
        global $nom;
        global $prenom;
  ?>
  <p id ="bienvenu"> <?php echo $nom.$prenom  ?> Bienvenu sur BookingMaster </p>

  <input  class ="buttonOrange" id = "home" type = "button" name ="home" value = "Connectez-vous">



</body>
</html>
