<?php

    class paye {
        public $idO;  //Id de l'organisateur
        public $idAr;  //Id  de l'artiste
        public $montant;  //Montant du paiement
        public $dateP;  //Date du paiement

        function __toString() {
          return $this->getIdO() . " "
                .$this->getIdAr() . " "
                .$this->getMontant() . " "
                .$this->getDateP() . " ";
        }
        // Fonctions getter
       function getIdO() {
         return $this->idO;
       }
       function getIdAr() {
         return $this->idAr;
       }
       function getMontant() {
         return $this->montant;
       }
       function getDateP() {
         return $this->dateP;
       }


  }

  ?>
