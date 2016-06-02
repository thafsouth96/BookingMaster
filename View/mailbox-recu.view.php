<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/mailbox.css" media="screen" charset="utf-8">
    <script type="text/javascript" src="../lib/jQuery/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="../js/messagerie.js"></script>
    <title>Booking Messagerie</title>
  </head>



<body>
  <header>
    <h1>Messagerie</h1>
  </header>


<?php
include_once("../View/menuMessage.view.html") ;
?>
<div id=contentMsg >

    <?php
    global $mailRecu;
    var_dump($mailRecu);

  foreach ($mailRecu as $value) {
      echo "<div class='message'>";
      echo "<input type='checkbox' />";
      echo "<span class='sender'>",$value['expediteur'], "</span>";
      echo"<span class='date'>",$value['dateEnvoi'], "</span>";
      echo"<span class='title'>",$value['objet'], "</span>";
      echo"</div>";
    }

          ?>

    <!--<div class="message">
      <input type="checkbox" />
      <span class="sender">Black M</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Black M</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">113</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">BigBang</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">AfterSchool</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Sexion d'assault</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>-->

  </div>
</body>
</html>
