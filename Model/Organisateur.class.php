<?php

    class organisateur {
        public $idO;  //Id  de l'organisateur
        public $idE;  //Id de l'evenement

        // Fonctions getter
       function getIdO() {
         return $this->idO;
       }
       function getIdE() {
         return $this->idE;
       }

       function __toString() {
         return $this->getIdO() . " "
               .$this->getIdE() . " ";
       }
  }

  ?>
