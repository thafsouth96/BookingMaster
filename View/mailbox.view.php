
  <div class="DivNewMessage">
  
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
