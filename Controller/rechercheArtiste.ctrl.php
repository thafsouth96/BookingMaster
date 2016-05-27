<?php 

    include_once("../model/DAO.class.php");

$model_dao = new DAO();

if(isset($_GET['rech']) && $_GET['rech']!=NULL){
		$rechNom=$model_dao->rechercheArtisteNom($_GET['rech']);
			if($rechNom==NULL){
				$rechPrenom=$model_dao->rechercheArtistePrenom($_GET['rech']);
			}
}

if(isset($_GET['selectM'])){
	$rechM=$model_dao->rechercheArtisteStyle($_GET['selectM']);
}
if(isset($_GET['selectP'])){
	$rechP=$model_dao->rechercheArtisteAdresse($_GET['selectP']);
}
if(isset($_GET['selectR'])){
	$rechR=$model_dao->rechercheArtisteAdresse($_GET['selectR']);
}
if(isset($_GET['selectV'])){
	$rechV=$model_dao->rechercheArtisteAdresse($_GET['selectV']);
}





?>
