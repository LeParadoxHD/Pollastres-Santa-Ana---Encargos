<?php 

	$con = mysqli_connect("localhost","alex","CUBriN76","pollastres") or die("Error");
	
	mysqli_set_charset($con,'utf8');

	$sql = "UPDATE encargos SET Nombre='$_POST[nombre]',Conejos='$_POST[conejo]',Pollos='$_POST[pollo]',Mpollos='$_POST[mediospollos]',Caliu='$_POST[caliu]',Butifarras='$_POST[butifarras]',Galtas='$_POST[galtas]',Costillas='$_POST[costillas]',Pies='$_POST[pies]',alioli='$_POST[alioli]',Hora='$_POST[hora]',Notas='$_POST[notas]',Pagado='$_POST[pagado]' WHERE Nombre='$_POST[nombre]'";

	mysqli_query($con,$sql) or die("No se han podido insertar los valores");

	mysqli_close($con);

?>