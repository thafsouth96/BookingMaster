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

       function getBooker($id){
          $query = "SELECT * FROM booker WHERE idPers = $id";
          $req =$this->db->query($query);
          $result = $req->fetchAll(PDO::FETCH_CLASS,'Booker');
          return $result[0];
        }

       /****Retourne id du booker à partir de son mail******/
        function getMailBooker($mail){
          $rquete1 = "SELECT * FROM booker WHERE email = '$mail'";
          //var_dump($rquete1) ;
          $rs =$this->db->query($rquete1);
          //var_dump($rs);
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
        /** Fonction d'inscriptionBooker ***/
// IDEA: id,nom,email,num,prenom,datenaiss,mdp

        function inscriptionBooker($nom,$email,$num,$prenom,$dateNaiss,$mdp) {
            $req1 = ('SELECT count(*)  + 1 as id  from id_datatype') ;
            $sth=$this->db->query($req1);
            $res = $sth->fetchAll(PDO::FETCH_ASSOC);
            $id = $res[0]['id'];


            $req2 = "INSERT INTO id_datatype values ($id,'Booker')" ;
            $sth1=$this->db->query($req2);

            $req3 = "INSERT INTO booker values ($id,'$nom','$email','$num','$prenom','$dateNaiss','$mdp')" ;
            $sth2=$this->db->query($req3);
            return $sth1 && $sth2 ;
        }




/*--------------------------------GESTION DES EVENEMENTS-------------------------------------*/


	/*public function select_instance($idE,$nomE,$dateE,$lieuE) {
		$query = "SELECT * FROM evenement";
		$query .= " WHERE idE='".$idE."' AND nomE='".$nomE."'";
		$query .= " AND dateE='".$dateE."' AND lieuE='".$lieuE."'";

		$stmt = $this->db->prepare($query);*
}
  function select_instance($idE,$nomE,$dateE,$lieuE,$lienBE,$infoE,$SimageE) {
		$query = "SELECT * FROM evenements ";
		$query .= " WHERE idE='".$idE."' AND nomE='".$nomE."'";
		$query .= " AND dateE='".$dateE."' AND lienBE='".$lienBE."' AND infoE='".$infoE."'";
		$query .= " AND imageE='".$imageE."'";

		$stmt = $this->dbh->prepare($query);
    	$stmt->execute();

    	$result = $stmt->fetch(PDO::FETCH_BOTH);

    	$instance = new evenement($result[0],$result[1],$result[2],$result[3]);
		return $instance;
	}*/

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
		$query = "UPDATE ".$this->table;
		$query .= " SET lienBE='".$lienBE."' WHERE idE='".$idE."'";

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
		$query .= " SET infoE='".$infoE."' WHERE idE='".$idE."'";
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
		$query = "UPDATE ".$this->table;
		$query .= " SET imageE='".$imageE."' WHERE idE='".$idE."'";
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


/*--------------------------------GESTION DE RECHERCHE D'ARTISTESs-------------------------------------*/

  public function getMessagesRecus($idPers){

    $query = "SELECT a.nom as expediteur, idDestinataire, dateEnvoi, objet  FROM message m, artiste a WHERE idDestinataire=$idPers and m.idExpediteur=a.idPers union SELECT g.nom as expediteur, idDestinataire, dateEnvoi, objet  FROM message m, groupeMusical g WHERE idDestinataire=$idPers and m.idExpediteur=g.idPers";
    try {
    $req = $this->db->query($query);
    $result=$req->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      die("PDO Error : ".$e->getMessage());
    }
      return $result;
  }

  public function getMessagesEnvoyes($idPers){

    $query = "SELECT idExpediteur, a.nom as destinataire, dateEnvoi, objet  FROM message m, artiste a WHERE idExpediteur=$idPers and m.idDestinataire=a.idPers union SELECT idExpediteur, g.nom as destinataire, dateEnvoi, objet  FROM message m, groupeMusical g WHERE idExpediteur=$idPers and m.idDestinataire=g.idPers";
    try {
    $req = $this->db->query($query);
    $result=$req->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
      die("PDO Error : ".$e->getMessage());
    }
      return $result;
  }

 /*
 fonction messagerie
  */
 function AfficheMailRecu() { // affiche les mail contenus dans la boite de reception
        $rquete1 = "SELECT * FROM message";
          //var_dump($rquete1) ;
          $rs =$this->db->query($rquete1);
          $rw = $rs->fetchAll(PDO::FETCH_CLASS,'Message');
          return $rw ;
        }

//function AfficheMailEnvoye() {
  //  $rquete1 = "SELECT idExpediteur,objet,message FROM message WHERE dateEnvoi > TIME()";
  //  var_dump($rquete1) ;
  //    $rs =$this->db->query($rquete1);
  //    $rw = $rs->fetchAll(PDO::FETCH_CLASS,'Message');
  //    return $rw;
  //}
function AfficheMailBrouillon() {
    $rquete1 = "SELECT idExpediteur,objet,message FROM message WHERE estBrouillon = 'true'";
      //var_dump($rquete1) ;
      $rs =$this->db->query($rquete1);
      $rw = $rs->fetchAll(PDO::FETCH_CLASS,'Message');
      return $rw;
  }
  public function AfficheMailEnvoye($idPers){

    $query = "SELECT idExpediteur, a.nom as destinataire, dateEnvoi, objet  FROM message m, artiste a WHERE idExpediteur=$idPers and m.idDestinataire=a.idPers union SELECT idExpediteur, g.nom as destinataire, dateEnvoi, objet  FROM message m, groupeMusical g WHERE idExpediteur=$idPers and m.idDestinataire=g.idPers";
    try {
    $req = $this->db->query($query);
    $result=$req->fetchAll(PDO::FETCH_CLASS,'Message');
    } catch (PDOException $e) {
      die("PDO Error : ".$e->getMessage());
    }
      return $result;
  }


   public function InsereMail($idExpediteur,$idDestinataire,$objet,$message,$estBrouillon) {
    $query = "INSERT INTO message VALUES( '$idExpediteur','$idDestinataire',TIME(),'$objet','$message','$estBrouillon','False','False')";
    var_dump($query);
    try{
    $req = $this->db->prepare($query);
    $req->execute();
      } catch (PDOException $e) {
    echo 'Echec insertion évènement';
    return false;
    }
      }

}    ?>
