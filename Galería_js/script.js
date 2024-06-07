  var lista = new
  Array('../Galería_js/imagenes/7.jpg','../Galería_js/imagenes/bici.jfif','../Galería_js/imagenes/club.jpg','../Galería_js/imagenes/drive.jfif','../Galería_js/imagenes/hotel.jfif','../Galería_js/imagenes/rocky.jfif','../Galería_js/imagenes/tony.jfif')
  var indiceact = 0;

  function cambiar_indice(indice){
  indiceact = indice;
  document.principal.src = lista[indiceact];
  }

  function cambiarImagen(indice){
    indiceact = indice;
    document.principal.src = lista[indiceact ];
  }

  function siguiente(){
      indiceact = (indiceact + 1) % lista.length;
      cambiar_indice(indiceact);
  }

  function anterior(){
      indiceact = (indiceact - 1) % lista.length;
      cambiar_indice(indice);
  }


  document.querySelector('img[src="../Galería_js/imagenes/nexxt.png"').addEventListener('click', siguiente)
  document.querySelector('img[src="../Galería_js/imagenes/back.png"').addEventListener('click', anterior)


  for (var i = 0; i < lista.length; i++) {
      (function(indice) {
        document.querySelector('img[src="' + lista[indice] ).addEventListener('click', function() {
        cambiarImagen(indice);
        });
      })(i);
    }
    