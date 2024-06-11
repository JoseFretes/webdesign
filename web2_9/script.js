
const numero = document.getElementById("number");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");


calcular.addEventListener("click",() =>{
    const num = parseInt(numero.value);
    resultado.value = "";
    if (isNaN(num)) {
        alert("Por favor, introduce un número válido.");
        return
        
    }else if (num > 10, num < 0){
        alert("El número ingresado debe ser de entre 1 y 10, no puede ser nagativo");
        return
    }
    var tablam = "";
    for (var i = 1; i <= 10; i++) {
        let res = num * i;
        tablam = num + " x " + i+ " = " +  res + "\n";
        resultado.value +=  tablam;
    }

    
    
});

