var inversiones = [];
var inversionesBin = [];
var beneficiosPorInversion = [];
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
/* cruza() realiza la cruza de dos puntos y lo guarda en los arreglos de inversiones */
var cruza = function() {
	for (i in inversionesBin) {
		/* Inicialización de probabilidades */
		var probabilidadCruza = Math.random();
		var probabilidadMutacion = 0;
		/* Intento de cruza de los primeros padres */
		if (probabilidadCruza <= 0.8) {
			var subP1S1 = inversionesBin[i][0].substr(0,1);
			var subP1S2 = inversionesBin[i][0].substr(1,2);
			var subP1S3 = inversionesBin[i][0].substr(3);
			var subP2S1 = inversionesBin[i][1].substr(0,1);
			var subP2S2 = inversionesBin[i][1].substr(1,2);
			var subP2S3 = inversionesBin[i][1].substr(3);

			inversionesBin[i][0] = subP1S1 + subP2S2 + subP1S3;
			inversionesBin[i][1] = subP2S1 + subP1S2 + subP2S3;

			var probabilidadMutacion = Math.random();
			if (probabilidadMutacion <= 0.01)
				mutacion(i);
			probabilidadMutacion = Math.random();
			if (probabilidadMutacion <= 0.01) {

			}
		}
		/* Intento de cruza de los padres restantes */
		probabilidadCruza = Math.random();
		probabilidadMutacion = Math.random();
		if (probabilidadCruza <= 0.8) {
			subP1S1 = inversionesBin[i][2].substr(0,1);
			subP1S2 = inversionesBin[i][2].substr(1,2);
			subP1S3 = inversionesBin[i][2].substr(3);
			subP2S1 = inversionesBin[i][3].substr(0,1);
			subP2S2 = inversionesBin[i][3].substr(1,2);
			subP2S3 = inversionesBin[i][3].substr(3);

			inversionesBin[i][2] = subP1S1 + subP2S2 + subP1S3;
			inversionesBin[i][3] = subP2S1 + subP1S2 + subP2S3;
		}
	}
};
/* mutacion() intercambia las posiciones de los caracteres */
var mutacion = function(indice) {
	var posicionInicial = Math.floor((Math.random() * 8));
	var posicionFinal = posicionInicial;
	do {
		posicionFinal = Math.floor((Math.random() * 8));
	} while(posicionFinal == posicionInicial);
	/* Si el caracter se moverá a una posición que esté más adelante */
	if (posicionFinal > posicionInicial) {
		for (var i = posicionInicial; i < 4; i++) {
			if ((i+1) == 4 || i == posicionFinal)
				break;
			var aux = inversionesBin[indice][0].charAt(i);
			/* Se invierten los caracteres */
			inversionesBin[indice][0].charAt(i) = inversionesBin[indice][0].charAt(i+1);
			inversionesBin[indice][0].charAt(i+1) = aux;
		}
	}
	/* Si el caracter se moverá a una posición que esté más atrás */
	else {
		for (var i = posicionInicial; i >= 0; i--) {
			if ((i-1) < 0 || i == posicionFinal)
				break;
			var aux = inversionesBin[indice][0].charAt(i);
			/* Se invierten los caracteres */
			inversionesBin[indice][0].charAt(i) = inversionesBin[indice][0].charAt(i-1);
			inversionesBin[indice][0].charAt(i-1) = aux;
		}	
	}
}
/* hacerInversiones() inserta en la variable inversiones cuatro números al azar entre 1 y 10 */
var hacerInversiones = function() {
	var i, j;
	for(i = 0; i < 50; i++) {
		inversiones[i] = [];
		inversionesBin[i] = [];
		for (j = 0; j < 4; j++) {
			inversiones[i][j] = Math.floor((Math.random() * 10) + 1);
			inversionesBin[i][j] = decToBin(inversiones[i][j]);
		}
	}
	return inversiones;
};
/* funcionAptitud() regresa la función de aptitud de la inversión */
var funcionAptitud = function() {
	if (inversiones.length == 0)
		hacerInversiones();
	for (var i in inversiones) {
		/* 
			La variable inversión toma el valor de la inversión para usarla como índice de beneficios,
			luego se considera la variable i como el beneficio de cada zona comercial (I, II, III y IV)
			y se convierte el string en un float.

			De ahí se van sumando los valores para poder regresar la función de aptitud.
		*/
		var sumaBeneficios = 0;
		var sumaInversiones = 0;
		beneficiosPorInversion[i] = [];
		for (var j in inversiones[i]){
			var inversion = inversiones[i][j];
			var beneficio = parseFloat(beneficios[inversion - 1].beneficios[j].beneficio);
			sumaBeneficios = sumaBeneficios + beneficio;
			sumaInversiones = sumaInversiones + inversion;
		}
		var beneficio = sumaBeneficios / (500 * (Math.abs(sumaInversiones - 10) + 1));
		beneficiosPorInversion[i] = beneficio;	
	}
};