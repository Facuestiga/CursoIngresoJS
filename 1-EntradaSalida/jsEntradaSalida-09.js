/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let resultado;

	sueldo = document.getElementById("txtIdSueldo").value;
	
	sueldo = parseInt(sueldo);
	// Hago la cuenta para obtener el aumento del 10%
	
	aumento = sueldo * 0.10;

	aumento = parseInt(aumento);

	// A traves de ID le asigno value a la variable resultado y ese value es = al sueldo + aumento
	resultado = aumento + sueldo;

	document.getElementById("txtIdResultado").value = resultado;

	

	
}
