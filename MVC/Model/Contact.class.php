<?php

      /**
       *
       */
      class Contact
      {
        public $fonction; // fonction du Contact
        public $nom; // nom du Contact
        public $email; // email du Contact
        public $telephone; // telephone du Contact
        
        public function __toString() {
          return $this->getFonction() . " "
                .$this->getNom() . " "
                .$this->getEmail() . " "
                .$this->getTelephone() . " ";
        }
        public function getFonction() {
          return $this->fonction;
        }
        public function getNom() {
          return $this->nom;
        }
        public function getEmail() {
          return $this->email;
        }
        public function getTelephone(){
          return $this->telephone;
        }
      }


 ?>
