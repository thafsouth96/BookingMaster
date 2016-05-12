<?php

    class participeArtiste {
        public $idAr;  //Id  de l'artiste
        public $idE;  //Id de l'evenement

        function __toString() {
          return $this->getIdAr() . " "
                .$this->getIdE() . " ";
        }
        // Fonctions getter
       function getIdAr() {
         return $this->idAr;
       }
       function getIdE() {
         return $this->idE;
       }
  }

  ?>
