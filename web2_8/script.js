function comprobar(){
    const number = 
parseInt(document.getElementById("number").value);
            const visor = document.getElementById("resultado");
        let resultado ="";

        if(number%2===0){
    resultado = ('El número ingresado es par');
    }else{
        resultado = ('El número es impar');
    }
   visor.textContent = resultado;
    }

    document.querySelector("#comprobar").addEventListener("click", comprobar);
   