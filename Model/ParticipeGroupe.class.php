<?php
    // Un contact
    class participeGroupe {
        public $idG;  //Id  du groupe
        public $idE;  //Id de l'evenement

        function __toString() {
          return $this->getIdG() . " "
                .$this->getIdE() . " ";
        }
        // Fonctions getter
       function getIdG() {
         return $this->idG;
       }
       function getIdE() {
         return $this->idE;
       }


  }

  ?>
