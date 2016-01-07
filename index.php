<DOCTYPE html>
<html>
	<head>
		<title>Cuina Mar Obert S.L</title>
		<link rel="stylesheet" href="style.css">
		<link rel="stylesheet" href="robotodraft.css">
		<!-- <link rel="stylesheet" href="jquery-ui.css"> -->
		<!-- <link rel="stylesheet" href="jquery.mCustomScrollbar.css"> -->
		<meta charset="utf-8">
		<link rel="icon" href="favicon.ico">
		<script src="jquery-2.1.4.min.js"></script>
		<!-- <script src="jquery-ui.js"></script> -->
		<!-- <script src="jquery.mCustomScrollbar.concat.min.js"></script> -->
		<!-- <script src="velocity.min.js"></script> -->
	</head>
	<div id="find">
		<div class="only_title">Megabuscador:</div>
		<input type="text" id="search" placeholder="Buscar...">
	</div>
	<div id="shortcuts">
		<div class="key"><span class="stroke">ESC</span> : <span class="key_desc">Cerrar ventana de encargos.</span></div>
		<div class="key"><span class="stroke">Numpad +</span> : <span class="key_desc">Abrir ventana de encargos.</span></div>
		<div class="key"><span class="stroke">CTRL</span> : <span class="key_desc">Buscar encargo (nombre, pedido,...)</span></div>
		<div class="key"><span class="stroke">ALT</span> : <span class="key_desc">Mostrar todos los encargos.</span></div>
	</div>
	<body>
		<header>
			<div class="top_button" id="borrar_encargos">Borrar encargos</div>
			<div class="top_button" id="otro_cambio">Otros</div>
		</header>
		<div id="estadisticas">
			<table id="analytics">
				<tbody>
					<tr>
						<td>En Stock</td>
						<td>Pollos</td>
						<td>&frac12; Pollos</td>
						<td>Conejos</td>
						<td>Butifarras</td>
						<td>Galtas</td>
						<td>Caliu</td>
						<td>Costillas</td>
						<td>Pies</td>
					<tr>
						<td class="noPadding"><input type="text" name="stock" maxlength="3" id="stock" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></td>
						<td id="pollos_reservados"></td>
						<td id="mediospollos_reservados"></td>
						<td id="conejos_reservados"></td>
						<td id="butifarras_reservados"></td>
						<td id="galtas_reservados"></td>
						<td id="caliu_reservados"></td>
						<td id="costillas_reservados"></td>
						<td id="pies_reservados"></td>
					<tr>
						<td>Traspasados</td>
						<td colspan="2">Total</td>
						<td>Restantes</td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
					<tr>
						<td><input type="text" name="traspasados" maxlength="3" id="traspasados" onkeypress='return event.charCode >= 48 && event.charCode <= 57'></td>
						<td id="total_pollos" colspan="2"></td>
						<td id="pollos_restantes"></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
				</tbody>
			</table>
		</div>
		<div id="encargar">
			<div id="cerrar_encargo"></div>
			<form onsubmit="encargar()" id="reservar" enctype="multipart/form-data" method="post">
				<label for="nombre">Nombre:</label>
					<input type="text" name="nombre" value="" id="nombre">
				<br>
				<br>
				<label>Pedido - Hora:</label><select style="margin-left: 10px;width: 80px;height: 30px;padding-left: 15px;" id="hora" name="hora"><option>12:00</option><option>12:30</option><option>1:00</option><option>1:30</option><option>2:00</option><option>2:30</option><option>3:00</option><option>3:30</option><option>4:00</option><option>4:30</option><option>5:00</option></select>
				<div class="button_hour" onclick="$('#hora').val('12:00');">
					12:00
				</div>
				<div class="button_hour" onclick="$('#hora').val('1:00');">
					1:00
				</div>
				<div class="button_hour" onclick="$('#hora').val('2:00');">
					2:00
				</div>
				<div class="button_hour" onclick="$('#hora').val('3:00');">
					3:00
				</div><br><br>
					<div class="form_numbers">
						<span>Pollos: </span><input type="number" value="" id="pollos" min="0" name="pollo">
					</div>
					<div class="form_numbers">
						<span>&frac12; Pollos: </span><input type="number" max="1" value="" min="0" id="mediospollos" name="mediospollos">
					</div>
					<div class="form_numbers">
						<span>Caliu: </span><input type="number" value="" id="caliu" min="0" name="caliu">
					</div>
					<div class="form_numbers">
						<span>Butifarras: </span><input type="number" value="" id="butifarras" min="0" name="butifarras">
					</div>
					<div class="form_numbers">
						<span>Galtas: </span><input type="number" value="" id="galtas" min="0" name="galtas">
					</div>
					<div class="form_numbers">
						<span>Pies: </span><input type="number" value="" id="pies" min="0" name="pies">
					</div>
					<div class="form_numbers">
						<span>Costillas: </span><input type="number" value="" id="costillas" min="0" name="costillas">
					</div>
					<div class="form_numbers">
						<span>Ali oli: </span><input type="number" value="" id="alioli" min="0" name="alioli">
					</div>
					<div class="form_numbers">
						<span>Conejos: </span><input type="number" value="" id="conejo" min="0" name="conejo">
					</div>
					<br>
				<label style="position: relative; bottom: 50px;" for="notas">Notas:</label>
					<textarea name="notas" id="notas"></textarea>
				<input type="checkbox" name="pagado" id="pagado"><label for="pagado"> Pagado </label>
				<br><br>
				<input type="submit" id="submit" value="Encargar">
				</form>
			</div>
			<div class="editar">
			<div id="cerrar_editar"></div>
				<form onsubmit="editar()" class="editar_reserva" enctype="multipart/form-data" method="post">
					<label for="nombre">Nombre:</label>
					<input type="text" name="nombre" value="" id="nombre2" disabled>
					<br>
					<br>
					<label>Pedido - Hora:</label><select style="margin-left: 10px;width: 80px;height: 30px;padding-left: 15px;" id="hora2" name="hora"><option>12:00</option><option>12:30</option><option>1:00</option><option>1:30</option><option>2:00</option><option>2:30</option><option>3:00</option><option>3:30</option><option>4:00</option><option>4:30</option><option>5:00</option></select><br><br>
						<div class="form_numbers">
							<span>Pollos: </span><input type="number" value="" id="pollos2" min="0" name="pollo">
						</div>
						<div class="form_numbers">
							<span>&frac12; Pollos: </span><input type="number" max="1" value="" id="mediospollos2" min="0" name="mediospollos">
						</div>
						<div class="form_numbers">
							<span>Caliu: </span><input type="number" value="" id="caliu2" min="0" name="caliu">
						</div>
						<div class="form_numbers">
							<span>Butifarras: </span><input type="number" value="" id="butifarras2" min="0" name="butifarras">
						</div>
						<div class="form_numbers">
							<span>Galtas: </span><input type="number" value="" id="galtas2" min="0" name="galtas">
						</div>
						<div class="form_numbers">
							<span>Pies: </span><input type="number" value="" id="pies2" min="0" name="pies">
						</div>
						<div class="form_numbers">
							<span>Costillas: </span><input type="number" value="" id="costillas2" min="0" name="costillas">
						</div>
						<div class="form_numbers">
							<span>Ali oli: </span><input type="number" value="" id="alioli2" min="0" name="alioli">
						</div>
						<div class="form_numbers">
							<span>Conejos: </span><input type="number" value="" id="conejo2" min="0" name="conejo">
						</div>
						<br>
					<label style="position: relative; bottom: 50px;" for="notas">Notas:</label>
						<textarea name="notas" id="notas2"></textarea>
					<br>
					<input type="checkbox" name="pagado" id="pagado2"><label for="pagado"> Pagado </label>
					<br><br>
					<input type="submit" id="submit2" value="Guardar">
				</form>
			</div>
		<div id="encargos">
			<span id="add_new">Añadir encargo</span>
		</div>
		<div id="wrapper">
			<div id="encargos_tabla">
				<div id="titles">
					<div>Nombre</div>
					<div>Pedido</div>
					<div>Extra</div>
					<div>Hora</div>
					<div>Notas</div>
					<div>Opciones</div>
				</div>
				<div id="titless">
					<div>Nombre</div>
					<div>Pedido</div>
					<div>Extra</div>
					<div>Hora</div>
					<div>Notas</div>
					<div>Opciones</div>
				</div>
				<table id="tablas">
					<tbody>
						<?php include 'get_rows.php'; ?>
					</tbody>
				</table>
			</div>
		</div>
		<div id="chicken_analytics"></div>
		<div id="mysql">
			<input type="text" id="select_date">
			<div id="date_submit">Abrir</div>
		</div>
	</body>
	<script src="actions.js"></script>
	<script>
	    // (function($){
	    //     $(window).load(function(){
	    //         $("body").mCustomScrollbar({
			  //   	axis:"y",
			  //   	theme:"inset-3-dark",
			  //   	scrollButtons:{
			  //       	enable:true
			  //       },
			  //       mouseWheel:{ scrollAmount: 500 }

			  //   });
	    //     });
	    // })(jQuery);
	</script>
</html>