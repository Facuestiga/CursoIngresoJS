/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let resultado;

	importe = document.getElementById("txtIdImporte").value;

	//// Hago la cuenta para obtener el descuento del 25%
	descuento = parseInt(importe) * 0.25;

	// A traves de ID le asigno value a la variable resultado y ese value es = sueldo - descuento
	resultado = document.getElementById("txtIdResultado").value = parseInt(importe) - descuento;


}
