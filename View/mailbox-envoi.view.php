<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/mailbox.css" media="screen" charset="utf-8">
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
    <a href="mailbox-inde.view.php">Indésirables</a>
    <a href="mailbox-envoi.view.php">Envoyé</a>
    <a href="mailbox-broul.view.php">Brouillons</a>
    <a href="mailbox-corbeille.view.php">Corbeille</a>
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

    <div class="message">
      <input type="checkbox" />
      <span class="sender">T-Ara</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Reponse</span>
    </div>
    <?php

  //          global $MailEnvoi;

  //            foreach ($MailEnvoi as $key => $value) {
  //                echo "<p>";
  //                echo $value;
  //                echo "</p>";
  //            }

          ?>
    <div class="message">
      <input type="checkbox" />
      <span class="sender">Black M</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Reponse</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Black M</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Reponse</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">113</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Reponse</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">BigBang</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Reponse</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">AfterSchool</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Reponse</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Sexion d'assault</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Reponse</span>
    </div>

  </div>
</div>
</body>
</html>
