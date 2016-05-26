<?php
include('Contact.class.php');

    class organisateur extends Contact {
        public $idO;  //Id  de l'organisateur
        // Fonctions getter
       function getIdO() {
         return $this->idO;
       }


       function __toString() {
         return $this->getIdO(). parent::__toString();
       }
  }

  ?>
