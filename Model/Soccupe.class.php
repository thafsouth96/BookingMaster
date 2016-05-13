<?php
    
    class soccupe {
        public $idB;  //Id du booker
        public $idAr;  //Id  de l'artiste

        function __toString() {
          return $this->getIdB() . " "
                .$this->getIdAr() . " ";
        }
        // Fonctions getter
       function getIdB() {
         return $this->idB;
       }
       function getIdAr() {
         return $this->idAr;
       }


  }

  ?>
