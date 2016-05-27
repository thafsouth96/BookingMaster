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
      private $idE; // id de l'evenement
      private $libelleE; // nom de l'evenement
      private $dateE;  //Date de l'evenement
      private $lieuE;  //Lieu de l'evenement

      //fonction getter
    function idE() {
       return $this->idE;
     }
     function libelleE() {
       return $this->libelleE;
     }
     function dateE() {
       return $this->dateE;
     }
     function lieuE() {
       return $this->lieuE;
     }

    /*function __toString() {
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
    }*/

    }


 ?>
