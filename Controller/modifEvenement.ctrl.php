<?php
session_start();
if (!(isset($_GET['modif']) && ($_GET['modif']==1 || $_GET['modif']==0))){
	require_once(MODELPATH."DAO.class.php");

	$model_dao = new coursDAO();

	$model_instance = $model_dao->select_instance($_GET['idE'],$_GET['nomE'],$_GET['dateE'],$_GET['lieuE'],$_GET['lienBE'],$_GET['infoE'],$_GET['imageE']);

	$idE=$_GET['idE'];
	$nomE=$_GET['nomE'];
	$dateE=$_GET['dateE'];
	$lieuE=$_GET['lieuE'];
	$lienBE=$_GET['lienBE'];
	$infoE=$_GET['infoE'];
	$imageE=$_GET['imageE'];


	header("Location: ");
	//la page 

}	else if($_GET['modif']==0) {

	require_once(MODELPATH."DAO.class.php");
	$model_dao = new coursDAO();
	$model_instance = $model_dao->select_instance($_GET['idE'],$_GET['nomE'],$_GET['dateE'],$_GET['lieuE'],$_GET['lienBE'],$_GET['infoE'],$_GET['imageE']);
	$ok=0;

	if(!($_GET['newnomE']== $_GET['nomE'])) {
		if(!($model_instance->modifierNomE($_GET['newnomE']))){
			$ok=1;
		} else { 
			$ok=0;
		}
	}
	
	if(!($_GET['newdatE']== $_GET['dateE'])) {
		if(!($model_instance->modifierDateE($_GET['newdatE']))){
			$ok=1;			
		} else {
			$ok=0;
		}
	}
	
	if(!($_GET['newlieuE']== $_GET['lieuE'])) {
		if(!($model_instance->modifierLieuE($_GET['newlieuE']))){
			$ok=1;
		} else {
			$ok=0;
		}
	}

	if(!($_GET['newlienBE']== $_GET['LienBE'])) {
		if(!($model_instance->modifierLienBE($_GET['newLienBE']))){
			$ok=1;
		} else {
			$ok=0;
		}
	}

	if(!($_GET['newinfoE']== $_GET['infoE'])) {
		if(!($model_instance->modifierInfoE($_GET['newinfoE']))){
			$ok=1;
		} else {
			$ok=0;
		}
	}

	if(!($_GET['newimageE']== $_GET['imageE'])) {
		if(!($model_instance->modifierImageE($_GET['newimageE']))){
			$ok=1;
		} else {
			$ok=0;
		}
	}
	
	if($ok==0) {

	}

}
?> 

