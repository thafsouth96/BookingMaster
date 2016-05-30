<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/ajouterContact.css" media="screen" charset="utf-8">
    <title>bookMaster</title>
  </head>
  <body>
    <div id="logo">
      <img src="../Data/logo1.png">
    </div>
<div id="menuG">
  <a href="../View/mailbox.view.php">Messagerie</a><br>
  <a href="#">Mes contacts</a><br>
  <a href="../View/calendrier.view.php">Mon calendrier</a><br>
  <a href="#">Mes notes</a><br>
  <a href="#">Paramétres</a><br>
  <a href="#">Déconnexion</a>
</div>
    <div id='menuHdroit'>
    <ul>
      <li><img src="../Data/home_w.png" width="30">
      <li><img src="../Data/bell.png" width="30">
      <li><img src="../Data/ecriremsg.jpg" width="30">
      <!-- à remplacer par les logo/images-->
    </ul>
  </div>
    <h1> Ajouter un contact:</h1>
    <div id="formulaire" >
    <form id="coor" action="../Controller/ajout.ctrl.php" method="post">

  	<p><label for="fonc">Fonction du contact*</label></p>
    <select name="thelist" onChange="combo(this)" required >
      <option  value="musicien">Musicien</option>
      <option value="booker">Booker</option>
     </select>

     <p><label for="nom">Nom*:</label><input id="nom" type="text" name="nom" size="10" required ><br/></p>

   <p>
   <label for="email">Email*:</label>
   <input  id="email" type="text" name="email" size="20" required  ><br/>
   </p>

   <p>
   <label for="tel">Numero de telephone*:</label>
   <input id="tel" type="text" name="tel" size="20" required  ><br/>
   </p>

 <hr>




    <p>
   <label for="nomG">Nom du groupe musical:</label>
   <input id="nomG" type="text" name="nomG" size="10" ><br/>
  </p>

  	<label for="style">Style musical*</label>
    <select name="style"  >
      <option value="rock">Rock</option>
      <option value="pop">Pop</option>
      <option value="k-pop">K-Pop</option>
     </select>



   <p>
   <label for="autre">Si autre:</label>
   <input id="autre" type="text" name="autre" size="20" ><br/>
   </p>
<hr>

     <p><label for="groupe">Fonction du contact*</label></p>
     <select name="groupe" onChange="combo(this)" required >
       <option  value="aucun">Aucun</option>
       <option value="groupe1">Groupe1</option>
       <option value="groupe2">Groupe2</option>
      </select>
   <label for="des"> Description:</label>
   <textarea cols="40" rows="5" name="des">
   </textarea>




<input type="button" name="annuler" value="Annuler">
<input type="reset" name="reinitialiser" value="Réinitiliser">
<input type="submit" name="valider" value="Valider">
</form>
<p> *champs obligatoire</p>
</div>
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
