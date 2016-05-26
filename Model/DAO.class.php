<?php


    //construction de l'objet $dao
    $dao = new DAO();

    // Le Data Access Object
    // Il représente la base de donnée
    class DAO {
        // L'objet local PDO de la base de donnée
        public $db;
        // Le type, le chemin et le nom de la base de donnée
        private $database = 'sqlite:../data/db/bookingmaster.db'; // a completer
        // Constructeur chargé d'ouvrir la BD
        function __construct() {
            try {
                $this->db = new PDO($this->database);
                //
              //  var_dump($this->db);
            } catch (Exception $e) {
                die ("Error : $e");
            }
        }
        //affiche tous les artistes/groupes
        public function afficheAG(){
          $req = $this->db->query("SELECT * FROM contact where fonction='musicien'");
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
          $rquete1 = "SELECT * FROM booker WHERE mailB = '$mail'";
          //var_dump($rquete1) ;
          $rs =$this->db->query($rquete1);
          $rw = $rs->fetchAll(PDO::FETCH_CLASS,'Booker');
          if($rw != NULL) {
          return $rw[0] ;
          }
          else return NULL ;
        }
        /** Retourne l'id du booker à partir du mot de passe entré ***/
        function getPasswordBooker($mdp) {
          $rquete2 = "SELECT * FROM booker WHERE mdp ='$mdp'";
          $rs2 = $this->db->query($rquete2);
          $rw2 = $rs2->fetchAll(PDO::FETCH_CLASS,'Booker');
          if($rw2 != NULL) {
          return $rw2[0] ;
          }
          else return NULL ;
        }

        /*function inscription($nom,$prenom,$dateNaiss,$mail,$mdp) {
            $req = "INSERT INTO personne values ((SELECT count(*) + 1 from booker),$nom,$prenom,$dateNaiss,$mail,$mdp)" ;
            $sth=$this->db->query($req);
            $result = $sth->fetchAll(PDO::FETCH_CLASS,'Booker');
            return $result;

        }

*/
      }

    //var_dump($dao);*/

/*--------------------------------GESTION DES EVENEMENTS-------------------------------------*/
<<<<<<< HEAD

	public function select_instance($idE,$nomE,$dateE,$lieuE) {S
		$query = "SELECT * FROM evenement";
		$query .= " WHERE idE='".$idE."' AND nomE='".$nomE."'";
		$query .= " AND dateE='".$dateE."' AND lieuE='".$lieuE."'";
	
		$stmt = $this->db->prepare($query);
=======
/*
  function select_instance($idE,$nomE,$dateE,$lieuE,$lienBE,$infoE,$SimageE) {
		$query = "SELECT * FROM evenements ";
		$query .= " WHERE idE='".$idE."' AND nomE='".$nomE."'";
		$query .= " AND dateE='".$dateE."' AND lienBE='".$lienBE."' AND infoE='".$infoE."'";
		$query .= " AND imageE='".$imageE."'";

		$stmt = $this->dbh->prepare($query);
>>>>>>> 3457a3160308cdb17f7bd64fc42239671426e45b

    	$stmt->execute();

    	$result = $stmt->fetch(PDO::FETCH_BOTH);
<<<<<<< HEAD
  
    	$instance = new evenement($result[0],$result[1],$result[2],$result[3]);
		return $instance;
	}

	public function creerEvenement($idE,$nomE,$dateE,$lieuE){
		$query = "INSERT INTO evenements VALUES($idE,$nomE,$dateE,$lieuE)";
=======

    	$instance = new evenement($result[0],$result[1],$result[2],$result[3],$result[4],$result[5],$result[6]);
		return $instance;
	}

 function creerEvenement($idE,$nomE,$dateE,$lieuE,$lienBE,$infoE,$imageE){
		$query = "INSERT INTO evenements VALUES $idE,$nomE,$dateE,$lieuE,$lienBE,$infoE,$imageE";
>>>>>>> 3457a3160308cdb17f7bd64fc42239671426e45b
		try{
		$req = $this->db->prepare($query);
		$req->execute();
    	} catch (PDOException $e) {
		echo 'Echec insertion évènement';
		return false;
		}

        return  $req->fetchAll(PDO::FETCH_CLASS,"evenement");
	}

<<<<<<< HEAD
	public function supprimerEvenement($idE,$nomE,$dateE,$lieuE){	
=======
 function supprimerEvenement($idE,$nomE,$dateE,$lieuE,$lienBE,$infoE,$imageE){
>>>>>>> 3457a3160308cdb17f7bd64fc42239671426e45b
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

<<<<<<< HEAD
	public function modifierNomE($idE){	
		$query = "UPDATE evenement ";
=======
function modifierNomE($idE){
		$query = "UPDATE ".$this->table;
>>>>>>> 3457a3160308cdb17f7bd64fc42239671426e45b
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

<<<<<<< HEAD
	public function modifierDateE($idE){	
		$query = "UPDATE evenement";
=======
 function modifierDateE($idE){
		$query = "UPDATE ".$this->table;
>>>>>>> 3457a3160308cdb17f7bd64fc42239671426e45b
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

<<<<<<< HEAD
	public function modifierLieuE($idE){	
		$query = "UPDATE evenement";
		$query .= " SET lieuE='".$lieuE."' WHERE idE='".$idE."'";
=======
  function modifierLienE($idE){
		$query = "UPDATE ".$this->table;
		$query .= " SET lienBE='".$lienBE."' WHERE idE='".$idE."'";
>>>>>>> 3457a3160308cdb17f7bd64fc42239671426e45b
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

<<<<<<< HEAD
	public function ajouterOrganisateurEv($idE,$idO){
		$query = "INSERT INTO organisateur_evenement VALUES($idO,$idE) WHERE idE='".$idE."'"; 
=======
	function modifierInfoE($idE){
		$query = "UPDATE ".$this->table;
		$query .= " SET infoE='".$infoE."' WHERE idE='".$idE."'";
>>>>>>> 3457a3160308cdb17f7bd64fc42239671426e45b
		try{
		$req = $this->db->prepare($query);
		$req->execute();
    	} catch (PDOException $e) {
		echo 'Echec insertion évènement';
		return false;
		}
        return  $req->fetchAll(PDO::FETCH_CLASS,"evenement_evenement");
	}

<<<<<<< HEAD
	public function supprimerIdO($idE,$idO){	
		$query = "UPDATE organisateur_evenement";
		$query .= "SET idO='".$idO."' WHERE idE='".$idE."'";
=======
 function modifierimageE($idE){
		$query = "UPDATE ".$this->table;
		$query .= " SET imageE='".$imageE."' WHERE idE='".$idE."'";
>>>>>>> 3457a3160308cdb17f7bd64fc42239671426e45b
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
<<<<<<< HEAD

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


=======
  */

 /*
 fonction messagerie
  */
 /*function BoiteRecep() { // affiche les mail contenus dans la boite de reception
        $rquete1 = "SELECT idExpediteur,objet,message FROM message'";
          //var_dump($rquete1) ;
          $rs =$this->db->query($rquete1);
          $rw = $rs->fetchAll(PDO::FETCH_CLASS,'Message');
         }
*/
  /*function MailEnvoye() {
    $rquete1 = "SELECT idExpediteur,objet,message FROM message WHERE dateEnvoi > NOW()";
      //var_dump($rquete1) ;
      $rs =$this->db->query($rquete1);
      $rw = $rs->fetchAll(PDO::FETCH_CLASS,'Message');
  }*/
/*  function MailBrouillon() {
    $rquete1 = "SELECT idExpediteur,objet,message FROM message WHERE estBrouillon = "TRUE"";
      //var_dump($rquete1) ;
      $rs =$this->db->query($rquete1);
      $rw = $rs->fetchAll(PDO::FETCH_CLASS,'Message');
  }
 }
 */
>>>>>>> 3457a3160308cdb17f7bd64fc42239671426e45b
    ?>
