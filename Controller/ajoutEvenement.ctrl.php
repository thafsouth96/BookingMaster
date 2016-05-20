 <?php 
session_start();
if (!(isset($_GET['ajout']) && ($_GET['ajout']==1 || $_GET['ajout']==0))){

require_once(VIEWPATH."ajoutEvenement.php");

}
else if(isset($_GET['ajout']) && $_GET['ajout']==0) {

/*	
	echo $_SESSION['type'];
	if($_SESSION['type']=='booker') {
		header("Location: index.php?action=edt&semaine=".$_GET['semaine']."groupe=".$_GET['groupe']);
	}

	else if($_SESSION['type']=='artiste') {
		header("Location: index.php?action=edt&semaine=".$_GET['semaine']."&nom=".$_GET['nomAr']);
	}

} else {
*/

	require_once(MODELPATH."DAO.class.php"); //créer un dao spécial evenements ?
	$model_dao = new DAO();
	$ajout=$model_dao->creerEvenement($_GET['idE'],$_GET['nomE'],$_GET['dateE'],$_GET['lieuE'],$_GET['lienBE'],$_GET['infoE'],$_GET['imageE']);
		
	if($ajout) {
		echo 'ajout avec succes';}
	else if(!($ajout)){
		//echo 'echec de l'ajout';
		//require_once(HEADER);
		header("refresh: 2, URL= index.php?action=ajoutEvenement"./*completer*/ );
		//-->refresh a l'url d'ajout de l'evenement (calendrier...etc) 
		require_once(FOOTER);
		}
	
	
	}
?>
