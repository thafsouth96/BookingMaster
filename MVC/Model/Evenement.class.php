<?php

    /**
     *
     */
    class Evenement
    {
      //public $jour; // jour d'un evenement
      //public $mois; // mois de l'evenement
      //public $annee; // année de l'evenement
      //public $heure_C; // heure de commencement
      //public $heure_F; // heure de fin
////////////////
///
      public $idE; // id de l'evenement
      public $nomE; // nom de l'evenement
      public $dateE;  //Date de l'evenement
      public $lieuE;  //Lieu de l'evenement
      public $lienBE; //Lien pour achat
      public $infoE; //Infos sur le groupe
      public $imageE; // image de l'évènement

      //fonction getter
    /*function getIdE() {
       return $this->idE;
     }
     function getNomE() {
       return $this->nomE;
     }
     function getDateE() {
       return $this->dateE;
     }
     function getLieuE() {
       return $this->lieuE;
     }
     function getLienBE() {
       return $this->lienBE;
     }
     function getInfoE() {
       return $this->infoE;
     }
     function getImageE() {
       return $this->imageE;
     }*/
    function __toString() {
      return $this->getJour() . " "
            .$this->getMois() . " "
            .$this->getAnnee() . " "
            .$this->getHeure_C() . " "
            .$this->getHeure_F() . " ";
    }
    function getJour() {
      return $this->jour;
    }
    function getMois() {
      return $this->mois;
    }
    function getAnnee() {
      return $this->annee;
    }
    function getHeure_C() {
      return $this->heure_C;
    }
    function getHeure_F() {
      return $this->heure_F;
    }

    }


 ?>
