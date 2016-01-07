<DOCTYPE html>
<html>
	<head>
		<title>Cuina Mar Obert S.L</title>
		<link rel="stylesheet" href="style.css">
		<meta charset="utf-8">
		<script src="jquery-2.1.4.min.js"></script>
	</head>
	<body>
		<header>
			<div class="top_button" id="encargo_cambio">Encargos</div>
			<div class="top_button" id="otro_cambio">Otros</div>
		</header>
		<div id="encargar">
			<div id="cerrar_encargo"></div>
			<form onsubmit="encargar()" id="reservar" enctype="multipart/form-data" method="post">
				<label for="nombre">Nombre:</label>
					<input type="text" name="nombre" value="" id="nombre">
				<br>
				<br>
				<label>Pedido:</label><br><br>
					<div class="form_numbers">
						<span>Pollos: </span><input type="number" value="" id="pollos" name="pollo">
					</div>
					<div class="form_numbers">
						<span>&frac12; Pollos: </span><input type="number" max="1" value="" id="mediospollos" name="mediospollos">
					</div>
					<div class="form_numbers">
						<span>Caliu: </span><input type="number" value="" id="caliu" name="caliu">
					</div>
					<div class="form_numbers">
						<span>Butifarras: </span><input type="number" value="" id="butifarras" name="butifarras">
					</div>
					<div class="form_numbers">
						<span>Galtas: </span><input type="number" value="" id="galtas" name="galtas">
					</div>
					<div class="form_numbers">
						<span>Costillas: </span><input type="number" value="" id="costillas" name="costillas">
					</div>
					<div class="form_numbers">
						<span>Ali oli: </span><input type="number" value="" id="alioli" name="alioli">
					</div>
					<br>
				<label style="position: relative; bottom: 50px;" for="notas">Notas:</label>
					<textarea name="notas" id="notas"></textarea>
				<br>
				<input type="checkbox" name="pagado" id="pagado"><label for="pagado"> Pagado </label>
				<input type="checkbox" name="separado" id="separado"><label for="separado"> Separado </label>
				<br><br>
				<input type="submit" id="submit" value="Encargar">
				</form>
			</div>
		<div id="wrapper">
			<div id="encargos">
				<span id="add_new">Añadir encargo</span>
			</div>
			<div id="encargos_tabla">
				<div class="columna columna_nombre">
					<div>Nombre</div>
				</div>
				<div class="columna columna_pedido">
					<div>Pedido</div>
				</div>
				<div class="columna columna_hora">
					<div>Hora</div>
				</div>
			</div>
		</div>
	</body>
	<script src="actions.js"></script>
</html>