class Personaje{
    constructor(nombre, ataque){
        this.nombre= nombre;
        this.ataque= ataque
    }
   atacar(){
    return this.nombre + " atacó con: " + this.ataque;
   }
}


class Guerrero extends Personaje{
    constructor(nombre, ataque){
        super(nombre,ataque)
    }

    atacar(){
        return this.nombre + " Atacó con: " + this.ataque;
    }
}

class Mago extends Personaje{
    constructor(nombre,ataque){
        super(nombre,ataque)
    }
    atacar(){
        return this.nombre + " Atacó con: " + this.ataque;
    }
}

const p1 = new Personaje("bot","nada");
document.write(p1.atacar() ,"<hr>");

const gue = new Guerrero("Thor", "Mazo");
document.write(gue.atacar(), "<hr>");

const mag = new Mago("Gandalf", "magia oscura");
document.write(mag.atacar(),"<hr>");
