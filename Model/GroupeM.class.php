<?php

    class GroupeM {
        public $idGM;  //Id du groupe
        public $nomGM; /* nom du groupe */
        public $descriptionGM; /* description longue du groupe */

        function __toString() {
          return $this->getIdGM() . " "
                .$this->getNomGM() . " "
                .$this->getDescriptionGM() . " ";

        }
          // Fonctions getter
       function getIdGM() {
         return $this->idGM;
       }
       function getNomGM() {
         return $this->nomGM;
       }
       function getDescriptionGM() {
         return $this->descriptionGM;
       }

  }

?>
