<?php
    // Un booker
    class Booker {
      public $idB;  /* identifiant pour + facilité si gestion bookers */
      public $nomB; /* nom du booker */
      public $infoB;/* informations sur le booker */
      public $mdp;  /* mot de passe du booker pour se log(taille minimum de 5 caractères) */

      function __toString() {
        return $this->getIdB() . " "
              .$this->getNomB() . " "
              .$this->getInfoB() . " "
              .$this->getMdp() . " ";
      }
       // Fonctions getter
       function getIdB() {
         return $this->idB;
       }
       function getNomB() {
         return $this->nomB;
       }
       function getInfoB() {
         return $this->infoB;
       }
       function getMdp() {
         return $this->mdp;
       }
