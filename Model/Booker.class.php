<?php

include('Personne.class.php');
    // Un booker
    class Booker extends Personne{
      private $prenomB; /* nom du booker */
      private $dateNaissB;/* date de naissance sur le booker */
      private $mdp;  /* mot de passe du booker pour se log(taille minimum de 8 caractères) */

      function __toString() {
        return parent::__toString() . " "
              .$this->prenomB() . " "
              .$this->dateNaissB() . " "
              .$this->mdp() . " ";
      }
       // Fonctions getter
       function prenomB() {
         return $this->prenomB;
       }
       function dateNaissB() {
         return $this->dateNaissB;
       }
       function mdp() {
         return $this->mdp;
       }

}
