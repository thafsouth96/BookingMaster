<?php

include('Contact.class.php');
    /**
     * Un Arti ste est un type de personne -->Un Artiste herite des attribut de Contact
     * attributs : nom, email ,telephone
     */

    class Artiste extends Contact
    {
//      public $nomG; //nom du groupe (facultatif)
//      public $description; // la description de l'artiste
//      public $style; //style musical
//      public $autre; // champs autre
//      public $ajoutG; // ajout groupe

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
      }
      }

      // Fonctions getter
    function getIdAr() {
      return $this->idAr;
    }
    function getNomAr() {
      return $this->nomAr;
    }
    function getPrenomAr() {
      return $this->prenomAr;
    }
    function getRoleAr() {
      return $this->roleAr;
    }
    function getTelephoneAr() {
      return $this->telephoneAr;
    }
    function getAdresseAr() {
      return $this->adresseAr;
    }
    function getEmailAr() {
      return $this->emailAr;
    }
    function getDescriptionAr() {
      return $this->descriptionAr;
    }

    }

 ?>
