/* Se piden tres nombre de producto, y los precios de cada  producto ingresado, sacar el precio bruto (la suma de los tres sin impuestos), 
 el promedio de los precios y el precio final total más iva (21%), pedir un porcentaje de descuento y aplicarlo al precio final, 
 mostrar todos los datos calculados e ingresados por alert. (solo un alert en el código) */

// sacar precio bruto
// promedio de los precios
// precio total mas IVA
// pedir porcentaje del descuento y aplicarlo al precio final
 
function mostrar()
 {
	let diametroMayorCms;
	let diametroMenorCms;
	let ladoMenorCms;
	let ladoMayorCms;
	let diametroMayorMts;
	let diametroMenorMts;
	let ladoMayorMts;
	let ladoMenorMts;
	let mtsVarilla;
	let mtsVarillaTotal;
	let mtsPapel;
	let mtsPapelTotal;
	let perimetro
	let area;
	let cola;
	let mensaje;

	diametroMayorCms = prompt("Ingrese medida del diametro mayor");
	diametroMayorCms = parseFloat(diametroMayorCms);
	diametroMenorCms = prompt("Ingrese medida del diametro menor");
	diametroMenorCms = parseFloat(diametroMenorCms);
	ladoMayorCms = prompt("Ingrese medida lado mayor");
	ladoMayorCms = parseFloat(ladoMayorCms);
	ladoMenorCms = prompt("Ingrese medida lado menor");
	ladoMenorCms = parseFloat(ladoMenorCms);

	diametroMayorMts = diametroMayorCms/100;
	diametroMenorMts = diametroMenorCms/100;
	ladoMayorMts = ladoMayorCms/100;
	ladoMenorMts = ladoMenorCms/100;
	
	perimetro = (ladoMayorMts + ladoMenorMts)*2;
	area = (diametroMayorMts * diametroMenorMts)/2; 
	cola = area * 10/100;
	mtsPapel = area + cola;
	mtsPapelTotal = mtsPapel * 10;

	mtsVarilla = perimetro + diametroMayorMts + diametroMenorMts; //mtsVarilla por cada cometa
	mtsVarillaTotal = mtsVarilla * 10;

	
	mensaje = "Se necesitan comprar " + mtsVarillaTotal + " metros de varilla y " + mtsPapelTotal + " metros de papel para fabricar 10 cometas";
	alert(mensaje);

}	