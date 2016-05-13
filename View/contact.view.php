<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="Design/profilArtiste.css" media="screen" charset="utf-8">
    <title>bookMaster</title>
  </head>
  <body>
    <div id="logo">
      <img src="../Data/logo1.png">
    </div>
<div id="menuG">
  <a href="mailbox.view.php">Messagerie</a><br>
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
      <!-- à remplacer par les logo/images-->
    </ul>
  </div>
  <div id="barre"> <!-- barre de recherche-->
    <form action="/search.html" class="search-wrapper cf">
      <input type="text" placeholder="Search" required="">
      <button type="submit"> <span class="fontawesome-search"></span>
      </button>
    </form>
  </div>
<div id="contact">
  <h1> Contacts : </h1>
  <!---foreach-->
</div>
<div id="groupe">
  <h1> Groupes :</h1>
  <!--foreach-->
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
