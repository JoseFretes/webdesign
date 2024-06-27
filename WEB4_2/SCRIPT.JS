var database = [
    {nombre : 'José', apellido: ' Fretes', direccion:'San Lorenzo'},
    {nombre : 'José', apellido: ' Fretes', direccion:'San Lorenzo'},
    {nombre : 'José', apellido: ' Fretes', direccion:'San Lorenzo'},
    {nombre : 'José', apellido: ' Fretes', direccion:'San Lorenzo'},
    {nombre : 'José', apellido: ' Fretes', direccion:'San Lorenzo'},
    {nombre : 'José', apellido: ' Fretes', direccion:'San Lorenzo'},
    {nombre : 'José', apellido: ' Fretes', direccion:'San Lorenzo'},
];



function leerJson(){
    var tabla = "";
    for (var i in database){
        tabla += "<tr>";
            tabla += "<td>" +database[i].nombre+"</td>"
             + "<td>"+ database[i].apellido + "</td>"  
             + "<td>"+ database[i].direccion + "</td>";
        tabla += "</tr>";
    }
    document.getElementById("resultado").innerHTML = tabla;
}

document.onload = leerJson();
