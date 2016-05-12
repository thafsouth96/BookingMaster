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
        public $nomAr;  //nom de l'artiste
        public $prenomAr; /* prenom de l'artiste */
        public $roleAr; /* role de l'artiste */
        public $telephoneAr; /* telephone de l'artiste */
        public $adresseAr; /* adresse de l'artiste */
        public $emailAr; /*email de l'artiste */
        public $descriptionAr; //description courte de l'artiste
        public $lienAr; // liens de l'artiste
        public $videoAr; // video youtube d'un son de l'artiste
        public $imageAr; // deux images pour les artistes
      public function __toString() {
        return $this->getIdAr() . " "
              .$this->getNomAr() . " "
              .$this->getPrenomAr() . " "
              .$this->getRoleAr() . " "
              .$this->getTelephoneAr() . " "
              .$this->getAdresseAr() . " "
              .$this->getEmailAr() . " "
              .$this->getDescriptionAr() . " "
              .$this->getLienAr() . " "
              .$this->getVideoAr() . " "
              .$this->getImageAr() . " ";
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
    function getLienAr() {
      return $this->lienAr;
    }
    function getVideoAr() {
      return $this->videoAr;
    }
    function getImageAr() {
      return $this->imageAr;
    }
    }

 ?>
