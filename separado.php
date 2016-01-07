<?php

	$con = mysqli_connect("localhost","alex","CUBriN76","pollastres") or die("Error en la conexión");
	
	mysqli_set_charset($con,'utf8');

	$sql = "UPDATE encargos SET Separado='si' WHERE Nombre='$_POST[name]'";

	mysqli_query($con,$sql) or die("No se han podido insertar los valores");

	mysqli_close($con);

?>