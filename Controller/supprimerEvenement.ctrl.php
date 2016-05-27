<?php
require_once(MODELPATH."DAO.class.php");

$model_dao = new coursDAO();

$suppr = $model_dao->supprimerEvenement(_GET['idE'],$_GET['nomE'],$_GET['dateE'],$_GET['lieuE']);
$supprId0 = $model_dao->supprimerIdO($_GET['idE'],$_GET['idO']);

if($suppr) {	
	echo "évnènement supprimé";
}
if($supprId0) {	
	echo "organisateur supprimé";
}



?> 
