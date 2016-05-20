<?php

    class GroupeC {
        public $idB;  //Id du groupe
        public $nomGM; /* nom du groupe */
        public $descriptionGM; /* description longue du groupe */

        function __toString() {
          return $this->getIdB() . " "
                .$this->getNomGM() . " "
                .$this->getDescriptionGM() . " ";

        }
          // Fonctions getter
       function getIdGB() {
         return $this->idGB;
       }
       function getNomGM() {
         return $this->nomGM;
       }
       function getDescriptionGM() {
         return $this->descriptionGM;
       }

  }

?>
