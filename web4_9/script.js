class Rectangulo {
    constructor(largo, ancho) {
        this.largo = largo;
        this.ancho = ancho;
    }
    calcularArea() {
        return this.largo * this.ancho;
    }
    calcularPerimetro() {
        return (this.largo + this.ancho) * 2;
    }
}

class Cuadrado extends Rectangulo {
    constructor(lado) {
        super(lado, lado);
    }
}

const rec = new Rectangulo(5, 10);
document.write("El rectángulo con lado: " + rec.largo + " y ancho: " + rec.ancho + "<br>");
document.write("tiene un área de: " + rec.calcularArea() + " y un perímetro de: " + rec.calcularPerimetro() + "<hr>");

const cua = new Cuadrado(10);
document.write("El cuadrado de lado " + cua.largo + "<br>");
document.write("tiene por área: " + cua.calcularArea() + " y por perímetro: " + cua.calcularPerimetro());
