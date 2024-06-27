


let darkMode = false;
function cambiar_tema(){
    const container = document.querySelector('.container');
    const temas =document.querySelectorAll('.tema')
    if (darkMode){
        container.classList.remove('theme-dark');
        container.classList.add('theme-light');

        temas.forEach(tema => tema.classList.remove('theme-dark'));
                        }else{
        container.classList.remove('theme-light');
        container.classList.add('theme-dark')
        temas.forEach(tema => tema.classList.add('theme-dark'));
        }
        darkMode = !darkMode
        }

$(function(){
   
    var num1 = '0';
    var num2 = '0';
    var operador = '';
    var resultado = '';


    var display = $('#display');
    var display_resultado = $('#display_resultado');

    $('.Keyboard, calcular').on('click', function(e){
        switch(e.target.id){
            case '1':
                agregarDigito('1');
                break;
            case '+':
                agregarOperador('+')
                break;
            case 'igual':
                
                calcular();
                break;
        }
    });
    $('.numero').click(function(){
        var digito = $ (this).text();
        $('#display').val($('#display').val()+digito);
            num1 = $('#display').val();
     });

     $('.operador').click(function(){
        operador = $(this).text();
        $('#display').val ('');
     });
   
    
     function calcular(){
        num2 = display.val();
        if (num1 === '' || num2 === '' || operador === ''){
            alert('Ingrese valores válidos')
        } else{
            resultado = (eval(num1 + operador + num2));
            document.getElementById('display_resultado').textContent = resultado;
            display_resultado.val(resultado);
        }
       
    }    

    $("#igual").click(function(){
        calcular();
    }
        
    );

});

function limpiar(){
    display.value = "";
    document.getElementById('display').value = '';
}

