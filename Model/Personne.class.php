<?php

      /**
       *
       */
      class Personne
      {
        protected $idPers;
        protected $nom; // nom du Contact
        protected $email; // email du Contact
        protected $telephone; // telephone du Contact


        public function __toString() {
          return $this->idPers() . " "
                .$this->nom() . " "
                .$this->email() . " "
                .$this->telephone() . " ";
        }
        public function idPers() {
          return $this->idPers;
        }

        public function nom() {
          return $this->nom;
        }
        public function email() {
          return $this->email;
        }
        public function telephone(){
          return $this->telephone;
        }
      }


 ?>
