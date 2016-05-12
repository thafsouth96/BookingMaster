<?php
    // Un artiste
    class Groupe {
        public $idG;  //Id du groupe
        public $nomG; /* nom du groupe */
        public $descriptionG; /* description longue du groupe */
        public $lienG; /* liens vers Fb/Soundcloud/Twitter/playlist/ etc...*/
        public $videoG; /* vidéo youtube d'un son du groupe */
        public $imageG; /* deux images pour les groupes */

        function __toString() {
          return $this->getIdG() . " "
                .$this->getNomG() . " "
                .$this->getDescriptionG() . " "
                .$this->getLienG() . " "
                .$this->getVideoG() . " "
                .$this->getImageG() . " ";
        }
          // Fonctions getter
       function getIdG() {
         return $this->idG;
       }
       function getNomG() {
         return $this->nomG;
       }
       function getDescriptionG() {
         return $this->descriptionG;
       }
       function getLienG() {
         return $this->lienG;
       }
       function getVideoG() {
         return $this->videoG;
       }
       function getImageG() {
         return $this->imageG;
       }
  }

?>
