function saludar(){
    titulo = document.getElementById ("titulo");
    nombre = prompt("Como te llamas?","");
    titulo.innerHTML = titulo.innerHTML + nombre;
}   