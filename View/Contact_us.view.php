<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="Design/ajouterContact.css" media="screen" charset="utf-8">
    <title>bookMaster</title>
  </head>
  <body>
    <h1> Contact us</h1>
    <div id="formulaire">


      <form id="contact" action="../Controller/Contact_us.ctrl.php" method="post">


      		<p><label for="message">Message :</label><textarea id="message" name="message" placeholder="Votre Message" cols="30" rows="8" required="required"></textarea></p>
      	</fieldset>

      	<input type="submit" name="envoi" value="Envoyer" /></div>
      </form>


  </body>
</html>
