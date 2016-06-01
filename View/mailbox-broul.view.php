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
    <a href="../View/mailbox.view.php">Nouveau</a>
    <a href="../Controller/mailbox-recu.ctrl.php">Boite de réception</a>
    <a href="../Controller/mailbox-inde.ctrl.php">Indésirables</a>
    <a href="../Controller/mailbox-envoi.ctrl.php">Envoyé</a>
    <a href="../Controller/mailbox-broul.ctrl.php">Brouillons</a>
    <a href="../View/mailbox-corbeille.view.php">Corbeille</a>
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

          <?php
      //    global $mailBrouillon;

      //  var_dump($mailBrouillon);
      //  foreach ($mailBrouillon as $value) {
      //    echo "<div class='message'>";
      //    echo "<input type='checkbox' />";
      //      echo "<span class='sender'>$value->idExpediteur()</span>";
      //      echo"<span class='date'>$value->dateEnvoi</span>";
      //      echo"<span class='title'>$value->objet</span>";
      //    echo"</div>";


        //          }
//
  //              ?>
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
