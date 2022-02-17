<?php
$username = $_POST ['user'];
$password = $_POST ['pass'];
//anti sql injection
$username = stripcslashes($username);
$password = stripcslashes($password);
$username = mysql_real_escape_string($username);
$password = mysql_real_escape_string($password);

//connect to the serv
$conn = mysqli_connect("localhost", "root", "", "login" );
if ($conn-> connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}

//Query the databas for user_error

$result = mysql_query("select * from users where username = '$username' and password = '$password'") 
			or die("Failed to query database" .mysql_error());
$row = mysql_fetch_array($result);
if ($row ['username'] == $username && $row['password'] == $password){
	echo"Login succes";
}else{
	echo"Failed";
}

?>