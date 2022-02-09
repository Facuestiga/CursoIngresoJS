/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	
	
	let numero1;
	let numero2;
	let suma;

	numero1 = document.getElementById("txtIdNumeroUno").value;
	numero2 = document.getElementById("txtIdNumeroDos").value;

	// parseInt -> valida que lo que estoy poniendo () es un NUMERO, por lo tanto se ejecuta la suma "+"
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	
	suma = numero1 + numero2;

	alert("La suma es igual a " +suma);

}

