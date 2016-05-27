<?php

include('Contact.class.php');
    /**
     * Un Arti ste est un type de personne -->Un Artiste herite des attribut de Contact
     * attributs : nom, email ,telephone
     */

    class Artiste extends Personne
    {
//      public $nomG; //nom du groupe (facultatif)
//      public $description; // la description de l'artiste
//      public $style; //style musical
//      public $autre; // champs autre
//      public $ajoutG; // ajout groupe

<<<<<<< HEAD
        private $prenomAr; /* prenom de l'artiste */
        private $dateNaissAr;
        private $roleAr; /* role de l'artiste */
        private $adresseAr; /* adresse de l'artiste */
        private $descriptionAr; //description courte de l'artiste

      public function __toString() {
        return parent::__toString() . " "
              .$this->prenomAr() . " "
              .$this->dateNaissAr() . " "
              .$this->roleAr() . " "
              .$this->adresseAr() . " "
              .$this->descriptionAr() . " ";
=======
        public $idAr;  //Id  de l'artiste
        public $prenomAr; /* prenom de l'artiste */
        public $roleAr; /* role de l'artiste */
        public $adresseAr; /* adresse de l'artiste */
        public $descriptionAr; //description courte de l'artiste

      public function __toString() {
        return $this->getIdAr() . " "
              .$this->getPrenomAr() . " "
              .$this->getRoleAr() . " "
              .$this->getAdresseAr() . " "
              .$this->getDescriptionAr() . " ". parent::__toString();
>>>>>>> 3192434308ce6f8f18bc75c411bd5ebd6d166a1d
      }
      }

      // Fonctions getter
    function prenomAr() {
      return $this->prenomAr;
    }
    function dateNaissAr() {
      return $this->dateNaissAr;
    }
    function roleAr() {
      return $this->roleAr;
    }
    function adresseAr() {
      return $this->adresseAr;
    }
    function descriptionAr() {
      return $this->descriptionAr;
    }

    }

 ?>
