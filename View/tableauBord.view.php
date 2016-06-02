<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/tableauBord.css">


    <title>BookingMaster</title>

  </head>


<body>
  <?php
      include_once("../View/barre_principale.view.html");
  ?>
  
	  <div id="tableauBord">
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
			  <div id=Calendar style="width:238px;top:-2px;" align="left"></div>
			  </body>
		  </div>

		  <div id = "messagerie">
			<h2>Messagerie</h2>
			<table>
        <tr id = "enteteMessagerie">
          <td>Boite de réception</td><td>Messages envoyés</td><td>Brouillons</td>
        </tr>
        <tr id = "libelleMessagerie">
          <td>Expediteur</td><td>Objet</td>
        </tr>
        <?php
            global $messagesRecus;
            global $Booker1;
            foreach ($messagesRecus as $value){
              echo '<tr>';
                  echo '<td>', $value['expediteur'], '</td>', '<td>', $value['objet'], '</td>';
              echo '</tr>';
            }
            //include('../Controller/mailbox-recu.ctrl.php');
        ?>



			</table>
		  </div>

		  <div id = "notes">
			<h2>Notes</h2>
		  </div>

		</div>
	</body>

</html>
