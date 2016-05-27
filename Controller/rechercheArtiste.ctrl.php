<?php 

    include_once("../model/DAO.class.php");

if(isset($_GET['rech']) && $_GET['rech']!=NULL){
		$rechNom=$dao->rechercheArtisteNom($_GET['rech']);
			if($rechNom==NULL){
				$rechPrenom=$dao->rechercheArtistePrenom($_GET['rech']);
			}
}

if(isset($_GET['selectM'])){
	$rechM=$dao->rechercheArtisteStyle($_GET['selectM']);
}
if(isset($_GET['selectP'])){
	$rechP=$dao->rechercheArtisteAdresse($_GET['selectP']);
}
if(isset($_GET['selectR'])){
	$rechR=$dao->rechercheArtisteAdresse($_GET['selectR']);
}
if(isset($_GET['selectV'])){
	$rechV=$dao->rechercheArtisteAdresse($_GET['selectV']);
}





?>
