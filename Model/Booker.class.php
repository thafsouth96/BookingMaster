<?php
    // Un booker
    class Booker {
      public $idB;  /* identifiant pour + facilité si gestion bookers */
      public $nomB; /* nom du booker */
      public $dateNaissB;/* date de naissance sur le booker */
      public $mailB; /* mail du booker */
      public $mdp;  /* mot de passe du booker pour se log(taille minimum de 5 caractères) */

      function __toString() {
        return $this->getIdB() . " "
              .$this->getNomB() . " "
              .$this->getdateNaissB() . " "
              .$this->getmailB() . " "
              .$this->getMdp() . " ";
      }
       // Fonctions getter
       function getIdB() {
         return $this->idB;
       }
       function getNomB() {
         return $this->nomB;
       }
       function getdateNaissB() {
         return $this->dateNaissB;
       }
       function getmailB() {
         return $this->mailB;
       }
       function getMdp() {
         return $this->mdp;
       }
