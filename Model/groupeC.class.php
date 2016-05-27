<?php

    class GroupeC {
        public $idGC;  //Id du groupe
        public $nomGC; /* nom du groupe */
        public $descriptionGC; /* description longue du groupe */

        function __toString() {
          return $this->idGC() . " "
                .$this->nomGC() . " "
                .$this->descriptionGC() . " ";

        }
          // Fonctions getter
       function idGC() {
         return $this->idGB;
       }
       function nomGC() {
         return $this->nomGC;
       }
       function descriptionGC() {
         return $this->descriptionGC;
       }

  }

?>
