<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="Design/ajouterContact.css" media="screen" charset="utf-8">
    <title>bookMaster</title>
  </head>
  <body>
   <div id="logo">
      <img src="../Data/logo1.png">
    </div>
<div id="menuG">
  <a href="ajouterContact.view.php">Ajouter un artiste</a><br>
  <a href="#">Mes contacts</a><br>
  <a href="calendrier.view.php">Mon calendrier</a><br>
  <a href="#">Mes notes</a><br>
  <a href="#">Paramétres</a><br>
  <a href="#">Déconnexion</a>
</div>
    <div id='menuHdroit'>
    <ul>
      <li><img src="../Data/home_w.png" width="30">
      <li><img src="../Data/bell.png" width="30">
      <li><img src="../Data/ecriremsg.jpg" width="30">

    </ul>
  </div>
    <h1> MESSAGE</h1>
    <div id="formulaire">


      <form id="contact" action="../Controller/traitement.ctrl.php" method="post">

      		<p><label for="email"></label><input type="email" id="email" name="email" placeholder="Destinataire" required="required" /></p>
      		<p><label for="cc"></label><input type="text" id="cc" name="cc" placeholder="Autres destinataires" /></p>

      		<p><label for="objet"></label><input type="text" id="objet" name="objet" placeholder="Objet" required="required" /></p>
      		<p><label for="message">Message :</label><textarea id="message" name="message" placeholder="Votre Message" cols="30" rows="8" required="required"></textarea></p>
      	</fieldset>

      	<input type="submit" name="envoi" value="Envoyer" /></div>
      </form>



<footer>
  <div id='menuFooter'>
  <ul>

     <li><a href='#'><span>About</span></a></li>
     <li><a href='#'><span>Help</span></a></li>
     <li><a href="../View/Contact_us.view.php"><span>Contact us</span></a></li>
  </ul>
</footer>
<div id="logo2">
  <img src="../Data/logo1.png">
</div>
  </body>
</html>
