<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/tableauBord.css">
    <title>BookingMaster</title>
  </head>
  <div id = "barrePrincipale">
      <img id="menu" src="../data/icon/menu.png" alt="menu" width="40" height="40">
      <input id="recherche" name="search" type="text" placeholder="Rechercher" alt="Search"/>
      <div id="rechercheAvancee"> Recherche avancée</div>
      <a href="../Controller/tableauBord.ctrl.php"> <img id="home" src="../data/icon/home.png" alt="home" width="40"> </a>
      <img id="notifications" src="../data/icon/notifiOfficiel.png" alt="notification" width="40">
      <img id="messages" src="../data/icon/message-512.gif" alt="messagerie" width="40">

  </div>

  <div id = "calendrier">
      <h2>Calendrier</h2>
      <body onLoad="Defaults()">
          <script type="text/javascript" src="../Controller/calendrier.ctrl.js"></script>
          <link rel="stylesheet" href="../css/calendrier.css" media="screen" charset="utf-8">
      <form name="when">
      <tr>
         <td><input type="button" value="<-- Last" onClick="Skip('-')"></td>
         <td> </td>
         <td><select name="month" onChange="On_Month()">

      <script language="JavaScript1.2">
      if (ie4||ns6){
         for (j=0;j<Month_Label.length;j++) {
            document.writeln('<option value=' + j + '>' + Month_Label[j]);
         }
      }
      </script>

             </select>
         </td>
         <td><input type="text" name="year" size=4 maxlength=4 onKeyPress="return Check_Nums()" onKeyUp="On_Year()"></td>
         <td> </td>
         <td><input type="button" value="Next -->" onClick="Skip('+')"></td>
      </tr></form>
      <div id=Calendar style="position:relative;width:238px;top:-2px;" align="left"></div>
      </body>
  </div>

  <div id = "messagerie">
    <h2>Messagerie</h2>
    <table>
      <tr>
        <td>Boite de réception</td><td>Messages envoyés</td><td>Brouillons</td>
      </tr>
    </table>
  </div>

  <div id = "notes">
    <h2>Notes</h2>
  </div>


</html>
