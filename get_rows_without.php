<?php

	$conn = mysqli_connect("localhost","alex","CUBriN76","pollastres") or die("Error connect");

	mysqli_set_charset($conn,'utf8');

	$sql = "SELECT Nombre, Conejos, Pollos, Mpollos, Caliu, Butifarras, Galtas, Costillas, Pies, alioli, Hora, Notas, Pagado, Separado, Tachado FROM encargos";

	$result = mysqli_query($conn,$sql) or die("No se han podido sacar los valores");

	if ($result->num_rows > 0) {
		while ($row = $result->fetch_assoc()) {
			if ($row["Pagado"] == "on") {
				$pagado = "Pagado";
			} else {
				$pagado = "";
			}

			$detached = '';
			$tachado = '';
			$classtachado = '';

			if ($row["Separado"] == 'si') {
				$detached = ' separado';
			}

			$separar = '';
			$separado = '';

			if ($row["Tachado"] == "si") {
				$tachado = ' tachado';
				$classtachado = 'NaN';
			}

			if ($row["Pollos"] != 0) {
				$pollos = $row["Pollos"];
				$surpollos = " pollo, ";
				$varchicken = "chicken";
				if ($row["Pollos"] > 1) {
					$pollos = $row["Pollos"];
					$surpollos = " pollos, ";
					$varchicken = "chicken";
				}
			} else {
				$pollos = "";
				$surpollos = "";
				$varchicken = "";
			}

			if ($row["Pies"] != 0) {
				$pies = $row["Pies"];
				$surpies = " pie de cerdo, ";
				$varpies = "foot";
				if ($row["Pies"] > 1) {
					$pies = $row["Pies"];
					$surpies = " pies de cerdo, ";
					$varpies = "foot";
				}
			} else {
				$pies = "";
				$surpies = "";
				$varpies = "";
			}

			if ($row["Conejos"] != 0) {
				$conejo = $row["Conejos"];
				$surconejo = " conejo, ";
				$varconejo = "rabbit";
				if ($row["Conejos"] > 1) {
					$conejo = $row["Conejos"];
					$surconejo = " conejos, ";
					$varconejo = "rabbit";
				}
			} else {
				$conejo = "";
				$surconejo = "";
				$varconejo = "";
			}

			if ($row["Mpollos"] != 0) {
				$mediospollos = $row["Mpollos"];
				$surmediospollos = "/2 pollo, ";
				$varhalfchicken = "halfchicken";
			} else {
				$mediospollos = "";
				$surmediospollos = "";
				$varhalfchicken = "";
			}

			if ($row["Caliu"] != 0) {
				$caliu = $row["Caliu"];
				$surcaliu = " caliu, ";
				$varcaliu = "potatoes";
				$separar = ' separar';
				if ($row["Caliu"] > 1) {
					$caliu = $row["Caliu"];
					$surcaliu = " calius, ";
					$varcaliu = "potatoes";
				}
			} else {
				$caliu = "";
				$surcaliu = "";
				$varcaliu = "";
			}

			if ($row["Butifarras"] != 0) {
				$butifarras = $row["Butifarras"];
				$surbutifarras = " butifarra, ";
				$varbutifarras = "sausages";
				$separar = ' separar';
				if ($row["Butifarras"] > 1) {
					$butifarras = $row["Butifarras"];
					$surbutifarras = " butifarras, ";
					$varbutifarras = "sausages";
				}
			} else {
				$butifarras = "";
				$surbutifarras = "";
				$varbutifarras = "";
			}

			if ($row["Galtas"] != 0) {
				$galtas = $row["Galtas"];
				$surgaltas = " galta, ";
				$vargaltas = "cheeks";
				$separar = ' separar';
				if ($row["Galtas"] > 1) {
					$galtas = $row["Galtas"];
					$surgaltas = " galtas, ";
					$vargaltas = "cheeks";
				}
			} else {
				$galtas = "";
				$surgaltas = "";
				$vargaltas = "";
			}

			if ($row["Costillas"] != 0) {
				$costillas = $row["Costillas"];
				$surcostillas = " costilla, ";
				$varcostillas = "ribs";
				$separar = ' separar';
				if ($row["Costillas"] > 1) {
					$costillas = $row["Costillas"];
					$surcostillas = " costillas, ";
					$varcostillas = "ribs";
				}
			} else {
				$costillas = "";
				$surcostillas = "";
				$varcostillas = "";
			}

			if ($row["alioli"] != 0) {
				$alioli = $row["alioli"];
				$suralioli = " ali oli, ";
				$varalioli = "alioli";
				if ($row["alioli"] > 1) {
					$alioli = $row["alioli"];
					$suralioli = " ali olis, ";
					$varalioli = "alioli";
				}
			} else {
				$alioli = "";
				$suralioli = "";
				$varalioli = "";
			}

			$order = "<span class='" . $varconejo . $classtachado . "'>" . $conejo . "</span>" . $surconejo . "<span class='" . $varchicken . $classtachado . "'>" . $pollos . "</span>" . $surpollos . "<span class='" . $varhalfchicken . $classtachado . "'>" . $mediospollos . "</span>" . $surmediospollos . "<span class='" . $varcaliu . $classtachado . "'>" . $caliu . "</span>" . $surcaliu . "<span class='" . $varbutifarras . $classtachado . "'>" . $butifarras . "</span>" . $surbutifarras . "<span class='" . $vargaltas . $classtachado . "'>" . $galtas . "</span>" . $surgaltas . "<span class='" . $varcostillas . $classtachado . "'>" . $costillas . "</span>" . $surcostillas . "<span class='" . $varpies . $classtachado . "'>" . $pies . "</span>" . $surpies . "<span class='" . $varalioli . $classtachado . "'>" . $alioli . "</span>" . $suralioli;
			echo "<table id='tablas'><tbody>";
			echo "<tr class='row" . $tachado . "'><td class='name'>" . $row["Nombre"] . "</td><td class='order'>" . $order . "</td><td class='extra'>" . $pagado . "</td><td class='hour'>" . $row["Hora"] . "</td><td class='notes'>" . $row["Notas"] . "</td><td class='options'><div class='option hvr-pulse-grow option_otros'><span class='icon'></span>Editar</div><div class='option hvr-pulse-grow option_tachar'><span class='icon'></span>Tachar</div><div id='divseparado' class='option hvr-pulse-grow option_separado" . $separar . $detached . "'><span class='icon'></span><span class='separar_texto'>Separar</span></div><div class='more_options'></div></td>";
			echo "</tbody></table>";
		}

	}

?>