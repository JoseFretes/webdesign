var edad;
edad = prompt("Cuantos años tienes?","");
alert("Tienes "+ edad +" años");

if(edad >=18 && edad <= 90){
    alert("Usted es mayor de edad")

}else if(edad<18 && edad >=3){
    alert("Usted es menor de edad, no puede acceder")
}else{
    alert("Los datos ingresados NO son correctos")
}
