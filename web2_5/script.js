function cambiar_estilo(elem) {
    elem.style.background = '#1c542d';
    elem.style.color = 'white'
  }
  
  function restablecer(elemId) {
    //recuperar todos los elementos
    elem = document.getElementById(elemId);
    elem.style.background = 'white';
    elem.style.color = 'black'
  }

  function cambiar_estilo2(elem){
      elem.style.background= 'white'
      elem.style.color= '#1c542d'
  }

  function restablecer2(elemId){
    elem = document.getElementById(elemId)
    elem.style.background = '#1c542d'
    elem.style.color = 'white'
  }