<?php

    require_once("../model/Categorie.class.php");
    require_once("../model/Article.class.php");

    global $ref;
    global $libelle;
    global $prix;
    global $adresse_ip;
    global $id_serveur;

    //construction de l'objet $dao
    $dao = new DAO();

    // Le Data Access Object
    // Il représente la base de donnée
    class DAO {
        // L'objet local PDO de la base de donnée
        public $db;
        // Le type, le chemin et le nom de la base de donnée
        private $database = 'sqlite:../data/db/'; // a completer
        // Constructeur chargé d'ouvrir la BD
        function __construct() {
            try {
                $this->db = new PDO($this->database);
                var_dump($this->db);
            } catch (Exception $e) {
                die ("Error : $e");
            }
        }
        //affiche tous les artistes/groupes
        public function afficheAG(){
          $req = $this->db->query("SELECT * FROM contact where fonction="musicien"");
         return $req->fetchAll(PDO::FETCH_CLASS, "Contact");
        }

        // ajoute un contact à la base de données
        function ajoutC($fonc,$nom,$email,$tel,$nomG,$style,$autre,$groupe,$des) {
         $req = "INSERT INTO contact VALUES $fonc,$nom,$email,$tel,$nomG,$style,$autre,$groupe,$des";
         $req2 = $this->db->prepare($req);
         $req2->execute();
         return  $req2->fetchAll(PDO::FETCH_CLASS,"Contact");
       }


       /***Fonction de connexion ****/

       /****Retourne id du booker à partir de son mail******/
        function getMailBooker($mail){
          $rquete1 = "SELECT idB FROM booker WHERE mail = '$mail'";
          //var_dump($_POST['pseudo']);
          $rs =$this->db->query($rquete1);
          $rw = $rs->fetchAll(PDO::FETCH_CLASS,'Booker');
          return $rw[0] ;

        }
        /** Retourne l'id du booker à partir du mot de passe entré ***/
        function getPasswordBooker($mdp) {
          $rquete2 = "SELECT idB FROM  WHERE password='$mdp'";
          $rs2 = $this->db->query($rquete2);
          $rw2 = $rs2->fetchAll(PDO::FETCH_CLASS,'Booker');
          return $rw2[0] ;
        }


        function inscription($nom,$prenom,$dateNaiss,$mail,$mdp) {
            $req = "INSERT INTO personne values ((SELECT count(*) + 1 from booker),$nom,$prenom,$dateNaiss,$mail,$mdp)" ;
            $sth=$this->db->query($req);
            $result = $sth->fetchAll(PDO::FETCH_CLASS,'Booker');
            return $result[0];

        }


      }

    //var_dump($dao);


    ?>
