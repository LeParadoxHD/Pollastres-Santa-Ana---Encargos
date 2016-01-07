
function actualizar() {
	var sum_pollos = 0;
	$('.chicken').each(function() {
		sum_pollos += parseInt($(this).text());
	});

	if ( sum_pollos >= 1 ) {
		$('#pollos_reservados').text(sum_pollos);
	} else {
		$('#pollos_reservados').text("");
	}

	var sum_mediospollos = 0;
	$('.halfchicken').each(function() {
		sum_mediospollos += parseFloat($(this).text());
	});

	if ( sum_mediospollos >= 1 ) {
		$('#mediospollos_reservados').text(sum_mediospollos);
	} else {
		$('#mediospollos_reservados').text("");
	}

	var sum_conejos = 0;
	$('.rabbit').each(function() {
		sum_conejos += parseFloat($(this).text());
	});

	if ( sum_conejos >= 1 ) {
		$('#conejos_reservados').text(sum_conejos);
	} else {
		$('#conejos_reservados').text("");
	}

	var sum_sausages = 0;
	$('.sausages').each(function() {
		sum_sausages += parseFloat($(this).text());
	});

	if ( sum_sausages >= 1 ) {
		$('#butifarras_reservados').text(sum_sausages);
	} else {
		$('#butifarras_reservados').text("");
	}

	var sum_galtas = 0;
	$('.cheeks').each(function() {
		sum_galtas += parseFloat($(this).text());
	});

	if ( sum_galtas >= 1 ) {
		$('#galtas_reservados').text(sum_galtas);
	} else {
		$('#galtas_reservados').text("");
	}

	var sum_caliu = 0;
	$('.potatoes').each(function() {
		sum_caliu += parseFloat($(this).text());
	});

	if ( sum_caliu >= 1 ) {
		$('#caliu_reservados').text(sum_caliu);
	} else {
		$('#caliu_reservados').text("");
	}

	var sum_costilla = 0;
	$('.ribs').each(function() {
		sum_costilla += parseFloat($(this).text());
	});

	if ( sum_costilla >= 1 ) {
		$('#costillas_reservados').text(sum_costilla);
	} else {
		$('#costillas_reservados').text("");
	}

	var sum_alioli = 0;
	$('.alioli').each(function() {
		sum_alioli += parseFloat($(this).text());
	});

	if ( sum_alioli >= 1 ) {
		$('#alioli_reservados').text(sum_alioli);
	} else {
		$('#alioli_reservados').text("");
	}

	var sum_pies = 0;
	$('.foot').each(function() {
		sum_pies += parseFloat($(this).text());
	});

	if ( sum_pies >= 1 ) {
		$('#pies_reservados').text(sum_pies);
	} else {
		$('#pies_reservados').text("");
	}

	var p = parseFloat($('#pollos_reservados').text());
	var m = parseFloat($('#mediospollos_reservados').text());
	var t = p+m;
	$('#total_pollos').text(t);

	if ( sum_pies >= 1 ) {
		$('#pies_reservados').text(sum_pies);
	} else {
		$('#pies_reservados').text("");
	}
}

function mostrar_lupa() {
	$('tr.row').prepend('<span class="magnify"><span class="magnify-icon"></span></span>');
}

$(document).ready(function() {

	$('tr.tachado .options .option_separado .separar_texto').text("Pedido entregado!");

	actualizar();
	mostrar_lupa();

	$('#stock').on('keyup', function() {

		var i = parseFloat($('#pollos_reservados').text());
		var ii = parseFloat($('#mediospollos_reservados').text());
		var pi = i+ii;
		var l = $('#stock').val();
		var iii = $('#traspasados').val();
		var ll = l-pi-iii;
		if ( ll > 0) {
			$('#pollos_restantes').text(ll);
		} else {
			$('#pollos_restantes').text("");
		}

	});

	$('#stock').on('keydown', function() {

		var i = parseFloat($('#pollos_reservados').text());
		var ii = parseFloat($('#mediospollos_reservados').text());
		var pi = i+ii;
		var l = $('#stock').val();
		var iii = $('#traspasados').val();
		var ll = l-pi-iii;
		if ( ll > 0) {
			$('#pollos_restantes').text(ll);
		} else {
			$('#pollos_restantes').text("");
		}

	});

	$('#traspasados').on('keyup', function() {

		var i = parseFloat($('#pollos_reservados').text());
		var ii = parseFloat($('#mediospollos_reservados').text());
		var pi = i+ii;
		var l = $('#stock').val();
		var iii = $('#traspasados').val();
		var ll = l-pi-iii;
		if ( ll > 0) {
			$('#pollos_restantes').text(ll);
		} else {
			$('#pollos_restantes').text("");
		}

	});

	$('#traspasados').on('keydown', function() {

		var i = parseFloat($('#pollos_reservados').text());
		var ii = parseFloat($('#mediospollos_reservados').text());
		var pi = i+ii;
		var l = $('#stock').val();
		var iii = $('#traspasados').val();
		var ll = l-pi-iii;
		if ( ll > 0) {
			$('#pollos_restantes').text(ll);
		} else {
			$('#pollos_restantes').text("");
		}
	});

	$(document.body).on('click', '#add_new', function() {

		$('#encargar').show();
		$('#nombre').focus();
		$('#wrapper, header, #encargos, #estadisticas').css({
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

	$(document.body).on('click', '.magnify-icon', function() {
		var magnifyit = $(this).parent(".magnify").parent(".row").find(".name, .order, .extra, .hour, .notes");
		magnifyit.animate({
			zoom: '1.2'
		});
		setTimeout(function() {
			magnifyit.animate({
				zoom: '1'
			});
		}, 5000);
	});

	$('#cerrar_encargo').click(function() {

		$('#encargar').hide();
		$('#nombre').focus();
		$('#wrapper, header, #encargos, #estadisticas').css({
			"-webkit-filter": "blur(0px)",
			"-moz-filter": "blur(0px)",
			"-ms-filter": "blur(0px)",
			"filter": "blur(0px)"
		});

	});

	$(document.body).on('click', '#submit', function() {

		event.preventDefault();
		var nombre = $('#nombre').val();
		var conejos = $('#conejo').val();
		if ( typeof conejos === "undefined" ) {
			$('#conejo').val("0");
		}
		var pollos = $('#pollos').val();
		if ( typeof pollos === "undefined" ) {
			$('#pollos').val("0");
		}
		var mediospollos = $('#mediospollos').val();
		if ( typeof mediospollos === "undefined" ) {
			$('#mediospollos').val("0");
		}
		var caliu = $('#caliu').val();
		if ( typeof caliu === "undefined" ) {
			$('#caliu').val("0");
		}
		var butifarras = $('#butifarras').val();
		if ( typeof butifarras === "undefined" ) {
			$('#butifarras').val("0");
		}
		var galtas = $('#galtas').val();
		if ( typeof galtas === "undefined" ) {
			$('#galtas').val("0");
		}
		var costillas = $('#costillas').val();
		if ( typeof costillas === "undefined" ) {
			$('#costillas').val("0");
		}
		var alioli = $('#alioli').val();
		if ( typeof alioli === "undefined" ) {
			$('#alioli').val("0");
		}

		var pies = $('#pies').val();
		if ( typeof pies === "undefined" ) {
			$('#alioli').val("0");
		}
		var notas = $('#notas').val();
		var hora = $('#hora').val();
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
		
		$('#tablas tbody').append('<tr class="row"><td class="name"></td><td class="order"></td><td class="extra"></td><td class="hour"></td><td class="notes"></td><td class="options"><div class="option hvr-pulse-grow option_otros"><span class="icon"></span>Editar</div><div class="option hvr-pulse-grow option_tachar"><span class="icon"></span>Tachar</div><div id="divseparado" class="option hvr-pulse-grow option_separado"><span class="icon"></span>Separar</div><div class="more_options"></div></td>');
		$('#tablas tbody .row:last-child .name').text(nombre);
		// Insertar pollos

		if (pollos == 1) {
			$('#tablas tbody .row:last-child .order').append('<span class="chicken">' +pollos+ '</span>' + ' pollo, ');
			var php_pollos = '<span class="chicken">' +pollos+ '</span>' + ' pollo, ';
		} else {
			if (pollos > 1) {
				$('#tablas tbody .row:last-child .order').append('<span class="chicken">' +pollos+ '</span>' + ' pollos, ');
				var php_pollos = '<span class="chicken">' +pollos+ '</span>' + ' pollos, ';
			}
		}

		if (conejos == 1) {
			$('#tablas tbody .row:last-child .order').append('<span class="rabbit">' +conejos+ '</span>' + ' conejo, ');
		} else {
			if (conejos > 1) {
				$('#tablas tbody .row:last-child .order').append('<span class="rabbit">' +conejos+ '</span>' + ' conejos, ');
			}
		}

		// Insertar medios pollos

		if (mediospollos == 1) {
			$('#tablas tbody .row:last-child .order').append('<span class="halfchicken">' +mediospollos+ '</span>' + '/2 pollo, ');
			var php_mediopollos = '<span class="halfchicken">' +mediospollos+ '</span>' + '/2 pollo, ';
		} else {
			if (mediospollos > 1) {
				$('#tablas tbody .row:last-child .order').append('<span class="halfchicken">' +mediospollos+ '</span>' + '/2 pollos, ');
				var php_mediopollos = '<span class="halfchicken">' +mediospollos+ '</span>' + '/2 pollos, ';
			}
		}

		// Insertar caliu

		if (caliu >= 1) {
			$('#tablas tbody .row:last-child .order').append('<span class="potatoes">' +caliu+ '</span>' + ' caliu, ');
			$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
			var php_caliu = '<span class="potatoes">' +caliu+ '</span>' + ' caliu, ';
		}

		// Insertar butifarras 

		if (butifarras == 1) {
			$('#tablas tbody .row:last-child .order').append('<span class="sausages">' +butifarras+ '</span>' + ' butifarra, ');
			$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
			var php_butifarras = '<span class="sausages">' +butifarras+ '</span>' + ' butifarra, ';
		} else {
			if (butifarras > 1) {
				$('#tablas tbody .row:last-child .order').append('<span class="sausages">' +butifarras+ '</span>' + ' butifarras, ');
				$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
				var php_butifarras = '<span class="sausages">' +butifarras+ '</span>' + ' butifarras, ';
			}
		}

		// Insertar galtas

		if (galtas == 1) {
			$('#tablas tbody .row:last-child .order').append('<span class="cheeks">' +galtas+ '</span>' + ' galta, ');
			$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
			var php_galtas = '<span class="cheeks">' +galtas+ '</span>' + ' galta, ';
		} else {
			if (galtas > 1) {
				$('#tablas tbody .row:last-child .order').append('<span class="cheeks">' +galtas+ '</span>' + ' galtas, ');
				$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
				var php_galtas = '<span class="cheeks">' +galtas+ '</span>' + ' galtas, ';
			}
		}

		// Insertar costillas

		if (costillas == 1) {
			$('#tablas tbody .row:last-child .order').append('<span class="ribs">' +costillas+ '</span>' + ' costilla, ');
			$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
		} else {
			if (costillas > 1) {
				$('#tablas tbody .row:last-child .order').append('<span class="ribs">' +costillas+ '</span>' + ' costillas, ');
				$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
			}
		}

		if (pies == 1) {
			$('#tablas tbody .row:last-child .order').append('<span class="foots">' +pies+ '</span>' + ' pie de cerdo, ');
			$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
		} else {
			if (pies > 1) {
				$('#tablas tbody .row:last-child .order').append('<span class="foots">' +pies+ '</span>' + ' pies de cerdo, ');
				$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
			}
		}

		if (alioli == 1) {
			$('#tablas tbody .row:last-child .order').append('<span class="alioli">' +alioli+ '</span>' + ' ali oli');
		} else {
			if (alioli > 1) {
				$('#tablas tbody .row:last-child .order').append('<span class="alioli">' +alioli+ '</span>' + ' ali olis');
			}
		}

		actualizar();

		$('#encargar').hide();
		$('#nombre').focus();
		$('#wrapper, header, #encargos, #estadisticas').css({
			"-webkit-filter": "blur(0px)",
			"-moz-filter": "blur(0px)",
			"-ms-filter": "blur(0px)",
			"filter": "blur(0px)"
		});

		var auxtext = "" +php_pollos+ "" +php_mediopollos+ "" +php_caliu+ "" +php_butifarras+ "" +php_galtas+ "";
		var reserva = jQuery("#reservar").serialize();
		var reserva = reserva + "&" + "auxtext=" +auxtext+ "";
		$.ajax({
			type: "POST",
			url: "reservar.php",
			data: reserva,
			cache: false
		});

		$('#reservar')[0].reset();

		$('.option_tachar').click(function() {
		$(this).parent(".options").find(".option_separado").removeClass("separado");
		$(this).parent(".options").parent(".row").css("text-decoration", "line-through").addClass("vendido");
		$(this).parent(".options").css("visibility", "hidden");
		$(this).parent(".options").find(".option_separado").contents().last()[0].textContent='Pedido Entregado!';
		$(this).parent(".options").find(".option_tachar, .option_otros").css('width', '10px');
		$(this).parent(".options").find(".option_separado").css({
			"width": "170px",
			"background-color": "rgb(31, 207, 0)",
			"visibility": "visible"
		});
		$(this).parent(".options").find(".option_separado").addClass("success");
		$(this).parent(".options").find(".option_separado").find('.icon').css({
			background: 'url("ok.png")',
			height: "12px",
			width: "12px",
			top: "7px",
			left: "9px",
			'background-size': "cover"
		});
		$(this).parent(".options").parent(".row").find('.order').find('span').removeClass("chicken halfchicken potatoes sausages cheeks ribs rabbits alioli");
		var tacha = $(this).parent(".options").parent(".row").find(".name").text();
		var tacha = "tacha=" + tacha;
		$.ajax({
			type: "POST",
			url: "tachado.php",
			data: tacha,
			cache: false
		});
		actualizar();
	});

	$('.option_separado').click(function() {
		if (!$(this).parent(".options").parent(".row").hasClass("tachado")) {
			if (!$(this).hasClass("success")) {
				$(this).find('.icon').css({
					background: 'url("ok.png")',
					height: "12px",
					width: "12px",
					top: "7px",
					left: "9px",
					'background-size': "cover"
				});
				$(this).css({
					"background-color": "rgb(31, 207, 0)",
					"width": "110px"
				});

				var index = $(this).parent(".options").parent(".row").index() + 1;

				$(this).contents().last()[0].textContent='Separado!';

				actualizar();

				var name = $(this).parent(".options").parent(".row").find(".name").text();
				var name = "name=" + name;
				$.ajax({
					type: "POST",
					url: "separado.php",
					data: name,
					cache: false
				});
			}
		}
	});

		if ( pagado == 1 ) {
			$('#tablas tbody .row:last-child .extra').append("Pagado");
		}

		$('#tablas tbody .row:last-child .notes').append(notas);

		$('#tablas tbody .row:last-child .hour').append(hora);

		$('#encargar').hide();
		$('#nombre').focus();
		$('#wrapper, header, #encargos, #estadisticas').css({
			"-webkit-filter": "blur(0px)",
			"-moz-filter": "blur(0px)",
			"-ms-filter": "blur(0px)",
			"filter": "blur(0px)"
		});

		$('#reservar')[0].reset();

		mostrar_lupa();

		$('.magnify-icon').click(function() {
		var magnifyit = $(this).parent(".magnify").parent(".row").find(".name, .order, .extra, .hour, .notes");
		magnifyit.animate({
			zoom: '1.2'
		});
		setTimeout(function() {
			magnifyit.animate({
				zoom: '1'
			});
		}, 5000);
	});

	});

	actualizar();

});

$(document.body).on('click', '.option_tachar', function() {
	$(this).parent(".options").find(".option_separado").removeClass("separado");
	$(this).parent(".options").parent(".row").css("text-decoration", "line-through").addClass("vendido");
	$(this).parent(".options").css("visibility", "hidden");
	$(this).parent(".options").find(".option_separado").contents().last()[0].textContent='Pedido Entregado!';
	$(this).parent(".options").find(".option_tachar, .option_otros").css('width', '10px');
	$(this).parent(".options").find(".option_separado").css({
		"width": "170px",
		"background-color": "rgb(31, 207, 0)",
		"visibility": "visible"
	});
	$(this).parent(".options").find(".option_separado").addClass("success");
	$(this).parent(".options").find(".option_separado").find('.icon').css({
		background: 'url("ok.png")',
		height: "12px",
		width: "12px",
		top: "7px",
		left: "9px",
		'background-size': "cover"
	});
	$(this).parent(".options").parent(".row").find('.order').find('span').removeClass("chicken halfchicken potatoes sausages cheeks ribs rabbit alioli");
	var tacha = $(this).parent(".options").parent(".row").find(".name").text();
	var tacha = "tacha=" + tacha;
	$.ajax({
		type: "POST",
		url: "tachado.php",
		data: tacha,
		cache: false
	});
	actualizar();
});

$(document.body).on('click','.option_separado',  function() {
	if (!$(this).parent(".options").parent(".row").hasClass("tachado")) {
		if (!$(this).hasClass("success")) {
			$(this).find('.icon').css({
				background: 'url("ok.png")',
				height: "12px",
				width: "12px",
				top: "7px",
				left: "9px",
				'background-size': "cover"
			});
			$(this).css({
				"background-color": "rgb(31, 207, 0)",
				"width": "110px"
			});

			var index = $(this).parent(".options").parent(".row").index() + 1;

			$(this).contents().last()[0].textContent='Separado!';

			actualizar();

			var name = $(this).parent(".options").parent(".row").find(".name").text();
			var name = "name=" + name;
			$.ajax({
				type: "POST",
				url: "separado.php",
				data: name,
				cache: false
			});
		}
	}
});

function sticky() {
	var scroll = $(window).scrollTop();
	if (scroll > 115) {
		$('#titles').css({
			position: "fixed",
			top: "0px",
			left: "10px"
		});
		$('#tablas').css({
			"margin-top": "35px"
		});
	} else {
		$('#titles').css({
			position: "relative",
			top: "0px",
			left: "0px"
		});
		$('#tablas').css({
			"margin-top": "5px"
		});
	}
}

window.addEventListener("scroll", sticky);

$(document).ready(function() {

	$('#date_submit').click(function() {

		var date = $('#select_date').val();
		var datephp = 'date&' + date;
		$.ajax({
			type: "POST",
			url: "new.php",
			cache: false
			});
		alert("ok");

	});

});

$(document.body).on('click', '.option_otros', function() {
	$('.editar').show();
	var index = $(this).parent(".options").parent(".row").index() + 1;
	var name = $(this).parent(".options").parent(".row").find(".name").text();
	var serialized = 'name=' + name;
	$.ajax({
		type: "GET",
		url: "retrieve_data_from_edit.php",
		data: serialized,
		cache: false,
		dataType: 'json',
		success: function(data) {
			var rName = data[0];
			var rConejos = data[1];
			var rPollos = data[2];
			var rMPollos = data[3];
			var rCaliu = data[4];
			var rButifarras = data[5];
			var rGaltas = data[6];
			var rCostillas = data[7];
			var rPies = data[8];
			var rAlioli = data[9];
			var rHora = data[10];
			var rNotas = data[11];
			var rPagado = data[12];
			var rSeparado = data[13];
			$('#nombre2').val(rName);
			$('#conejo2').val(rConejos);
			$('#hora2').val(rHora);
			$('#pollos2').val(rPollos);
			$('#mediospollos2').val(rMPollos);
			$('#caliu2').val(rCaliu);
			$('#butifarras2').val(rButifarras);
			$('#galtas2').val(rGaltas);
			$('#pies2').val(rPies);
			$('#costillas2').val(rCostillas);
			$('#pies2').val(rPies);
			$('#alioli2').val(rAlioli);
			$('#hora2').val(rHora);
			$('#notas2').val(rNotas);
			if (rPagado == "on") {
				$('#pagado2').prop('checked', true);
			} else {
				$('#pagado2').prop('checked', false);
			}
		}
	});
$(document.body).on('click','#submit2',  function() {

		event.preventDefault();

		$('#nombre2').prop('disabled', false);

		var editarForm = jQuery(".editar_reserva").serialize();
		$.ajax({
			type: "POST",
			url: "editar.php",
			data: editarForm ,
			cache: false
		});
		var container = $('#tablas tbody .row:nth-child(' + index + ')');
		$('.editar').hide();
		var nombre = $('#nombre2').val();
		var hora = $('#hora2').val();
		var pollos = $('#pollos2').val();
		var mediospollos = $('#mediospollos2').val();
		var caliu = $('#caliu2').val();
		var butifarras = $('#butifarras2').val();
		var galtas = $('#galtas2').val();
		var pies = $('#pies2').val();
		var costillas = $('#costillas2').val();
		var alioli = $('#alioli2').val();
		var conejos = $('#conejo2').val();
		var notas = $('#notas2').val();
		var nombre = $('#pollos2').val();
		if ($('#pagado2').is(':checked')) {
			container.find(".extra").text("Pagado");
		} else {
			container.find(".extra").text("");
		}
		container.find(".order").text("");
		container.find(".notes").text(notas);
		container.find(".hour").text(hora);

		if (pollos == 1) {
			container.find(".order").append('<span class="chicken">' +pollos+ '</span>' + ' pollo, ');
			var php_pollos = '<span class="chicken">' +pollos+ '</span>' + ' pollo, ';
		} else {
			if (pollos > 1) {
				container.find(".order").append('<span class="chicken">' +pollos+ '</span>' + ' pollos, ');
				var php_pollos = '<span class="chicken">' +pollos+ '</span>' + ' pollos, ';
			}
		}

		if (conejos == 1) {
			container.find(".order").append('<span class="rabbit">' +conejos+ '</span>' + ' conejo, ');
		} else {
			if (conejos > 1) {
				container.find(".order").append('<span class="rabbit">' +conejos+ '</span>' + ' conejos, ');
			}
		}

		// Insertar medios pollos

		if (mediospollos == 1) {
			container.find(".order").append('<span class="halfchicken">' +mediospollos+ '</span>' + '/2 pollo, ');
			var php_mediopollos = '<span class="halfchicken">' +mediospollos+ '</span>' + '/2 pollo, ';
		} else {
			if (mediospollos > 1) {
				container.find(".order").append('<span class="halfchicken">' +mediospollos+ '</span>' + '/2 pollos, ');
				var php_mediopollos = '<span class="halfchicken">' +mediospollos+ '</span>' + '/2 pollos, ';
			}
		}

		// Insertar caliu

		if (caliu >= 1) {
			container.find(".order").append('<span class="potatoes">' +caliu+ '</span>' + ' caliu, ');
			$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
			var php_caliu = '<span class="potatoes">' +caliu+ '</span>' + ' caliu, ';
		}

		// Insertar butifarras 

		if (butifarras == 1) {
			container.find(".order").append('<span class="sausages">' +butifarras+ '</span>' + ' butifarra, ');
			$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
			var php_butifarras = '<span class="sausages">' +butifarras+ '</span>' + ' butifarra, ';
		} else {
			if (butifarras > 1) {
				container.find(".order").append('<span class="sausages">' +butifarras+ '</span>' + ' butifarras, ');
				$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
				var php_butifarras = '<span class="sausages">' +butifarras+ '</span>' + ' butifarras, ';
			}
		}

		// Insertar galtas

		if (galtas == 1) {
			container.find(".order").append('<span class="cheeks">' +galtas+ '</span>' + ' galta, ');
			$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
			var php_galtas = '<span class="cheeks">' +galtas+ '</span>' + ' galta, ';
		} else {
			if (galtas > 1) {
				container.find(".order").append('<span class="cheeks">' +galtas+ '</span>' + ' galtas, ');
				$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
				var php_galtas = '<span class="cheeks">' +galtas+ '</span>' + ' galtas, ';
			}
		}

		// Insertar costillas

		if (costillas == 1) {
			container.find(".order").append('<span class="ribs">' +costillas+ '</span>' + ' costilla, ');
			$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
		} else {
			if (costillas > 1) {
				container.find(".order").append('<span class="ribs">' +costillas+ '</span>' + ' costillas, ');
				$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
			}
		}

		if (pies == 1) {
			container.find(".order").append('<span class="foots">' +pies+ '</span>' + ' pie de cerdo, ');
			$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
		} else {
			if (pies > 1) {
				container.find(".order").append('<span class="foots">' +pies+ '</span>' + ' pies de cerdo, ');
				$('#tablas tbody .row:last-child .options .option_separado').css("visibility", "visible");
			}
		}

		if (alioli == 1) {
			container.find(".order").append('<span class="alioli">' +alioli+ '</span>' + ' ali oli');
		} else {
			if (alioli > 1) {
				container.find(".order").append('<span class="alioli">' +alioli+ '</span>' + ' ali olis');
			}
		}

		$('.editar_reserva')[0].reset();
		actualizar();
		$('#nombre2').prop('disabled', true);
	});
});



$('#cerrar_editar').click(function() {
	$('.editar').hide();
	$('.editar_reserva')[0].reset();
});

$('#mediospollos2').keydown(function() {
	var tecla = $(this).val();
	if ( tecla >= 2 ) {
		$(this).val("1");
	}
});

$('#mediospollos2').keyup(function() {
	var tecla = $(this).val();
	if ( tecla >= 2 ) {
		$(this).val("1");
	}
});

$(document).ready(function() {
	$('#borrar_encargos').click(function() {
		if (confirm('¿Seguro que quiere borrar todos los encargos?')) {
			if (confirm('¿Estas completamente seguro?')) {
				$.ajax({
					type: "GET",
					url: "borrar_encargos.php",
					success: function(){
						location.reload();
					}
				});
			} else {
				return false;
			}
		} else {
			return false;
		}
	});
	//$(document.body).on('click', '.row', function() {
	//	if ($(this).attr("style") == "color: rgb(255, 255, 255); background-color: rgb(30, 115, 190);") {
	//		$(this).removeAttr("style");
	//	} else {
	//		$(this).css({
	//			"background-color": "rgb(30, 115, 190)",
	//			"color": "white"
	//		});
	//	}
	//});
});

$(document).keydown(function(e){
    var code = (e.keyCode? e.keyCode : e.charCode);
    if ( code == 18 ) {
    	event.preventDefault();
    	$('#search').val("").blur();
    	$.ajax({
			type: "GET",
			url: "get_rows_without.php",
			cache: false,
			success: function(data) {
				var tabla = $('#tablas tbody');
				tabla.empty();
				tabla.html(data);
				$('tr.tachado .options .option_separado .separar_texto').text("Pedido entregado!");
				actualizar();
				mostrar_lupa();
			}
		});
    }
    if ( code == 107 ) {
    	event.preventDefault();
    	$('#encargar').show();
		$('#nombre').focus();
		$('#wrapper, header, #encargos, #estadisticas').css({
			"-webkit-filter": "blur(5px)",
			"-moz-filter": "blur(5px)",
			"-ms-filter": "blur(5px)",
			"filter": "blur(5px)"
		});
    }
    if ( code == 27 ) {
    	event.preventDefault();
    	$('#encargar').hide();
		$('#nombre').focus();
		$('#wrapper, header, #encargos, #estadisticas').css({
			"-webkit-filter": "blur(0px)",
			"-moz-filter": "blur(0px)",
			"-ms-filter": "blur(0px)",
			"filter": "blur(0px)"
		});
    }
    if ( code == 17 ) {
    	$('#search').focus();
    	$('html, body').animate({ scrollTop: 0 }, 0);
    }
});

$('#search').keyup(function() {
	if ( $('#search').val() != "" ) {
		var termino = $('#search').val();
		var busqueda = "termino=" + termino;
		$.ajax({
			type: "GET",
			url: "get_rows_search.php",
			data: busqueda,
			cache: false,
			success: function(data) {
				var tabla = $('#tablas tbody');
				tabla.empty();
				tabla.html(data);
				$('tr.tachado .options .option_separado .separar_texto').text("Pedido entregado!");
				actualizar();
				mostrar_lupa();
			}
		});
	} else {
		$.ajax({
			type: "GET",
			url: "get_rows_without.php",
			cache: false,
			success: function(data) {
				var tabla = $('#tablas tbody');
				tabla.empty();
				tabla.html(data);
				$('tr.tachado .options .option_separado .separar_texto').text("Pedido entregado!");
				actualizar();
				mostrar_lupa();
			}
		});
	}

});