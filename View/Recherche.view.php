
<body>
<header>
<h1> Resultat de Recherche </h1>

<div id="Music"> Style musical
	<select id="Musical" name="selectM">
		<option selected disabled>Selectionner..</option>
		<option value="valeur1">Rock</option>
		<option value="valeur2">Pop</option>
		<option value="valeur3">Jazz</option>
	</select>
</div>

<div id="Pays"> Pays
	<select id="Pays" name="selectP">
		<option selected disabled>Selectionner..</option>
		<option value="valeur1">France</option>
		<option value="valeur2">Grande-Bretagne</option>
		<option value="valeur3">Pays-Bas</option>
	</select>
</div>

<div id="Region"> Region
	<select id="Region" name="selectR">
		<option selected disabled>Selectionner..</option>
		<option value="valeur1">Rhones-alpes</option>
		<option value="valeur2"></option>
		<option value="valeur3"></option>
	</select>
</div>

<div id="Ville"> Ville
	<select id="Ville" name="select">
		<option selected disabled>Selectionner..</option>
		<option value="valeur1">Grenoble</option>
		<option value="valeur2">Lyon</option>
		<option value="valeur3">Saint-Etienne</option>
	</select>
</div>

<div id="Rech">
	<form action="../Controller/rechercheArtiste.ctlr.php" method="GET">
	<input type="texte" name="rech" autofocus/>
	<input type="submit" name="action" value="Rechercher onclick="dssds" />
</div>


<?php
	
	foreach($artists as $artist)
	<div id="Artists">
		$artist->getPrenomAr();
		$artist->getNomAr();
		

		//affichage du profil d'artiste<form action="../Controller/.php" method="GET">
		<input type="button" name="profil" value="Voir Profil">
	</div>
?>
