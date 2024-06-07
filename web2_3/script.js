
function convertir(){
    moneda1= document.getElementById("moneda1").value;
    moneda2 = document.getElementById("moneda2").value;
    cantidad=document.getElementById("monto").value;
    visor=document.getElementById("resultado");
    resultado=0;
    if(moneda1 == "usd" && moneda2 == "gs"){
        resultado = cantidad * 7300;
    } else if(moneda1 == "rbr" && moneda2 == "gs"){
        resultado = cantidad * 1400;
    }else if(moneda1 == "par"&&moneda2 == "gs"){
        resultado = cantidad * 7;
    }else{
        resultado=0
    }
    visor.value =  resultado;
}

document.querySelector("#btn-convertir").addEventListener("click", convertir);