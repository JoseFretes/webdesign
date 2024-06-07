var num = 1;
var suma = 0;

while (num !== 0) {
    num = parseInt(prompt("Ingresa un número (ingresa 0 para finalizar):", ""));
    suma += num;
}

alert("La suma total es: " + suma);