<?php


    /**
     *
     */
    class Calendrier extends Evenement
    {
      public $logo; // logo de l'evenement

      function __toString() {
        return $this->getLogo() . " ";
      }
      function getLogo() {
        return $this->logo;
      }
    }





 ?>
