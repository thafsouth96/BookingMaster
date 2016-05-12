<?php

    require_once("../model/Categorie.class.php");
    require_once("../model/Article.class.php");

    global $ref;
    global $libelle;
    global $prix;
    global $adresse_ip;
    global $id_serveur;

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
       
      }
    $dao = new DAO(); //construction de l'objet $dao
    //var_dump($dao);


    ?>
