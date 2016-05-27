<?php

    class GroupeM extends Personne {
        private $descriptionGM; /* description du groupe */
        private $mdp;
        private $styleMusical;

        function __toString() {
          return parent::__toString() . " "
                .$this->getDescriptionGM() . " ";

        }
          // Fonctions getter
       function descriptionGM() {
         return $this->descriptionGM;
       }

       function mdp() {
         return $this->mdp;
       }

       function styleMusical() {
         return $this->styleMusical;
       }

  }

?>
