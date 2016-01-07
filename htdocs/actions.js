$(document).ready(function() {

	// $(window).on("beforeunload", function(e) {

	//	return "Esto es una medida de seguridad!";

	// });

	$('#add_new').click(function() {

		$('#encargar').show();
		$('#nombre').focus();
		$('#wrapper, header').css({
			"-webkit-filter": "blur(5px)",
			"-moz-filter": "blur(5px)",
			"-ms-filter": "blur(5px)",
			"filter": "blur(5px)"
		});



		//$('.columna_nombre').append('<div class="normal_div">'+nombre+'</div>');		
		//$('.columna_pedido').append('<div class="normal_div">fgfgfg</div>');
		//$('.columna_hora').append('<div class="normal_div selector_hora"><select name="hora"><option>11:00</option><option>11:30</option><option>12:00</option><option>12:30</option><option>1:00</option><option>1:30</option><option>2:00</option><option>2:30</option><option>3:00</option><option>3:30</option><option>4:00</option><option>4:30</option><option>5:00</option></select></div>');
		//$('.columna_pagado').append('<div class="extra_div"><input type="checkbox" id="pagado" name="pagado"><label for="pagado">Pagado</label><br><input type="checkbox" id="separado" name="separado"><label for="separado">Separado</label></div>');


	});

	$('#cerrar_encargo').click(function() {

		$('#encargar').hide();
		$('#nombre').focus();
		$('#wrapper, header').css({
			"-webkit-filter": "blur(0px)",
			"-moz-filter": "blur(0px)",
			"-ms-filter": "blur(0px)",
			"filter": "blur(0px)"
		});

	});

	$('#submit').click(function() {

		event.preventDefault();
		$.ajax({
			type: "POST",
			url: "reservar.php",
			data: jQuery("#reservar").serialize(),
			cache: false
		});
		var nombre = $('#nombre').val();
		var pollos = $('#pollos').val();
		var mediospollos = $('#mediospollos').val();
		var caliu = $('#caliu').val();
		var butifarras = $('#butifarras').val();
		var galtas = $('#galtas').val();
		var costillas = $('#costillas').val();
		var notas = $('#notas').val();
		if ($('#pagado').is(':checked')) {
			var pagado = 1;
		} else {
			var pagado = 0;
		}
		if ($('#separado').is(':checked')) {
			var separado = 1;
		} else {
			var separado = 0;
		}
		$('.columna_nombre').append('<div class="normal_div">'+nombre+'</div>');
		$('.columna_hora').append('<div class="normal_div selector_hora"><select name="hora"><option>11:00</option><option>11:30</option><option>12:00</option><option>12:30</option><option>1:00</option><option>1:30</option><option>2:00</option><option>2:30</option><option>3:00</option><option>3:30</option><option>4:00</option><option>4:30</option><option>5:00</option></select></div>');
		$('.columna_pedido').append('<div class="normal_div"></div>');
		
		// Insertar pollos

		if (pollos == 1) {
			$('.columna_pedido .normal_div:last-child').append('<span class="chicken">' +pollos+ ' pollo,' + '</span>');
		} else {
			if (pollos > 1) {
				$('.columna_pedido .normal_div:last-child').append('<span class="chicken">' +pollos+ ' pollos, ' + '</span>');
			}
		}

		// Insertar medios pollos

		if (mediospollos == 1) {
			$('.columna_pedido .normal_div:last-child').append('<span class="halfchicken">' +mediospollos+ '/2 pollo, ' + '</span>');
		} else {
			if (mediospollos > 1) {
				$('.columna_pedido .normal_div:last-child').append('<span class="halfchicken">' +mediospollos+ '/2 pollos, ' + '</span>');
			}
		}

		// Insertar caliu

		$('.columna_pedido .normal_div:last-child').append('<span class="potatoes">' +caliu+ ' caliu, ' + '</span>');

		// Insertar butifarras 

		if (butifarras == 1) {
			$('.columna_pedido .normal_div:last-child').append('<span class="sausages">' +butifarras+ ' butifarra, ' + '</span>');
		} else {
			if (butifarras > 1) {
				$('.columna_pedido .normal_div:last-child').append('<span class="sausages">' +butifarras+ ' butifarras, ' + '</span>');
			}
		}

		// Insertar galtas

		if (galtas == 1) {
			$('.columna_pedido .normal_div:last-child').append('<span class="cheeks">' +galtas+ ' galta, ' + '</span>');
		} else {
			if (galtas > 1) {
				$('.columna_pedido .normal_div:last-child').append('<span class="cheeks">' +galtas+ ' galtas, ' + '</span>');
			}
		}

		// Insertar costillas

		if (costillas == 1) {
			$('.columna_pedido .normal_div:last-child').append('<span class="ribs">' +costillas+ ' costilla, ' + '</span>');
		} else {
			if (costillas > 1) {
				$('.columna_pedido .normal_div:last-child').append('<span class="ribs">' +costillas+ ' costillas, ' + '</span>');
			}
		}


		$('#encargar').hide();
		$('#nombre').focus();
		$('#wrapper, header').css({
			"-webkit-filter": "blur(0px)",
			"-moz-filter": "blur(0px)",
			"-ms-filter": "blur(0px)",
			"filter": "blur(0px)"
		});

	});

});