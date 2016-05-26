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
        function getLogin(){
          $rquete1 = "SELECT * FROM personne WHERE pseudo = '{$_POST['login']}'";
          //var_dump($_POST['pseudo']);
          $rs =$this->db->query($rquete1);
          $rw = $rs->fetchAll(PDO::FETCH_CLASS,'Personne');
          return $rw[0] ;

        }
        function getPassword() {
          $rquete2 = "SELECT * FROM personne WHERE password='{$_POST['password']}'";
          $rs2 = $this->db->query($rquete2);
          $rw2 = $rs2->fetchAll(PDO::FETCH_CLASS,'Personne');
          return $rw2[0] ;
        }


        function inscription($pseudo,$psw) {
            $req = "INSERT INTO personne values ((SELECT count(*) + 1 from personne),$_POST['Pseudo'],$_POST['mot_de_passe'])" ;
            $sth=$this->db->query($req);
            $result = $sth->fetchAll(PDO::FETCH_CLASS,'Personne');
            var_dump($result);
            return $result[0];

          }


      }

    //var_dump($dao);

/*--------------------------------GESTION DES EVENEMENTS-------------------------------------*/

	public function select_instance($idE,$nomE,$dateE,$lieuE) {S
		$query = "SELECT * FROM evenement";
		$query .= " WHERE idE='".$idE."' AND nomE='".$nomE."'";
		$query .= " AND dateE='".$dateE."' AND lieuE='".$lieuE."'";
	
		$stmt = $this->db->prepare($query);

    	$stmt->execute();
    
    	$result = $stmt->fetch(PDO::FETCH_BOTH);
  
    	$instance = new evenement($result[0],$result[1],$result[2],$result[3]);
		return $instance;
	}

	public function creerEvenement($idE,$nomE,$dateE,$lieuE){
		$query = "INSERT INTO evenements VALUES($idE,$nomE,$dateE,$lieuE)";
		try{
		$req = $this->db->prepare($query);
		$req->execute();
    	} catch (PDOException $e) {
		echo 'Echec insertion évènement';
		return false;
		}
	
        return  $req->fetchAll(PDO::FETCH_CLASS,"evenement");
	}

	public function supprimerEvenement($idE,$nomE,$dateE,$lieuE){	
		$query = "DELETE FROM evenement";
		$query .= " WHERE idE='".$idE."' AND nomE='".$nomE."'";
		$query .= " AND dateE='".$dateE."' AND lieuE='".$lieuE."'";
		try{
		$stmt = $this->db->prepare($query);
    	$result	=$stmt->execute();
    		} catch (PDOException $e) {
    		//echo $e->getMessage();
   	 	echo 'Echec suppression évènement';
    	return false;
		}
		return $result;
	}

	public function modifierNomE($idE){	
		$query = "UPDATE evenement ";
		$query .= " SET nomE='".$nomE."' WHERE idE='".$idE."'";
		try{
		$stmt = $this->db->prepare($query);
    	$result	=$stmt->execute();
    		} catch (PDOException $e) {
    		//echo $e->getMessage();
   	 	echo 'Echec modification nom évènement';
    	return false;
		}
		return $result;
	}

	public function modifierDateE($idE){	
		$query = "UPDATE evenement";
		$query .= " SET dateE='".$dateE."' WHERE idE='".$idE."'";
		try{
		$stmt = $this->db->prepare($query);
    	$result	=$stmt->execute();
    		} catch (PDOException $e) {
    		//echo $e->getMessage();
   	 	echo 'Echec modification date évènement';
    	return false;
		}
		return $result;
	}

	public function modifierLieuE($idE){	
		$query = "UPDATE evenement";
		$query .= " SET lieuE='".$lieuE."' WHERE idE='".$idE."'";
		try{
		$stmt = $this->db->prepare($query);
    	$result	=$stmt->execute();
    		} catch (PDOException $e) {
    		//echo $e->getMessage();
   	 	echo 'Echec  lieu évènement';
    	return false;
		}
		return $result;
	}

	public function ajouterOrganisateurEv($idE,$idO){
		$query = "INSERT INTO organisateur_evenement VALUES($idO,$idE) WHERE idE='".$idE."'"; 
		try{
		$req = $this->db->prepare($query);
		$req->execute();
    	} catch (PDOException $e) {
		echo 'Echec insertion évènement';
		return false;
		}
        return  $req->fetchAll(PDO::FETCH_CLASS,"evenement_evenement");
	}

	public function supprimerIdO($idE,$idO){	
		$query = "UPDATE organisateur_evenement";
		$query .= "SET idO='".$idO."' WHERE idE='".$idE."'";
		try{
		$stmt = $this->db->prepare($query);
    	$result	=$stmt->execute();
    		} catch (PDOException $e) {
    		//echo $e->getMessage();
   	 	echo 'Echec suppression organisateur évènement';
    	return false;
		}
		return $result;
	}

/*--------------------------------GESTION DE RECHERCHE D'ARTISTESs-------------------------------------*/

	public function rechercheArtisteNom($nomArtiste){
		$query = "SELECT * FROM artiste WHERE nomAr=$nomArtiste";
		try {
		$req = $this->db->query($req);
		$result=$req->fetchAll(PDO::FETCH_CLASS,'artiste');
		} catch (PDOException $e) {
			die("PDO Error : ".$e->getMessage());
		} 
			return $result;
	}

	public function rechercheArtistePrenom($prenomArtiste){
		$query = "SELECT * FROM artiste WHERE prenomAr=$prenomArtiste";
		try {
		$req = $this->db->query($req);
		$result=$req->fetchAll(PDO::FETCH_CLASS,'artiste');
		} catch (PDOException $e) {
			die("PDO Error : ".$e->getMessage());
		} 
			return $result;
	}

	public function rechercheArtisteAdresse($adresseArtiste){
		$query = "SELECT * FROM artiste WHERE adresseAr LIKE '%$adresseArtiste%' ";
		try {
		$req = $this->db->query($req);
		$result=$req->fetchAll(PDO::FETCH_CLASS,'artiste');
		} catch (PDOException $e) {
			die("PDO Error : ".$e->getMessage());
		} 
			return $result;
	}

	public function rechercheArtisteStyle($styleArtiste){
		$query = "SELECT * FROM artiste WHERE styleAr=$styleArtiste";
		try {
		$req = $this->db->query($req);
		$result=$req->fetchAll(PDO::FETCH_CLASS,'artiste');
		} catch (PDOException $e) {
			die("PDO Error : ".$e->getMessage());
		} 
			return $result;
	}


    ?>
