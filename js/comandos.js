var commandsList = 
	[
		{ "command":"ayuda", "description":"Muestra todos los comandos disponibles" },
		{ "command":"clear", "description":"Limpia la terminal" },
		{ "command":"cruza()", "description":"Realiza la cruza de dos puntos de las inversiones" },
		{ "command":"funcionAptitud()", "description":"Calcula la función de aptitud" },
		{ "command":"hacerInversiones()", "description":"Genera las inversiones aleatoriamente" },
		{ "command":"representacionBinaria()", "description":"Muestra la representación binaria de la inversión" },
		{ "command":"start", "description":"Start the GUI to see everything even better" }
	];
var showHelp = function() {
	var mensajes = $("#mensajes");
	var tabla = "<table><thead><tr><th>Comando&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Descripción</th></tr></thead>";

	for (var i in commandsList) {
		tabla += "<tr><td>" + commandsList[i].command + "</td><td>" + commandsList[i].description + "</td></tr>";
	};

	tabla += "</table>";
	mensajes.append(tabla);
};
var showBinario = function() {
	var mensajes = $("#mensajes");
	var texto = "Representación binaria: [";

	for (i in inversiones)
			texto = texto + "[" + inversionesBin[i] + "]";
		texto = texto + "]<br>";
	
	mensajes.append(texto);
};
var showCruza = function() {
	cruza();
	showBinario();
};
var showInversiones = function(modificar) {
	var mensajes = $("#mensajes");
	if (!modificar) {
		var texto = "Inversiones: [";
		for (i in inversiones)
			texto = texto + "[" + inversiones[i] + "]";
		texto = texto + "]<br>";
	}
	else {
		hacerInversiones();
		showInversiones(false);
	}
	mensajes.append(texto);
};
var showFuncionAptitud = function() {
	var mensajes = $("#mensajes");
	var texto = "Beneficios: [";

	funcionAptitud();

	showInversiones(false);
	for (b in beneficiosPorInversion)
		texto = texto + "[" + beneficiosPorInversion[b] + "]";
	texto = texto + "]<br>"

	mensajes.append(texto);
};
$(document).ready(function() {
	var comando = $("#comando");
	comando.keydown(function(event) {
		/* Act on the event */
		if(event.keyCode == 13) {
			var input = "Error. Comando no reconocido. Ingresa 'ayuda' para ver todos los  comandos disponibles.";
			if (comando.val() == "hacerInversiones()") {
				showInversiones(true)
				input = "";
			}
			else if (comando.val() == "funcionAptitud()") {
				showFuncionAptitud();
				input = "";
			}
			else if (comando.val() == "ayuda") {
				showHelp();
				input = "";
			}
			else if (comando.val() == "representacionBinaria()") {
				showBinario();
				input = "";
			}
			else if (comando.val() == "start")
				input = comando.val();
			else if (comando.val() == "clear") {
				$("#mensajes").empty();
				comando.val("")
				return;
			}
			else if (comando.val() == "cruza()") {
				showCruza();
				input = "";
			}
			input = input + "<br>";
			$("#mensajes").append(input);
			comando.val("");
			$(document).scrollTop($(document).height());
		}
	});;
});