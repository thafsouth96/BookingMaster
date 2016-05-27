<?php
require_once(MODELPATH."DAO.class.php");


$suppr = $dao->supprimerEvenement(_GET['idE'],$_GET['nomE'],$_GET['dateE'],$_GET['lieuE']);
$supprId0 = $dao->supprimerIdO($_GET['idE'],$_GET['idO']);

if($suppr) {	
	echo "évnènement supprimé";
}
if($supprId0) {	
	echo "organisateur supprimé";
}



?> 
