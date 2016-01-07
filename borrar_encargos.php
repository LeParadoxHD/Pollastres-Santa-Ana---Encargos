<?php 

	$con = mysqli_connect("localhost","alex","CUBriN76","pollastres") or die("Error");
	
	mysqli_set_charset($con,'utf8');

	$sql = "DELETE FROM encargos";

	mysqli_query($con,$sql) or die("No se ha podido realizar la operación");

	mysqli_close($con);

?>