<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/mailbox.css" media="screen" charset="utf-8">
    <title>bookMaster</title>
  </head>
  <body>

<header>
  <h1>Messagerie</h1>
</header>

<div class="mailbox">
  <div class="nav">
    <a href="../View/mailbox.view.php">Nouveau</a>
    <a href="../Controller/mailbox-recu.ctrl.php">Boite de réception</a>
    <a href="../Controller/mailbox-inde.ctrl.php">Indésirables</a>
    <a href="../Controller/mailbox-envoi.ctrl.php">Envoyé</a>
    <a href="../Controller/mailbox-broul.ctrl.php">Brouillons</a>
    <a href="../View/mailbox-corbeille.view.php">Corbeille</a>
  </div>
  <div class="messages">
    <input name="search" placeholder="search" />


    <h1> MESSAGE</h1>
    <div id="formulaire">


      <form id="contact" action="../Controller/traitement.ctrl.php" method="post">

      		<p><label for="email"></label><input type="text" id="email" name="email" placeholder="Destinataire" /></p>
      		<p><label for="cc"></label><input type="text" id="cc" name="cc" placeholder="Autres destinataires" /></p>

      		<p><label for="objet"></label><input type="text" id="objet" name="objet" placeholder="Objet" required="required" /></p>
      		<p><label for="message"></label><textarea id="message" name="message" placeholder="Votre Message" cols="30" rows="8" required="required"></textarea></p>
      	</fieldset>

      	<input type="submit" name="envoi" value="Envoyer" class="btn_vld" /></div>
      </form>
  </div>
</div>
</body>
</html>
