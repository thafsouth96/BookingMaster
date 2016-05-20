<?php

    class organisateur {
        public $idO;  //Id  de l'organisateur
        public $nomO;  // nom de l'organisateur
        public $emailO; // email de l'organisateur
        public $telephoneO ; // tel de l'organisateur
        // Fonctions getter
       function getIdO() {
         return $this->idO;
       }
       function getNomO() {
         return $this->nomO;
       }
       function getEmailO() {
         return $this->getEmailO;
       }
       function getTelephoneO() {
         return $this->telephoneO;
       }

       function __toString() {
         return $this->getIdO() . " "
               .$this->getNomO() . " "
               .$this->getEmailO() . " "
               .$this->getTelephoneO();
       }
  }

  ?>
