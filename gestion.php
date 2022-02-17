<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8">
	<title>Triosaure®</title> 
	<link rel = "icon" type = "image/png" href = "IMAGES/logo_mini.png">
	<link rel="stylesheet" href="CSS/style.css" />
	<style>
		table {
			border:2px solid black;
		margin-left: auto;
		margin-right: auto;
		box-shadow: 0 0 20px rgba(0, 0, 0, 1);
		border-collapse: collapse;
		width: 50%;
		color: white;
		font-family: monospace;
		font-size: 25px;
		text-align: left;
		}
		th {
		background-color: #E76F51;
		color: white;
		}
		tr:nth-child(even) {background-color:#F4A261}
</style>
</head>

<body>
	<!-- le menu du site -->
	<nav id="menu">
		<ul>
			<li><a href="index.html">Home</a></li>
			<li><a href="projet.html">Projet</a></li>
			<li><a href="gestion.php">Gestion</a></li>
			<li><a href="about_us.html">About us</a></li>
			<li><a href="#bottom">Contact</a></li>
		</ul>
	</nav>	
	<div class="banner">
		<img class = "banner-image" src="IMAGES/banner.jpg"
	</div>
	<div class="content">
	<h1>Gestion et état du système</h1>
	<br>Cette page donne les données en temps réel du système installé en Estia. Poids et volume dans chaque bac</br>
	<table>
    
        <tr>
            <th>ÍNDICE</th>
            <th>BAC1</th>
			<th>BAC2</th>
			<th>BAC3</th>
			<th>BAC4</th>
			
        </tr>
		
		<?php 
		$conn = mysqli_connect("localhost", "root", "", "test html" );
		if ($conn-> connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}
		$sql = "SELECT indice, BAC1, BAC2,BAC3,BAC4 FROM etat_de_remplissage";
		$result = $conn->query($sql);
		
		if($result->num_rows > 0){
			while($row = $result->fetch_assoc()) {
				echo"<tr><td>".$row["indice"]."</td><td>".$row["BAC1"]."</td><td>".$row["BAC2"]."</td><td>".$row["BAC3"]."</td><td>".$row["BAC4"]."</td></tr>";	
				
			}
			echo"</table>";
			}
			else{
				echo"Nor results";
			}
			$conn->close();
		?>
    
</table>
	wefwf
	<br>
	wefwf
	<br>
	wefwf
	<br>
	wefwf
	<br>
	wefwf
	<br>
	wefwf
	<br>
	valuevv
	valuewefwf
	<br>
	wefwf
	<br>
	valuewefwf
	<br>
	wefwf
	<br>
	wefwf
	<br>
	wefwf
	<br>
	wefwf
	<br>
	wefwf
	<br>
	wefwf
	<br>
	wefwf
	<br>
	wefwf
	<br>
	
	
	</div>
	
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
			<h3>ÉCOLE D’INGÉNIEURS ESTIA</h3>
			<a>Technopole Izarbel</a>
			<a>90 Allée Fauste d’Elhuyar</a>
			<a>64210 BIDART - FRANCE</a>
			
		</div>
		<div class="footer-heading footer-2">
			<img src="IMAGES/logo_mini.png" alt="Logo Triosaure" class = "footer_image2">
		</div>
		
		<div class="footer-heading footer-3">
			<h3>Outlook contact</h3>
			<a href="mailto:a.berard@net.estia.fr">BERARD Arnaud</a>
			<a href="mailto:m.bourra@net.estia.fr">BOURRA Maxime</a>
			<a href="mailto:l.faure@net.estia.fr">FAURE Lyderic</a>
			<a href="mailto:x.ceccon@net.estia.fr">CECCON Xuban</a>
		</div>
		
	</div>
</div>
	
	
	
	
	
	</body>
	</html>