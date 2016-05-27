<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/profilArtiste.css" media="screen" charset="utf-8">
    <title>bookMaster</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>
  </head>
  <body>
    <div id = "barrePrincipale">
        <img id="menu" src="../data/icon/menu.png" alt="menu" width="40" height="40">

        <img id="notifications" src="../data/icon/notifiOfficiel.png" alt="notification" width="40">
        <a href="../Controller/profilArtiste.ctrl.php"> <img id="home" src="../data/icon/home.png" alt="home" width="40"> </a>
        <div id="rechercheAvancee"><h4>Recherche avancée</h4></div>
        <input id="recherche" name="search" type="text" placeholder="Rechercher" alt="Search"/>
    </div>
    <div id="content"> <!-- div incluant les trois autres div-->
      <div id="nom"> <!--div avec l'image,le nom et le button-->
        <h1> Nom de l'artiste </h1> <!--echo php-->
      </div> <!--end class nom-->
      <div id="specs">
        <div id="icon">

        </div>
        <div id="infosGrp">

        </div>
        <div id="albums">
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
        </div>
      </div>
      <div id="publications">
        <div id="msgToGrp">
          <form id="btnMsgToGrp" action="../Controller/connexion.php" method="POST">
          <input class = "buttonBlue" id ='sendMsg' type="submit" name="envoyer un message" value="Envoyer un message">
          <h2> PUBLICATIONS </h2>
          </form>
        </div>
        <div id="pubs">
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
        lorem ipsum<br/>
      </div>
      </div>
      <div id="events">
        <form id="formNextEvents" method="post" action="nextEvents.php">
        </form>
        <div style="width:40px; height:40px; background-color : red;" onclick="$('#formNextEvents').submit();">
        </div>
        <div id="gallery">
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
          lorem ipsum<br/>
        </div>
    </div>
    <footer>
      <div id='menuFooter'>
      <ul>
         <li><a href='#'><span>About</span></a></li>
         <li><a href='#'><span>Help</span></a></li>
         <li><a href="../View/Contact_us.view.php"><span>Contact us</span></a></li>
      </ul>
    </footer>
  </body>
  <script>

  </script>
</html>
