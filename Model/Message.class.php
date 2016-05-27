<?php
    // Un booker
    class Message {
      private $idExpediteur;  /* id de l'expediteur */
      private $idDestinataire; /* id de destinataire */
      private $dateEnvoi;/* date d'envoi */
      private $objet; /* objet du mail*/
      private $message; /* message du mail*/
      private $estBrouillon;  /* mail brouillon */
      private $expDelete; /**/
      private $destDelete;/**/

      function __toString() {
        return $this->idExpediteur() . " "
              .$this->idDestinataire() . " "
              .$this->dateEnvoi() . " "
              .$this->objet() . " "
              .$this->message() . " "
              .$this->estBrouillon() . " "
              .$this->expDelete() . " "
              .$this->destDelete() . " ";
      }
       // Fonctions ter
       function idExpedinateur() {
         return $this->idExpedinateur;
       }
       function idDestinataire() {
         return $this->idDestinataire;
       }
       function dateEnvoi() {
         return $this->dateEnvoi;
       }
       function objet() {
         return $this->objet;
       }
       function message() {
         return $this->message;
       }
       function estBrouillon() {
         return $this->estBrouillon;
       }
       function expDelete() {
         return $this->expDelete;
       }
       function destDelete() {
         return $this->destDelete;
       }


}
