<?php


    /**
     *
     */
    class Calendrier extends Evenement
    {
      public $logo; // logo de l'evenement

      function __toString() {
        return $this->logo() . " ";
      }
      function logo() {
        return $this->logo;
      }
    }





 ?>
