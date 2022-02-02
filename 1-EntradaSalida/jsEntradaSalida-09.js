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
	
	// Hago la cuenta para obtener el aumento del 10%
	aumento = parseInt(sueldo) * 0.10;

	// A traves de ID le asigno value a la variable resultado y ese value es = al sueldo + aumento
	resultado = document.getElementById("txtIdResultado").value =  parseInt(sueldo) + aumento;

	
}
