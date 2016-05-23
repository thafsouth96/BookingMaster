<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="mailbox.css" media="screen" charset="utf-8">
    <title>bookMaster</title>
  </head>
  <body>

<header>
  <h1>messages</h1>
</header>

<div class="mailbox">
  <div class="nav">
    <a href="mailbox.view.php">Nouveau</a>
    <a href="mailbox-recu.view.php">Boite de réception</a>
    <a href="#">Indésirables</a>
    <a href="#">Envoyé</a>
    <a href="#">Brouillons</a>
    <a href="#">Courbeille</a>
  </div>
  <div class="messages">
    <input name="search" placeholder="search" />
    <div class="actions-dropdown">
      <label>actions <span>▼</span></label>
      <ul>
        <li>Ranger</li>
        <li>Déplacer vers</li>
        <li>Supprimer</li>
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
  </div>
</div>
</body>
</html>
