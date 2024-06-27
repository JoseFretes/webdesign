class Persona{
    constructor(nombre,edad,telefono){
        this.nombre =nombre;
        this.edad=edad;
        this.telefono=telefono;
        

    }mostrarDatos(){
    return "Nombre: " + this.nombre + "  Edad: " + this.edad + "  Telefono: " + this.telefono;
    
    }
    cargarTelefono(telefono){
        this.telefono = telefono
    }
}

class Alumno extends Persona{
    constructor(nombre,edad,tele,nm,fm){
        super(nombre,edad,tele);
        this.numeroMatricula = nm;
        this.fechaMatricula = fm;
    }
    mostrarDatos(){
        return super.mostrarDatos() + " Matricula: " + this.numeroMatricula + "  Fecha:  " + this.fechaMatricula;
    }
}



const p1 = new Persona("Xavi",27,"98673");
document.write(p1.mostrarDatos() + "<hr>");
const p2 = new Persona("José", 20, "46456");
document.write(p2.mostrarDatos() + "<hr>")

const a1 = new Alumno("Messi", 37, "654654",123,"25/04/2030");
document.write(a1.mostrarDatos() + "<hr>")