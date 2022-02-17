<?php

?>



<!DOCTYPE html>
<html>
<head>
	<title> Login Form in HTML5 and CSS3</title>
	<link rel="stylesheet" a href="style.css">
	
</head>
<body>
	<div class="container">
	
		<form action="process.php"  method="POST">
			<div class="form-input">
				<input type="text" id="user" name="user" placeholder="Enter the User Name"/>	
			</div>
			<div class="form-input">
				<input type="password" id="pass" name="pass" placeholder="password"/>
			</div>
			<input   type="submit" id="btn"  value="Login" class="btn-login"/>
		</form>
		
	</div>
</body>
</html>