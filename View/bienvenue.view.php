<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <script type="text/javascript" src="../lib/jQuery/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="../js/bienvenue.js"></script>

    <title>BookingMaster</title>

  </head>

<body>
  <link rel="stylesheet" href="../css/bienvenue.css">
  <div id="logo">
      <img src="../data/icon/logo1.png" alt="logo">
  </div>

  <div id="content" >

    <?php
          global $nom;
          global $prenom;
    ?>
    <h1 id ="bienvenu"> <?php echo $nom." ".$prenom  ?> Bienvenu sur BookingMaster </h1>

    <div id="button">
      <input  class ="buttonOrange" id = "home" type = "button" name ="home" value = "Connectez-vous">
    </div>
  </div>

</body>
</html>
