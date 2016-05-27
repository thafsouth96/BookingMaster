<?php
session_start();
if (!(isset($_GET['modif']) && ($_GET['modif']==1 || $_GET['modif']==0))){
	require_once(MODELPATH."DAO.class.php");

	$model_dao = new DAO();

	$model_instance = $model_dao->select_instance($_GET['idE'],$_GET['nomE'],$_GET['dateE'],$_GET['lieuE'],$_GET['lienBE'],$_GET['infoE'],$_GET['imageE']);

	$idE=$_GET['idE'];
	$nomE=$_GET['nomE'];
	$dateE=$_GET['dateE'];
	$lieuE=$_GET['lieuE'];

	//header("Location: ");
	//la page 

}	else if($_GET['modif']==0) {

	require_once(MODELPATH."DAO.class.php");
	$model_dao = new coursDAO();
	$model_instance = $model_dao->select_instance($_GET['idE'],$_GET['nomE'],$_GET['dateE'],$_GET['lieuE']);
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


	if(!($_GET['newidO']== $_GET['idO'])) {
		if(!($model_instance->modifierLieuE($_GET['newidO']))){
				$ok=1;
		} else {
				$ok=0;
		}
	}
	
}
?> 

