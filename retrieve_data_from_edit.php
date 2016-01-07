<?php

	$con = mysqli_connect("localhost","alex","CUBriN76","pollastres") or die("Error en la conexión");
	
	mysqli_set_charset($con,'utf8');

	$sql = "SELECT Nombre, Conejos, Pollos, Mpollos, Caliu, Butifarras, Galtas, Costillas, Pies, alioli, Hora, Notas, Pagado, Separado, Tachado FROM encargos WHERE Nombre='$_GET[name]'";

	$result = mysqli_query($con,$sql) or die("No se han podido insertar los valores");

	$array = mysqli_fetch_row($result);

	echo json_encode($array);

	mysqli_close($con);

?>