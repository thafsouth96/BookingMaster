
<div>

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
