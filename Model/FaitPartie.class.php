<?php
    // Un contact
    class faitPartie {
        public $idAr;  //Id  de l'artiste
        public $idG;  //Id du groupe

        function __toString() {
          return $this->getIdAr() . " "
                .$this->getIdG() . " ";
        }
        // Fonctions getter
       function getIdAr() {
         return $this->idAr;
       }
       function getIdG() {
         return $this->idG;
       }

  }

  ?>
