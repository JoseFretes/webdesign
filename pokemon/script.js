function drawPokemon(l) {
    let content = "";
     const midiv = documento. createElement('div'); 
    MIDIV. classList. add ("col-lg-1", "col-md-2", "col-sm-3", "col-xs-6", "bg-dark", "rounded-5", "m-3"); 
    content = '<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + l + '.png" alt="Pokémon" id="' + l + '">'; 
    MIDIV. innerHTML = contenido; 
    $("#bulbasaur"). anexar (midiv); 
   }
   
   $(documento). ready(function() {
    $('img').click(function() {
    let valor = $(this).attr('id'); 
    const cadena = "https://pokeapi.co/api/v2/pokemon/" + valor + "/"; 
    $. get(cadena, function(res) {
    var htm = "";
    htm += '<div class="imgpoke">'; 
    htm += '<img id= "pordos" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/' + valor + '.png" class="bg-dark rounded-5" alt="Pokemon">'; 
    htm += '</div><div class="info">'; 
    htm += "<h2>" + res.name. toUpperCase() + "</h2>"; 
    htm += "<h4>Tipos :</h4>"; 
    htm += "<ul>"; 
    for (let i = 0; i < res.types.longitud; i++) {
    htm += "<li>" + res.types[i].tipo. nombre; 
    if (i == (res.types.length - 1)){
    htm += ".</li>";
    } else {
    htm +=", </li>";
    } 
   
    }
    htm += "</ul>"; 
    htm += "<p> Altura : " + res.height + "</p>"; 
    htm += "<p> Ancho : " + res.weight + "</p></div>"; 
    $("#datos"). html(htm); 
    $("#modal1"). mostrar(); 
    }, "json"); 
    }); 
   
    $(".cerrar"). click(function () {
    $(".modal").ocultar(); 
    }); 
   })
   
   $("#modal1"). ocultar(); 
   
   for (let i = 1; i <= 905; i++) {
    drawPokemon(i);
   }