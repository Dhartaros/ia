var commandsList = 
	[
		{ "command":"ayuda", "description":"Muestra todos los comandos disponibles" },
		{ "command":"clear", "description":"Limpia la terminal" },
		{ "command":"funcionAptitud()", "description":"Calcula la función de aptitud" },
		{ "command":"hacerInversiones()", "description":"Genera las inversiones aleatoriamente" },
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
	var texto = "Representación binaria: [" + inversionesBin + "]<br>";
	
	mensajes.append(texto);
};
var showInversiones = function(modificar) {
	var mensajes = $("#mensajes");
	var texto = "";
	if (!modificar)
		texto = "Inversiones: [" + inversiones + "]<br>";
	else
		texto = "Inversiones: [" + hacerInversiones() + "]<br>";
	
	mensajes.append(texto);
};
var showFuncionAptitud = function() {
	var mensajes = $("#mensajes");
	var texto = "La función de aptitud de la inversión es " + funcionAptitud();
	
	showInversiones(false);
	mensajes.append(texto);
};
$(document).ready(function() {
	var comando = $("#comando");
	comando.keydown(function(event) {
		/* Act on the event */
		if(event.keyCode == 13) {
			var input = "Error. Command not recognized. Type 'help' to see all available commands.";
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
			input = input + "<br>";
			$("#mensajes").append(input);
			comando.val("");
			$(document).scrollTop($(document).height());
		}
	});;
});