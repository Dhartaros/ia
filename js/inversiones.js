var inversiones = [];
var inversionesBin = [];
var beneficios = 
	[
		{
			"inversion":"1", "beneficios":
				[
					{
						"beneficio":"0.28"
					},
					{
						"beneficio":"0.25"
					},
					{
						"beneficio":"0.15"
					},
					{
						"beneficio":"0.20"
					}
				]
		},
		{
			"inversion":"2", "beneficios":
				[
					{
						"beneficio":"0.45"
					},
					{
						"beneficio":"0.41"
					},
					{
						"beneficio":"0.25"
					},
					{
						"beneficio":"0.33"
					}
				]
		},
		{
			"inversion":"3", "beneficios":
				[
					{
						"beneficio":"0.65"
					},
					{
						"beneficio":"0.55"
					},
					{
						"beneficio":"0.40"
					},
					{
						"beneficio":"0.42"
					}
				]
		},
		{
			"inversion":"4", "beneficios":
				[
					{
						"beneficio":"0.78"
					},
					{
						"beneficio":"0.65"
					},
					{
						"beneficio":"0.50"
					},
					{
						"beneficio":"0.48"
					}
				]
		},
		{
			"inversion":"5", "beneficios":
				[
					{
						"beneficio":"0.90"
					},
					{
						"beneficio":"0.75"
					},
					{
						"beneficio":"0.62"
					},
					{
						"beneficio":"0.53"
					}
				]
		},
		{
			"inversion":"6", "beneficios":
				[
					{
						"beneficio":"1.02"
					},
					{
						"beneficio":"0.80"
					},
					{
						"beneficio":"0.73"
					},
					{
						"beneficio":"0.56"
					}
				]
		},
		{
			"inversion":"7", "beneficios":
				[
					{
						"beneficio":"1.13"
					},
					{
						"beneficio":"0.85"
					},
					{
						"beneficio":"0.82"
					},
					{
						"beneficio":"0.58"
					}
				]
		},
		{
			"inversion":"8", "beneficios":
				[
					{
						"beneficio":"1.24"
					},
					{
						"beneficio":"0.88"
					},
					{
						"beneficio":"0.90"
					},
					{
						"beneficio":"0.60"
					}
				]
		},
		{
			"inversion":"9", "beneficios":
				[
					{
						"beneficio":"1.32"
					},
					{
						"beneficio":"0.90"
					},
					{
						"beneficio":"0.96"
					},
					{
						"beneficio":"0.60"
					}
				]
		},
		{
			"inversion":"10", "beneficios":
				[
					{
						"beneficio":"1.38"
					},
					{
						"beneficio":"0.90"
					},
					{
						"beneficio":"1.0"
					},
					{
						"beneficio":"0.60"
					}
				]
		}
	];
/* decToBin(dec) recibe un número decimal y devuelve su representación binaria */
var decToBin = function(dec) {
	bin = (dec >>> 0).toString(2);
	if (bin.length < 2) 
		bin = "000" + bin;
	else if (bin.length < 3)
		bin = "00" + bin;
	else if (bin.length < 4)
		bin = "0" + bin;
	else 
		(dec >>> 0).toString(2);
	return bin;
};
/* hacerInversiones() inserta en la variable inversiones cuatro números al azar entre 1 y 10 */
var hacerInversiones = function() {
	for(var i = 0; i < 4; i++) {
		inversiones[i] = Math.floor((Math.random() * 10) + 1);
		inversionesBin[i] = decToBin(inversiones[i]);
	}
};
/* funcionAptitud() regresa la función de aptitud de la inversión */
var funcionAptitud = function() {
	var sumaBeneficios = 0;
	var sumaInversiones = 0;
	for (var i in inversiones) {
		/* 
			La variable inversión toma el valor de la inversión para usarla como índice de beneficios,
			luego se considera la variable i como el beneficio de cada zona comercial (I, II, III y IV)
			y se convierte el string en un float.

			De ahí se van sumando los valores para poder regresar la función de aptitud.
		*/
		var inversion = inversiones[i];
		var beneficio = parseFloat(beneficios[inversion - 1].beneficios[i].beneficio);
		sumaBeneficios = sumaBeneficios + beneficio;
		sumaInversiones = sumaInversiones + inversion;
	}
	return sumaBeneficios / (500 * (Math.abs(sumaInversiones - 10) + 1));
};