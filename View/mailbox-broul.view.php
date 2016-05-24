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
    <a href="#">Envoyé</a>
    <a href="mailbox-broul.view.php">Brouillons</a>
    <a href="#">Courbeille</a>
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
      <span class="title">Question</span>
    </div>
    <?php

  //          global $MailBroul;

  //            foreach ($MailBroul as $key => $value) {
  //                echo "<p>";
  //                echo $value;
  //                echo "</p>";
  //            }

          ?>
    <div class="message">
      <input type="checkbox" />
      <span class="sender">France Gall</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Psy</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Jet-li</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Jackie Chan</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Truc</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Machin</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

  </div>
</div>
</body>
</html>
