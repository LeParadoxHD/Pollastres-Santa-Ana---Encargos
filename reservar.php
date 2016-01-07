<?php 

	$con = mysqli_connect("localhost","alex","CUBriN76","pollastres") or die("Error");
	
	mysqli_set_charset($con,'utf8');

	$sql = "INSERT INTO encargos (Nombre, Conejos, Pollos, Mpollos, Caliu, Butifarras, Galtas, Costillas, Pies, alioli, Hora, Notas, Pagado) VALUES ('$_POST[nombre]', '$_POST[conejo]', '$_POST[pollo]', '$_POST[mediospollos]', '$_POST[caliu]', '$_POST[butifarras]', '$_POST[galtas]', '$_POST[costillas]', '$_POST[pies]', '$_POST[alioli]', '$_POST[hora]', '$_POST[notas]', '$_POST[pagado]')";

	mysqli_query($con,$sql) or die("No se han podido insertar los valores");

	mysqli_close($con);

?>

