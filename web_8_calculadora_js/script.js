var numero1
var numero2 
var operador


function escribir(n){
    display= document.getElementById("display");
    display.value = display.value + n;
}

function operar(op){
    if (op != "="){
         operador =op;
         display = document.getElementById("display");
         numero1 = display.value;
         display.value=""
    } else{
        display =document.getElementById("display");
        resul= document.getElementById("display_resultado");
        numero2= display.value;
        resul.value= eval(numero1 + operador + numero2);
       
    }
   
}

function limpiar(l){
    display.value=""
}
