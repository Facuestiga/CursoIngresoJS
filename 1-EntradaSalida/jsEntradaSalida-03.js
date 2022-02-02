/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre; //nombre es mi variable

	nombre = document.getElementById("txtIdNombre").value; //le asigno a la variable nombre, el valor del id (la caja de texto)

	alert(nombre); //muestra lo que se asigno en la variable nombre


}


