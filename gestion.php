<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Triosaure®</title> 
	<link rel = "icon" type = "image/png" href = "IMAGES/logo_mini.png">
	<link rel="stylesheet" href="CSS/style_gestion.css" />
	<style>	
</style>
</head>

<body>
	<!-- le menu du site -->
	<nav id="menu">
        <ul id="menu_txt">
            <li><a href="index.html">Accueil</a></li>
			<li><a href="projet.html">Projet</a></li>
			<li><a href="gestion.php">Gestion</a></li>
			<li><a href="about_us.html">Equipe</a></li>
			<li><a href="#bottom">Contact</a></li>
        </ul>
		<div id="menu_langues">
			<a onClick="window.location.href = 'gestion.php#es';location.reload(true)"><img class= "bandera" alt="Español" src="IMAGES/bandera_españa.png"> </a>
			<a onClick="window.location.href = 'gestion.php#fr';location.reload(true)"><img class= "bandera" alt="Français" src="IMAGES/bandera_francia.png"> </a>
		</div>
	</nav>
	<div class="banner">
		<img class = "banner-image" src="IMAGES/banner.jpg"
	</div>
	
	<div class="content">
	<h1>Gestion et état du système</h1>
	<h2>Cette page donne les données en temps réel du système installé en Estia. Poids et volume dans chaque bac</h2>
	<table>
    
        <tr>
            <th>ÍNDICE</th>
            <th>BAC1</th>
			<th>BAC2</th>
			<th>BAC3</th>
			<th>BAC4</th>
			
        </tr>
		
		<?php 
		$conn = mysqli_connect("db5002420578.hosting-data.io", "dbu1400050", "Tri0saure_5", "dbs1933965" );
		if ($conn-> connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}
		$sql = "SELECT id_etat_de_remplissage, BAC1, BAC2,BAC3,BAC4 FROM etat_de_remplissage";
		
		
		$result = $conn->query($sql);
		
		if($result->num_rows > 0){
			while($row = $result->fetch_assoc()) {
				echo"<tr><td>".$row["id_etat_de_remplissage"]."</td><td>".$row["BAC1"]."</td><td>".$row["BAC2"]."</td><td>".$row["BAC3"]."</td><td>".$row["BAC4"]."</td></tr>";	
				
			}
			echo"</table>";
			}
			else{
				echo"Nor results";
			}
			$conn->close();
				
		?>
		</table>
    <div id="main" class="login-page">
		<div class="form">
			<p>Login Administrateur</p>
			<form method = "POST" class="register-form">
				<input type="text" name="username" class ="text" autocomplete="off"required>
				<input type="password" name="password" class ="text" required>
				<input type="Submit" name="submit" id="sub" value="Envoyer">
			</form>
		</div>
	</div>
	
	<?php
      
	$conn = mysqli_connect("db5002420578.hosting-data.io", "dbu1400050", "Tri0saure_5", "dbs1933965" );
	
		if ($conn-> connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}
		
	$sql2 = "SELECT id_maintenance, Agent, Date, Action FROM actions_maintenance";	
	$result2 = $conn->query($sql2);
	if(isset($_POST['submit'])){
		$un=$_POST['username'];
		$pw=$_POST['password'];
		$sql = "SELECT password FROM user where username='$un'";
		
		
		$result=mysqli_query($conn, $sql);
		$resultCheck = mysqli_num_rows($result);
		$row = mysqli_fetch_array($result);
		if ($pw==$row[0]){
			if($result2->num_rows > 0){
				echo"<table><tr><th>id</th><th>Agent</th><th>Date</th><th>Action</th></tr>";
			while($row = $result2->fetch_assoc()) {
				
				echo"<tr><td>".$row["id_maintenance"]."</td><td>".$row["Agent"]."</td><td>".$row["Date"]."</td><td>".$row["Action"]."</td></tr>";	
			}
			echo"</table>";
			}
			else{
				echo"Nor results";
			}
			$conn->close();
			
			exit();
		}
		else
			echo"<p>Utilisateur ou mot de passe incorrect</p>";
	}
?>


	
	
	
	
	
	<div class="curved-div">
  <svg class = "svgprueba" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 280">
  <path fill="#264653" fill-opacity="1" d="M0,224L120,234.7C240,245,480,267,720,256C960,245,1200,203,1320,181.3L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
</svg>
</div>

<div class="footer-container" 	id="bottom">

	<div class="footer">
		
		<div class="footer-heading footer-0">
			
			
			<img src="IMAGES/logo-estia.png" alt="Logo Estia" class = "footer_image1">
		</div>
		<div class="footer-heading footer-1">
			<h3 id="f1">ÉCOLE D’INGÉNIEURS ESTIA</h3>
			<a>Technopole Izarbel</a>
			<a>90 Allée Fauste d’Elhuyar</a>
			<a>64210 BIDART - FRANCE</a>
			
		</div>
		<div class="footer-heading footer-2">
			<img src="IMAGES/logo_mini.png" alt="Logo Triosaure" class = "footer_image2">
		</div>
		
		<div class="footer-heading footer-3">
			<h3 id="f2">Outlook contact</h3>
			<a href="mailto:a.berard@net.estia.fr">BERARD Arnaud</a>
			<a href="mailto:m.bourra@net.estia.fr">BOURRA Maxime</a>
			<a href="mailto:l.faure@net.estia.fr">FAURE Lyderic</a>
			<a href="mailto:x.ceccon@net.estia.fr">CECCON Xuban</a>
		</div>
		
	</div>
</div>
	
	
	
	
	
	</body>
	<script src="JS/langues_gestion.js"></script> <!--Script pour la langue -->

	</html>