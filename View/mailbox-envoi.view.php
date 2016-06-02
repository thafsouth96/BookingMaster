<div id = "DivMessageEnvoye" >
    <?php
    global $mailEnvoi;


  foreach ($mailEnvoi as $value) {
      echo "<div class='message'>";
      echo "<input type='checkbox' />";
      echo "<span class='sender'>",$value['destinataire'], "</span>";
      echo"<span class='date'>",$value['dateEnvoi'], "</span>";
      echo"<span class='title'>",$value['objet'], "</span>";
      echo"</div>";
            }
      
        ?>

</div>
