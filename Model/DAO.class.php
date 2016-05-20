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

/*--------------------------------GESTION DES EVENEMENTS-------------------------------------*/

	public function select_instance($idE,$nomE,$dateE,$lieuE,$lienBE,$infoE,$SimageE) {S
		$query = "SELECT * FROM evenement";
		$query .= " WHERE idE='".$idE."' AND nomE='".$nomE."'";
		$query .= " AND dateE='".$dateE."' AND lienBE='".$lienBE."' AND infoE='".$infoE."'";
		$query .= " AND imageE='".$imageE."'";
	
		$stmt = $this->dbh->prepare($query);

    	$stmt->execute();
    
    	$result = $stmt->fetch(PDO::FETCH_BOTH);
  
    	$instance = new evenement($result[0],$result[1],$result[2],$result[3],$result[4],$result[5],$result[6]);
		return $instance;
	}

	public function creerEvenement($idE,$nomE,$dateE,$lieuE,$lienBE,$infoE,$imageE){
		$query = "INSERT INTO evenements VALUES $idE,$nomE,$dateE,$lieuE,$lienBE,$infoE,$imageE";
		try{
		$req = $this->db->prepare($query);
		$req->execute();
    	} catch (PDOException $e) {
		echo 'Echec insertion évènement';
		return false;
		}
	
        return  $req->fetchAll(PDO::FETCH_CLASS,"evenement");
	}

	public function supprimerEvenement($idE,$nomE,$dateE,$lieuE,$lienBE,$infoE,$imageE){	
		$query = "DELETE FROM evenement";
		$query .= " WHERE idE='".$idE."' AND nomE='".$nomE."'";
		$query .= " AND dateE='".$dateE."' AND lienBE='".$lienBE."' AND infoE='".$infoE."'";
		$query .= " AND imageE='".$imageE."'";
		try{
		$stmt = $this->dbh->prepare($query);
    	$result	=$stmt->execute();
    		} catch (PDOException $e) {
    		//echo $e->getMessage();
   	 	echo 'Echec suppression évènement';
    	return false;
		}
		return $result;
	}

	public function modifierNomE($idE){	
		$query = "UPDATE ".$this->table;
		$query .= " SET nomE='".$nomE."' WHERE idE='".$idE."'";
		try{
		$stmt = $this->dbh->prepare($query);
    	$result	=$stmt->execute();
    		} catch (PDOException $e) {
    		//echo $e->getMessage();
   	 	echo 'Echec suppression évènement';
    	return false;
		}
		return $result;
	}

	public function modifierDateE($idE){	
		$query = "UPDATE ".$this->table;
		$query .= " SET dateE='".$dateE."' WHERE idE='".$idE."'";
		try{
		$stmt = $this->dbh->prepare($query);
    	$result	=$stmt->execute();
    		} catch (PDOException $e) {
    		//echo $e->getMessage();
   	 	echo 'Echec suppression évènement';
    	return false;
		}
		return $result;
	}

	public function modifierLienE($idE){	
		$query = "UPDATE ".$this->table;
		$query .= " SET lienBE='".$lienBE."' WHERE idE='".$idE."'";
		try{
		$stmt = $this->dbh->prepare($query);
    	$result	=$stmt->execute();
    		} catch (PDOException $e) {
    		//echo $e->getMessage();
   	 	echo 'Echec suppression évènement';
    	return false;
		}
		return $result;
	}

	public function modifierInfoE($idE){	
		$query = "UPDATE ".$this->table;
		$query .= " SET infoE='".$infoE."' WHERE idE='".$idE."'";
		try{
		$stmt = $this->dbh->prepare($query);
    	$result	=$stmt->execute();
    		} catch (PDOException $e) {
    		//echo $e->getMessage();
   	 	echo 'Echec suppression évènement';
    	return false;
		}
		return $result;
	}

	public function modifierimageE($idE){	
		$query = "UPDATE ".$this->table;
		$query .= " SET imageE='".$imageE."' WHERE idE='".$idE."'";
		try{
		$stmt = $this->dbh->prepare($query);
    	$result	=$stmt->execute();
    		} catch (PDOException $e) {
    		//echo $e->getMessage();
   	 	echo 'Echec suppression évènement';
    	return false;
		}
		return $result;
	}
    ?>
