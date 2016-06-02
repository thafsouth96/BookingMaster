<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="../css/mailbox.css" media="screen" charset="utf-8">
    <title>bookMaster</title>
  </head>
  <body>

<header>
  <h1>Messagerie</h1>
</header>

<div class="mailbox">
  <div class="nav">
    <a href="../View/mailbox.view.php">Nouveau</a>
    <a href="../Controller/mailbox-recu.ctrl.php">Boite de réception</a>
    <a href="../Controller/mailbox-inde.ctrl.php">Indésirables</a>
    <a href="../Controller/mailbox-envoi.ctrl.php">Envoyé</a>
    <a href="../Controller/mailbox-broul.ctrl.php">Brouillons</a>
    <a href="../Controller/mailbox-corbeille.ctrl.php">Corbeille</a>
  </div>
  <div class="messages">
    <input name="search" placeholder="search" />
    <div class="actions-dropdown">
      <label>actions <span>▼</span></label>
      <ul>
        <li>Ranger</li>
        <li>Déplacer vers
          <div class="ssMenu">
            <ul>
              <li>Indésirables</li>
              <li>Corbeille</li>
            </ul>
          </div>
        </li>
        <li>Supprimer</li>
      </ul>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Justin </span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>
    <?php

  //          global $mailInde;

  //            foreach ($mailInde as $key => $value) {
  //                echo "<p>";
  //                echo $value;
  //                echo "</p>";
  //            }

          ?>
    <div class="message">
      <input type="checkbox" />
      <span class="sender">Renée</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Jacque</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Céline Dion</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Lorie</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Renaud</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

    <div class="message">
      <input type="checkbox" />
      <span class="sender">Kev Adams</span>
      <span class="date">aujourd'hui</span>
      <span class="title">Question</span>
    </div>

  </div>
</div>
</body>
</html>
