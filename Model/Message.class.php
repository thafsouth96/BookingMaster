<?php
    // Un booker
    class Booker {
      public $idExpediteur;  /* id de l'expediteur */
      public $idDestinateur; /* id de destinateur */
      public $dateEnvoi;/* date d'envoi */
      public $objet; /* objet du mail*/
      public $message; /* message du mail*/
      public $EstBrouillon;  /* mail brouillon */
      public $ExpDelete; /**/
      public $DestDelete;/**/

      function __toString() {
        return $this->getIdExpediteur() . " "
              .$this->getIdDestinateur() . " "
              .$this->getDateEnvoi() . " "
              .$this->getObjet() . " "
              .$this->getMessage() . " "
              .$this->getEstBrouillon() . " "
              .$this->getExpDelete() . " "
              .$this->getDesDelete() . " ";
      }
       // Fonctions getter
       function getIdExpedinateur() {
         return $this->idExpedinateur;
       }
       function getIdDestinateur() {
         return $this->idDestinataire;
       }
       function getDateEnvoi() {
         return $this->dateEnvoi;
       }
       function getObjet() {
         return $this->objet;
       }
       function getMessage() {
         return $this->message;
       }
       function getEstBrouillon() {
         return $this->EstBrouillon;
       }
       function getExpDelete() {
         return $this->ExpDelete;
       }
       function getDesDelete() {
         return $this->DestDelete;
       }


}
