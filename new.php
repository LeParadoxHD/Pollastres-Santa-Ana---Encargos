<?php

	$con = mysqli_connect("localhost","alex","CUBriN76","pollastres") or die("Error");
	
	mysqli_set_charset($con,'utf8');

	mysqli_query("CREATE TABLE '15-10-2015'", $con);

?>